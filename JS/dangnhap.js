function login() {
    // Giả lập đăng nhập thành công
    localStorage.setItem("isLogin", "true");

    const redirect = localStorage.getItem("redirectService");
    window.location.href = "home.html";
}

function register() {
    // Giả lập đăng ký thành công
    localStorage.setItem("isLogin", "true");
    window.location.href = "home.html";
}
