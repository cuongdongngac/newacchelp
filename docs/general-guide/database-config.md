---
title: "Cấu hình Cơ sở dữ liệu"
description: "Hướng dẫn kết nối và chuyển đổi giữa 3 hệ quản trị CSDL: Microsoft SQL Server, PostgreSQL và MS Access"
outline: deep
---

# Cấu Hình Cơ Sở Dữ Liệu Đa Nền Tảng

NewaccNet ERP hỗ trợ độc quyền khả năng làm việc linh hoạt trên **cả 3 hệ quản trị Cơ sở Dữ liệu (CSDL)** hàng đầu, cho phép doanh nghiệp nâng cấp mượt mà từ quy mô nhỏ lên hệ thống doanh nghiệp lớn mà không làm gián đoạn dữ liệu.

---

## 1. So Sánh 3 Loại CSDL Trong NewaccNet

| Loại CSDL | Ưu điểm nổi bật | Đối tượng & Phạm vi phù hợp |
| :--- | :--- | :--- |
| **Microsoft Access (`.accdb`)** | Nhẹ nhàng, không cần cài đặt máy chủ, toàn bộ dữ liệu gói gọn trong 1 file, dễ dàng sao chép | Kế toán làm dịch vụ cho nhiều công ty, hộ kinh doanh, kế toán làm việc độc lập trên 1 máy tính |
| **Microsoft SQL Server** | Tốc độ cao, bảo mật nhiều lớp, tối ưu tuyệt hảo trên môi trường Windows | Doanh nghiệp vừa & lớn, nhiều máy tính cùng nhập liệu đồng thời trong mạng nội bộ |
| **PostgreSQL** | Cơ sở dữ liệu nguồn mở mạnh mẽ, độ ổn định cao, tiết kiệm chi phí bản quyền máy chủ | Doanh nghiệp triển khai trên hệ thống máy chủ chuyên dụng nội bộ hoặc đám mây riêng |

---

## 2. Hướng Dẫn Thiết Lập Kết Nối

Khi khởi động lần đầu hoặc khi cần đổi CSDL:
1. Trên thanh Ribbon, vào menu **Hệ Thống** $\rightarrow$ bấm nút **"Cấu hình CSDL"**.
2. Cửa sổ thiết lập kết nối xuất hiện cho phép lựa chọn hệ quản trị tương ứng:

![Cửa sổ Cấu hình CSDL](/images/general-guide-database-config-window.png)
<p class="img-caption">Hình 1.3: Giao diện trung tâm Cấu hình Cơ sở dữ liệu NewaccNet ERP</p>

### Lựa chọn 1: Dùng Microsoft Access (Máy đơn)
* Nhấn nút **"Chọn tệp"** và trỏ đến tệp dữ liệu kế toán (ví dụ: `D:\NewaccNet\Data\Newacc2026.accdb`).
* Nhấn **"Kiểm tra kết nối"** $\rightarrow$ Bấm **"Lưu"**.

### Lựa chọn 2: Dùng Microsoft SQL Server (Mạng nội bộ)
* **Tên máy chủ (Server Name):** Nhập tên máy chủ hoặc địa chỉ IP máy chủ nội bộ (ví dụ: `.\SQLEXPRESS` hoặc `192.168.1.100`).
* **Phương thức xác thực:**
  * Chọn *Windows Authentication* (dùng tài khoản đăng nhập Windows).
  * Hoặc chọn *SQL Server Authentication* và nhập Tên đăng nhập (`sa`), Mật khẩu.
* **Tên CSDL:** Chọn tên cơ sở dữ liệu kế toán trong danh sách.
* Nhấn **"Kiểm tra kết nối"** $\rightarrow$ Bấm **"Lưu"**.

### Lựa chọn 3: Dùng PostgreSQL
* Nhập **Địa chỉ máy chủ (Host)** (mặc định: `localhost`), **Cổng (Port)** (mặc định: `5432`), **Tên CSDL**, **Người dùng** và **Mật khẩu**.
* Nhấn **"Kiểm tra kết nối"** $\rightarrow$ Bấm **"Lưu"**.

![Kiểm tra kết nối thành công](/images/general-guide-database-config-connection-test.png)
<p class="img-caption">Hình 1.4: Thông báo xác nhận kiểm tra kết nối CSDL thành công</p>

::: tip Chuyển đổi dữ liệu linh hoạt
Bạn có thể dễ dàng tạo thêm các tệp dữ liệu Access riêng cho từng công ty hoặc chuyển đổi kết nối sang SQL Server bất cứ lúc nào thông qua màn hình này mà không cần cài lại phần mềm.
:::
