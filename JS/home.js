function checkAuth(serviceName) {
    // 1. Lưu dịch vụ người dùng muốn vào để sau khi đăng nhập xong có thể chuyển tiếp
    localStorage.setItem('redirectService', serviceName);
    
    // 2. Chuyển hướng sang trang đăng nhập
    alert(`Bạn cần đăng nhập để sử dụng dịch vụ: ${serviceName}`);
    window.location.href = "dangnhap.html";
}