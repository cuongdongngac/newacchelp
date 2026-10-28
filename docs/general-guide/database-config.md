---
title: "Cấu hình Cơ sở dữ liệu"
description: "Hướng dẫn kết nối và chuyển đổi giữa 3 hệ quản trị CSDL: Microsoft SQL Server, PostgreSQL và MS Access"
outline: deep
---

# Cấu Hình Cơ Sở Dữ Liệu Đa Nền Tảng

NewaccNet ERP hỗ trợ độc quyền khả năng làm việc linh hoạt trên **cả 3 hệ quản trị Cơ sở Dữ liệu (CSDL)** hàng đầu, cho phép doanh nghiệp nâng cấp mượt mà từ quy mô nhỏ lên hệ thống doanh nghiệp lớn mà không làm gián đoạn dữ liệu.

---

## 1. So Sánh 3 Loại CSDL Trong NewaccNet

| Loại CSDL | Ưu điểm | Đối tượng sử dụng | Cơ chế kết nối Core |
| :--- | :--- | :--- | :--- |
| **Microsoft Access (`.accdb`)** | Nhẹ, không cần cài server, dễ sao chép sang máy khác | Cá nhân làm dịch vụ, hộ kinh doanh | `System.Data.OleDb` (ACE.OLEDB.16.0) |
| **Microsoft SQL Server** | Mạnh mẽ, bảo mật cao, tối ưu tuyệt hảo trên Windows | Doanh nghiệp vừa & lớn, nhiều máy trạm | `Microsoft.Data.SqlClient` |
| **PostgreSQL** | Mã nguồn mở, miễn phí giấy phép, hiệu năng cao trên đám mây | Doanh nghiệp công nghệ, Linux server | `Npgsql` |

---

## 2. Hướng Dẫn Thiết Lập Kết Nối

Khi khởi động lần đầu hoặc khi cần đổi CSDL:
1. Trên thanh Ribbon, vào menu **Hệ Thống** $\rightarrow$ bấm nút **"Cấu hình CSDL"**.
2. Chọn loại CSDL mong muốn:

### Lựa chọn 1: Dùng Microsoft Access
* Nhấn nút **"Chọn tệp"** và trỏ đến tệp dữ liệu kế toán (ví dụ: `D:\NewaccNet\Data\Newacc2026.accdb`).
* Nhấn **"Kiểm tra kết nối"** $\rightarrow$ Bấm **"Lưu"**.

### Lựa chọn 2: Dùng Microsoft SQL Server
* **Tên máy chủ (Server Name):** Nhập tên máy hoặc IP (ví dụ: `.\SQLEXPRESS` hoặc `192.168.1.100`).
* **Xác thực:**
  * Chọn *Windows Authentication* (nếu dùng chung tài khoản máy).
  * Hoặc chọn *SQL Server Authentication* và nhập User (`sa`), Mật khẩu.
* **Tên CSDL:** Chọn CSDL kế toán trong danh sách.
* Nhấn **"Kiểm tra kết nối"** $\rightarrow$ Bấm **"Lưu"**.

### Lựa chọn 3: Dùng PostgreSQL
* Nhập **Host** (mặc định: `localhost`), **Port** (mặc định: `5432`), **Database**, **User** và **Password**.
* Nhấn **"Kiểm tra kết nối"** $\rightarrow$ Bấm **"Lưu"**.

::: tip Tính năng tự động hóa của Core
Sau khi bạn lưu cấu hình, lớp [`AppDataAccessAdapter.Create()`](/plugins/developer-guide) trong lõi `NewaccNet.Core` sẽ tự động phân giải driver phù hợp và áp dụng ngay lập tức cho toàn bộ giao diện và các Plugin đang chạy.
:::
