---
title: "Cài đặt & Yêu cầu hệ thống"
description: "Hướng dẫn cài đặt phần mềm NewaccNet ERP, cấu hình CSDL mẫu, công cụ chuyển đổi dữ liệu cũ, tệp JSON mồi và đăng nhập lần đầu"
outline: deep
---

# Hướng Dẫn Cài Đặt & Khởi Động Lần Đầu

Tài liệu này hướng dẫn chi tiết cách cài đặt phần mềm Kế toán **NewaccNet ERP 2026**, cấu hình cơ sở dữ liệu ban đầu từ thư mục `sampledb`, sử dụng công cụ chuyển đổi dữ liệu cũ (`migrate.exe`), nạp các tệp cấu hình JSON mồi ban đầu và thông tin đăng nhập hệ thống.

---

## 1. Yêu Cầu Cấu Hình Hệ Thống

| Thành phần | Cấu hình tối thiểu | Cấu hình khuyên dùng |
| :--- | :--- | :--- |
| **Hệ điều hành** | Windows 10 (64-bit) | Windows 11 / Windows Server 2022 |
| **Nền tảng Runtime** | Microsoft .NET 10.0 Desktop Runtime | Microsoft .NET 10.0 Desktop Runtime |
| **Bộ xử lý (CPU)** | Intel Core i3 thế hệ 8 trở lên | Intel Core i5 / AMD Ryzen 5 |
| **Bộ nhớ (RAM)** | 4 GB | 8 GB trở lên |
| **Ổ cứng trống** | 1 GB SSD | 5 GB SSD tốc độ cao |
| **Màn hình** | Độ phân giải 1366 x 768 | Full HD 1920 x 1080 |

---

## 2. Cài Đặt Các Thành Phần Phụ Trợ

### Bước 1: Cài đặt Microsoft .NET 10 Desktop Runtime
Phần mềm NewaccNet được xây dựng trên nền tảng .NET 10 hiện đại nhất của Microsoft:
1. Tải bộ cài `.NET 10.0 Desktop Runtime (x64)` từ trang chủ Microsoft.
2. Chạy file cài đặt và làm theo hướng dẫn trên màn hình cho đến khi hoàn tất.

![Cài đặt Microsoft .NET 10 Desktop Runtime](/images/general-guide-installation-step1-dotnet.png)
<p class="img-caption">Hình 1.1: Giao diện tiến trình cài đặt Microsoft .NET Desktop Runtime</p>

### Bước 2: Cài đặt Microsoft Access Database Engine (Khi dùng CSDL Access)
Nếu doanh nghiệp của bạn sử dụng CSDL dạng tệp `.accdb`:
* Cài đặt **Microsoft Access Database Engine 2016 Redistributable (x64)** (ACE.OLEDB.16.0) để phần mềm kết nối đọc/ghi file Access mượt mà.

---

## 3. Cấu Trúc Thư Mục Phần Mềm Khi Cài Đặt

Sau khi chạy file cài đặt `NewaccNet-Setup.exe` (hoặc giải nén gói triển khai), thư mục phần mềm NewaccNet sẽ bao gồm các thư mục và tệp chính sau:

