var drawer = document.getElementById("drawer");
var drawerPlaceholder = document.getElementById("drawerPlaceholder");
var closeButton = document.getElementById("closeButton");

drawerPlaceholder.addEventListener("click", (e) => {
    drawerPlaceholder.classList.add("drawerPlaceholderDown");
    drawer.classList.add("drawerUp");
});

closeButton.addEventListener("click", (e) => {
    drawerPlaceholder.classList.remove("drawerPlaceholderDown");
    drawer.classList.remove("drawerUp");
});