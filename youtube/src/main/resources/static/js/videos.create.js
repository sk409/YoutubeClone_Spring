/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/resources/js/videos.create.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/js/videos.create.js":
/*!************************************************!*\
  !*** ./src/main/resources/js/videos.create.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var STEP_VIDEO_SELECTION = 1;
var STEP_ADVANCED_SETTING = 2; // const STEP_PUBLISHING_SETTING = 3;

new Vue({
  el: "#videos-create",
  data: {
    steps: {
      active: STEP_VIDEO_SELECTION
    },
    thumbnail: {
      selectedIndex: 0
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
      url: null
    }
  },
  computed: {
    isVideoSelectionStep: function isVideoSelectionStep() {
      return this.steps.active === STEP_VIDEO_SELECTION;
    },
    isAdvancedSettingStep: function isAdvancedSettingStep() {
      return this.steps.active === STEP_ADVANCED_SETTING;
    } // isPublishingSettingStep() {
    //     return this.steps.active === STEP_PUBLISHING_SETTING;
    // },

  },
  methods: {
    setVideo: function setVideo(e) {
      var _this = this;

      e.preventDefault();
      var files = e.dataTransfer.files;

      if (files.length === 0) {
        this.$notify.error({
          message: "ファイルがありません",
          duration: NOTIFICATION.duration.normal
        });
        return;
      }

      var file = files[0];

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
        duration: NOTIFICATION.duration.normal
      });
      this.$nextTick(function () {
        var video = _this.$refs.video;
        video.src = URL.createObjectURL(file);
        video.load();
        var tmpVideo = document.createElement("video");
        tmpVideo.src = URL.createObjectURL(file);
        tmpVideo.load();

        tmpVideo.onloadeddata = function () {
          var dstWidth = 213;
          var dstHeight = 120;
          var thumbnailUpload = _this.$refs.thumbnailUpload;
          thumbnailUpload.clientWidth = dstWidth;
          thumbnailUpload.clientHeight = dstHeight;
          var canvases = _this.$refs.canvases;

          var setImageData = function setImageData(index) {
            if (index === canvases.length) {
              return;
            }

            tmpVideo.currentTime = tmpVideo.duration * index / canvases.length;

            tmpVideo.onseeked = function () {
              var canvas = canvases[index];
              canvas.width = tmpVideo.videoWidth;
              canvas.height = tmpVideo.videoHeight;
              var context = canvas.getContext("2d");
              context.drawImage(tmpVideo, 0, 0);
              var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
              var resizedData = new Uint8ClampedArray(ImageInterpolator.nearestNeighbor(imageData.data, canvas.width, canvas.height, dstWidth, dstHeight));
              var resizedImageData = new ImageData(resizedData, dstWidth, dstHeight);
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
    selectThumbnail: function selectThumbnail(index) {
      this.thumbnail.selectedIndex = index;
    },
    thumbnailStyle: function thumbnailStyle(index) {
      if (index !== this.thumbnail.selectedIndex) {
        return {
          border: "3px solid rgba(0, 0, 0, 0)"
        };
      }

      return {
        border: "3px solid ".concat(COLOR.success)
      };
    },
    uploadVideo: function uploadVideo() {
      var _this2 = this;

      this.$refs.detailForm.validate(function (valid) {
        if (!valid) {
          return;
        }

        var formData = new FormData();
        formData.append("title", _this2.video.detailForm.title);
        formData.append("description", _this2.video.detailForm.description);
        formData.append("video", _this2.video.file);
        axios.post(ROUTES.videos.store(), formData, {
          "Content-Type": HTTP.header.contentType.multipartFormData
        }).then(function (response) {
          if (response.status === HTTP.status.ok) {
            _this2.$notify.success({
              message: "動画をアップロードしました",
              duration: NOTIFICATION.duration.normal
            });

            location.href = ROUTES.dashboard.videos();
          } else {
            _this2.$notify.error({
              message: "動画をアップロードできませんでした",
              duration: NOTIFICATION.duration.normal
            });
          }
        });
      });
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=videos.create.js.map