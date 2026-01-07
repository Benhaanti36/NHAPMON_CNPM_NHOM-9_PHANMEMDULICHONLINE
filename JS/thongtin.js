

document.addEventListener("DOMContentLoaded", function () {
    const selected = localStorage.getItem("selectedPlace");

    document.querySelectorAll(".detail").forEach(item => {
        item.style.display = item.id === selected ? "block" : "none";
    });
});
