# Kĩ thuật routing
    # Chia nhỏ nội dung source code dễ debug mà maintaint
# Kĩ thuật controlling trong mô hình MVC
    1) Sử dụng  Router định nghĩa Function,  sau đó điều hướng request đến Controller để controller xử lý
    2) Hệ thống source code được chia nhỏ vào các thư mục dễ quản lý và bảo trì
# Static file to send public content to client
# Sử dụng hệ thống middleware để  bảo vệ hệ thống
    1. Dùng midleware đặt trước controller để vảo vệ các các hàm đầu vào, tách riêng phần xử lý logic
