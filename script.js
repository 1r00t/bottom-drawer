var drawer = document.getElementById("drawer");
var drawerPlaceholder = document.getElementById("drawerPlaceholder");
var close = document.getElementById("close");

drawerPlaceholder.addEventListener("click", (e) => {
    drawerPlaceholder.classList.add("drawerPlaceholderDown");
    drawer.classList.add("drawerUp");
});

close.addEventListener("click", (e) => {
    drawerPlaceholder.classList.remove("drawerPlaceholderDown");
    drawer.classList.remove("drawerUp");
});