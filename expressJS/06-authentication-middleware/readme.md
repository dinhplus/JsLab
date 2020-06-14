# Kĩ thuật routing

    # Chia nhỏ nội dung source code dễ debug mà maintaint

# Kĩ thuật controlling trong mô hình MVC

    1) Sử dụng  Router định nghĩa Function,  sau đó điều hướng request đến Controller để controller xử lý
    2) Hệ thống source code được chia nhỏ vào các thư mục dễ quản lý và bảo trì

# Sử dụng hệ thống middleware để bảo vệ hệ thống

    1. Dùng midleware đặt trước controller để vảo vệ các các hàm đầu vào, tách riêng phần xử lý logic

# Tạo cookies và yêu cầu client lưu trữ , kiểm duyệt,

    => Dùng cookies để auth khi đăng nhập, đồng thời dùng middleware kiểm duyệt thông tin người dùng đầu vào đã đăng nhập hay chưa, nếu chưa đăng nhập thì redirect về trang đăng nhập, nếu cookies đã tồn tại không khớp sẽ bắt đăng nhập lại.

# Nâng cao tính bảo mật đăng nhập

    1) Mã hóa mật khẩu lưu ở db, về sau sẽ thêm mã hóa dữ liệu gửi từ clients (Khi xây dựng product)
    2) Sử dựng signedCookie để bảo vệ người dùng tránh bị hack qua cookies
    3) Đã kiểm duyệt mật khẩu ở phía client, dữ liệu trống hoặc không hợp lệ sẽ bị ở lại

# Search Validate from clients

# Using Environment Variables

    => Protect  key with commit to Git Repo

<!-- # Issue :
    1) Chưa kiểm duyệt mật khẩu đầu vào ở client
    2) Dữ liệu mẫu gửi qua lại đang ở dạng text có thể đọc được, sẽ hoàn thiện trong bài sau -->
