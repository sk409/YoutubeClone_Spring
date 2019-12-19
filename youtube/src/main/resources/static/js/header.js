const userIconButton = document.getElementById("user-icon-button");
userIconButton.onclick = function () {
    const userMenu = document.getElementById("user-menu");
    userMenu.style.display = userMenu.style.display == "none" || !userMenu.style.display ? "block" : "none";
    userMenu.style.top = userIconButton.clientHeight;
};