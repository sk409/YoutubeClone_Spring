// import {
//     ROUTES
// } from "./app.js";
import "./app.js";
import Vue from "vue";

new Vue({
  el: "#index",
  data: {
    userMenu: {
      isVisible: false
    }
  },
  mounted() {
    this.$sidenav();
  },
  methods: {
    transitionToVideosCreate() {
      location.href = ROUTES.videos.create();
    },
    toggleUserMenu() {
      this.userMenu.isVisible = !this.userMenu.isVisible;
    }
  }
});
// const uploadVideoButton = document.getElementById("upload-video-button")
// uploadVideoButton.onclick = function () {
//     location.href = routes.videos.create();
// }

// const userProfileImageButton = document.getElementById("user-profile-image-button");
// const userMenu = document.getElementById("user-menu");
// userMenu.style.top = userProfileImageButton.clientHeight;
// userProfileImageButton.onclick = function () {
//     if (userMenu.classList.contains("d-none")) {
//         userMenu.classList.remove("d-none");
//         userMenu.classList.add("d-block");
//     } else {
//         userMenu.classList.remove("d-block");
//         userMenu.classList.add("d-none");
//     }
// };