* **`NewaccNet.Wpf.exe`**: Tệp khởi động chính của ứng dụng kế toán NewaccNet ERP.
* **`Plugins\`**: Thư mục chứa các phân hệ tiện ích mở rộng chuyên sâu (`NewaccNet.Plugin.ErpWarehouse.dll`, `NewaccNet.Plugin.CashBank.dll`...).
* **`sampledb\`**: Thư mục chứa các tệp Cơ sở dữ liệu mẫu chuẩn (`DL2023M.accdb`...) sẵn sàng đưa vào sử dụng ngay.
* **`template\`**: Thư mục lưu trữ các tệp **cấu hình JSON mẫu (dữ liệu mồi / khởi tạo ban đầu)** và các mẫu biểu in ấn:
  - *Dùng làm dữ liệu mồi khởi tạo nhanh:* Giúp người dùng nạp ngay bảng mối hạch toán chuẩn mà không cần nhập liệu thủ công từ đầu.
  - *Dùng để chạy thử nghiệm (test):* Đầy đủ các kịch bản định khoản mẫu để người dùng làm quen phần mềm.
* **`migrate.exe`**: Công cụ chuyên biệt dùng để chuyển đổi dữ liệu từ các phiên bản phần mềm cũ sang chuẩn NewaccNet ERP 2026.

![Cấu trúc thư mục cài đặt NewaccNet](/images/Cash/2026-11/explorer_TqCDOsoZ7l.png)
<p class="img-caption">Hình 1.2: Các thư mục và tệp thành phần cốt lõi của NewaccNet ERP</p>

---

## 4. Thiết Lập Cơ Sở Dữ Liệu Ban Đầu

Khi khởi chạy phần mềm lần đầu tiên, hệ thống sẽ mở cửa sổ **Cấu hình CSDL** để bạn thiết lập nơi lưu trữ số liệu. Bạn có 2 lựa chọn:

### Lựa chọn A: Sử dụng CSDL mẫu có sẵn trong thư mục `sampledb`
* Bấm nút **"Chọn tệp"** tại mục Microsoft Access.
* Trỏ đường dẫn đến tệp CSDL mẫu trong thư mục **`sampledb\`** (ví dụ: `C:\Program Files\NewaccNet\sampledb\DL2023M.accdb`).
* Bấm nút **"Kiểm tra kết nối"** $\rightarrow$ Khi thông báo thành công xuất hiện, bấm **"Lưu"**.

> [!TIP] Tận dụng tệp JSON mẫu trong thư mục `template\` làm dữ liệu mồi
> Trong quá trình sử dụng các phân hệ (Kho ERP, Nghiệp vụ Tiền...), bạn có thể bấm **"Nạp tệp JSON"** và trỏ vào thư mục **`template\`** để nạp nhanh toàn bộ bảng mối tài khoản chuẩn làm **dữ liệu mồi ban đầu** hoặc dùng cho mục đích chạy thử nghiệm (test), giúp tiết kiệm tối đa thời gian cấu hình.

### Lựa chọn B: Muốn dùng dữ liệu cũ $\rightarrow$ Chạy công cụ Chuyển Đổi Dữ Liệu (`migrate.exe`)
Nếu doanh nghiệp của bạn đã có dữ liệu từ các phần mềm kế toán Newacc thế hệ trước (FoxPro, Access cũ...):
1. Đóng phần mềm chính, mở thư mục cài đặt và chạy tệp **`migrate.exe`** (Chuyển đổi dữ liệu).
2. Cửa sổ công cụ chuyển đổi xuất hiện:
   * **Nguồn dữ liệu cũ:** Trỏ đến thư mục/tệp chứa dữ liệu của phiên bản cũ.
   * **Đích dữ liệu mới:** Chọn tệp CSDL đích trong NewaccNet ERP (hoặc tạo file mới từ `sampledb`).
3. Nhấn **"Bắt đầu chuyển đổi"**: Công cụ sẽ tự động rà soát, đồng bộ danh mục tài khoản, danh mục đối tác, danh mục vật tư hàng hóa, số dư đầu kỳ và toàn bộ chứng từ lịch sử sang cấu trúc CSDL NewaccNet ERP hoàn toàn tự động.

![Giao diện công cụ Chuyển đổi dữ liệu migrate.exe](/images/Cash/2026-11/NewaccNet.Wpf_N2Gkq9GfYD.png)
<p class="img-caption">Hình 1.3: Giao diện công cụ Chuyển đổi dữ liệu migrate.exe sang NewaccNet ERP</p>

---

## 5. Đăng Nhập Hệ Thống Lần Đầu Tiên

Sau khi hoàn tất cấu hình CSDL, màn hình đăng nhập hệ thống sẽ xuất hiện:

> [!IMPORTANT] Thông tin tài khoản đăng nhập mặc định
> * **Tên đăng nhập (User):** `admin`
> * **Mật khẩu (Password):** `newacc`

### Khuyến nghị bảo mật sau khi đăng nhập:
1. Đăng nhập thành công với quyền Quản trị tối cao (`admin`).
2. Vào tab **Hệ Thống $\rightarrow$ Quản lý người dùng**:
   * Tiến hành đổi mật khẩu mới cho tài khoản `admin`.
   * Phân quyền hoặc tạo thêm các tài khoản người dùng cho nhân viên kế toán (Kế toán tổng hợp, Kế toán kho, Kế toán thanh toán...) với quyền hạn tương ứng.

::: tip Lưu ý về quyền ghi thư mục cấu hình
Toàn bộ file cấu hình người dùng (`appsettings.json`, `UserSettings.json`, `plugins.json`) được NewaccNet lưu trữ tự động trong `%APPDATA%\NewaccNet\`. Điều này đảm bảo phần mềm hoạt động trơn tru không bao giờ gặp lỗi quyền ghi `Access Denied` của Windows UAC.
:::
