
document.addEventListener("DOMContentLoaded", function () {
    const isLogin = localStorage.getItem("isLogin");

    const authBtns = document.getElementById("authBtns");
    const logoutBtn = document.getElementById("logoutBtn");

    if (isLogin === "true") {
        if (authBtns) authBtns.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "block";
    } else {
        if (authBtns) authBtns.style.display = "block";
        if (logoutBtn) logoutBtn.style.display = "none";
    }
});

function logout() {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("redirectService");
    window.location.reload();
}
function goThongTin(place) {
    localStorage.setItem("selectedPlace", place);
    window.location.href = "thongtin.html";
}
