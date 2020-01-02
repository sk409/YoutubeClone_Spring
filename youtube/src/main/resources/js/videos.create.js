const STEP_VIDEO_SELECTION = 1;
const STEP_ADVANCED_SETTING = 2;
// const STEP_PUBLISHING_SETTING = 3;

new Vue({
    el: "#videos-create",
    data: {
        steps: {
            active: STEP_VIDEO_SELECTION,
        },
        thumbnail: {
            selectedIndex: 0,
        },
        video: {
            file: null,
            detailForm: {
                title: null,
                description: null,
                rules: {
                    title: [{
                        required: true,
                        message: "タイトルを入力してください"
                    }],
                    description: [{
                        required: true,
                        message: "説明を入力してください"
                    }]
                }
            },
            name: null,
            url: null,
        }
    },
    computed: {
        isVideoSelectionStep() {
            return this.steps.active === STEP_VIDEO_SELECTION;
        },
        isAdvancedSettingStep() {
            return this.steps.active === STEP_ADVANCED_SETTING;
        },
        // isPublishingSettingStep() {
        //     return this.steps.active === STEP_PUBLISHING_SETTING;
        // },
    },
    methods: {
        setVideo(e) {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length === 0) {
                this.$notify.error({
                    message: "ファイルがありません",
                    duration: NOTIFICATION.duration.normal
                });
                return;
            }
            const file = files[0];
            if (!file.type.startsWith("video")) {
                this.$notify.error({
                    message: "動画以外はアップロードできません",
                    duration: NOTIFICATION.duration.normal
                });
                return;
            }
            this.video.file = file;
            this.video.name = file.name;
            this.video.url = PATH.join(SERVER_ORIGIN, UUID());
            this.steps.active = STEP_ADVANCED_SETTING;
            this.$notify.success({
                message: "動画を選択しました",
                duration: NOTIFICATION.duration.normal,
            });
            this.$nextTick(() => {
                const video = this.$refs.video;
                video.src = URL.createObjectURL(file);
                video.load();
                const tmpVideo = document.createElement("video");
                tmpVideo.src = URL.createObjectURL(file);
                tmpVideo.load();
                tmpVideo.onloadeddata = () => {
                    const dstWidth = 213;
                    const dstHeight = 120;
                    const thumbnailUpload = this.$refs.thumbnailUpload;
                    thumbnailUpload.clientWidth = dstWidth;
                    thumbnailUpload.clientHeight = dstHeight;
                    const canvases = this.$refs.canvases;
                    const setImageData = (index) => {
                        if (index === canvases.length) {
                            return;
                        }
                        tmpVideo.currentTime = tmpVideo.duration * index / canvases.length;
                        tmpVideo.onseeked = function () {
                            const canvas = canvases[index];
                            canvas.width = tmpVideo.videoWidth;
                            canvas.height = tmpVideo.videoHeight;
                            const context = canvas.getContext("2d");
                            context.drawImage(tmpVideo, 0, 0);
                            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                            const resizedData = new Uint8ClampedArray(
                                ImageInterpolator.nearestNeighbor(imageData.data, canvas.width, canvas.height, dstWidth, dstHeight)
                            );
                            const resizedImageData = new ImageData(resizedData, dstWidth, dstHeight);
                            canvas.width = dstWidth;
                            canvas.height = dstHeight;
                            context.putImageData(resizedImageData, 0, 0);
                            setImageData(index + 1);
                        };
                    };
                    setImageData(0);
                };
            });
        },
        selectThumbnail(index) {
            this.thumbnail.selectedIndex = index;
        },
        thumbnailStyle(index) {
            if (index !== this.thumbnail.selectedIndex) {
                return {
                    border: "3px solid rgba(0, 0, 0, 0)"
                };
            }
            return {
                border: `3px solid ${COLOR.success}`
            };
        },
        uploadVideo() {
            this.$refs.detailForm.validate(valid => {
                if (!valid) {
                    return;
                }
                const formData = new FormData();
                formData.append("title", this.video.detailForm.title);
                formData.append("description", this.video.detailForm.description);
                formData.append("video", this.video.file);
                axios.post(ROUTES.videos.store(), formData, {
                    "Content-Type": HTTP.header.contentType.multipartFormData
                }).then(response => {
                    if (response.status === HTTP.status.ok) {
                        this.$notify.success({
                            message: "動画をアップロードしました",
                            duration: NOTIFICATION.duration.normal
                        });
                        location.href = ROUTES.dashboard.videos();
                    } else {
                        this.$notify.error({
                            message: "動画をアップロードできませんでした",
                            duration: NOTIFICATION.duration.normal
                        });
                    }
                });
            });
        }
    }
});