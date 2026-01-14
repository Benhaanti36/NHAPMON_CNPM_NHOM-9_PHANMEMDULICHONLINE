// Hàm Đăng Ký
function register() {
    // Lấy dữ liệu từ các ô input
    const name = document.querySelector('input[placeholder="Họ và tên"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Mật khẩu"]').value;

    if (!name || !email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Tạo đối tượng người dùng
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Lưu thông tin vào LocalStorage (Chuyển object thành chuỗi JSON)
    localStorage.setItem("userAccount", JSON.stringify(user));
    localStorage.setItem("isLogin", "true");

    alert("Đăng ký thành công!");
    window.location.href = "home.html";
}

// Hàm Đăng Nhập
function login() {
    const emailInput = document.querySelector('input[placeholder*="Email"]').value;
    const passInput = document.querySelector('input[placeholder="Mật khẩu"]').value;

    // Lấy thông tin đã lưu trong máy
    const savedUser = JSON.parse(localStorage.getItem("userAccount"));

    if (savedUser) {
        // Kiểm tra tài khoản và mật khẩu
        if (emailInput === savedUser.email && passInput === savedUser.password) {
            localStorage.setItem("isLogin", "true");
            alert("Chào mừng " + savedUser.name + " trở lại!");
            window.location.href = "home.html";
        } else {
            alert("Sai email hoặc mật khẩu!");
        }
    } else {
        alert("Tài khoản không tồn tại. Vui lòng đăng ký!");
    }
}