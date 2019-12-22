const dropbox = document.querySelector(".dropbox");
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