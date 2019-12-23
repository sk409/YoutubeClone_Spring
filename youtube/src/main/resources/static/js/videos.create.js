new Vue({
    el: "#videos-create",
    data: {
        form: {
            video: {
                rules: {

                }
            }
        },
        steps: {
            active: 1,
        },
        video: {
            data: "",
            title: "",
            description: "",
        }
    },
    computed: {
        isStep1() {
            return this.steps.active === 1;
        },
        isStep2() {
            return this.steps.active === 2;
        },
        isStep3() {
            return this.steps.active === 3;
        },
        videoDataUrl() {

        }
    },
    methods: {
        setVideo(e) {
            e.preventDefault();
            e.stopPropagation();
            const files = e.dataTransfer.files;
            if (files.length === 0) {
                return;
            }
            const file = files[0];
            if (!file.type.startsWith("video")) {
                return;
            }
            const fileReader = new FileReader();
            const that = this;
            fileReader.onload = function (e) {
                e.preventDefault();
                e.stopPropagation();
                that.video.data = e.target.result;
                // const rawData = "aaa";
                // const formData = new FormData();
                // formData.append("video", rawData);
                // // console.log("BEFORE POST");
                // axios.post(routes.videos.store(), formData, {
                //     headers: {
                //         'content-type': 'multipart/form-data',
                //     },
                // }).then(response => {
                //     console.log(response);
                // });
                that.goToStep2();
                return false;
            }
            fileReader.readAsBinaryString(file);
            return false;
        },
        goToStep2() {
            this.steps.active = 2;
        },
        goToStep3() {
            this.steps.active = 3;
        },
    }
})


// const dropbox = document.querySelector(".dropbox");
// dropbox.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
// });
// dropbox.addEventListener("drop", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const files = e.dataTransfer.files;
//     if (files.length === 0) {
//         return;
//     }
//     const file = files[0];
//     if (!file.type.startsWith("video")) {
//         return;
//     }
//     const fileReader = new FileReader();
//     fileReader.onload = function (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         const rawData = e.target.result;
//         // const rawData = "aaa";
//         const formData = new FormData();
//         formData.append("video", rawData);
//         // console.log("BEFORE POST");
//         axios.post(routes.videos.store(), formData, {
//             headers: {
//                 'content-type': 'multipart/form-data',
//             },
//         }).then(response => {
//             console.log(response);
//         });
//         return false;
//     }
//     fileReader.readAsBinaryString(file);
//     return false;
// });