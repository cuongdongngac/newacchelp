---
title: "Cài đặt & Yêu cầu hệ thống"
description: "Hướng dẫn cài đặt phần mềm NewaccNet ERP và các thành phần phụ trợ cần thiết trên môi trường Windows"
outline: deep
---

# Hướng Dẫn Cài Đặt & Yêu Cầu Hệ Thống

Tài liệu này hướng dẫn chi tiết cách cài đặt phần mềm Kế toán **NewaccNet ERP 2026** và các thành phần phụ trợ trên hệ điều hành Windows.

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

## 2. Các Bước Cài Đặt Chi Tiết

### Bước 1: Cài đặt Microsoft .NET 10 Desktop Runtime
Phần mềm NewaccNet được xây dựng trên nền tảng .NET 10 hiện đại nhất.
1. Tải bộ cài `.NET 10.0 Desktop Runtime (x64)` từ trang chủ Microsoft.
2. Chạy file cài đặt và làm theo hướng dẫn trên màn hình cho đến khi hoàn tất.

![Cài đặt Microsoft .NET 10 Desktop Runtime](/images/general-guide-installation-step1-dotnet.png)
<p class="img-caption">Hình 1.1: Giao diện tiến trình cài đặt Microsoft .NET Desktop Runtime</p>

### Bước 2: Cài đặt Microsoft Access Database Engine (Nếu dùng CSDL Access)
Nếu doanh nghiệp của bạn sử dụng CSDL dạng tệp `.accdb`:
* Cần cài đặt **Microsoft Access Database Engine 2016 Redistributable (x64)** (ACE.OLEDB.16.0).

### Bước 3: Giải nén hoặc chạy Bộ cài NewaccNet ERP
1. Chạy file `NewaccNet_Setup_v2026.exe`.
2. Mặc định phần mềm sẽ được cài vào đường dẫn:
   `C:\Program Files\NewaccNet ERP\` (hoặc thư mục di động bạn chỉ định).
3. Biểu tượng phần mềm **NewaccNet ERP** sẽ tự động xuất hiện trên màn hình Desktop.

![Biểu tượng NewaccNet trên Desktop](/images/general-guide-installation-desktop-shortcut.png)
<p class="img-caption">Hình 1.2: Biểu tượng lối tắt NewaccNet ERP trên màn hình Desktop</p>

::: tip Lưu ý về quyền ghi thư mục cấu hình
Toàn bộ file cấu hình người dùng (`appsettings.json`, `UserSettings.json`, `plugins.json`) được NewaccNet lưu trữ tự động trong `%APPDATA%\NewaccNet\`. Điều này đảm bảo phần mềm hoạt động trơn tru không bao giờ gặp lỗi quyền ghi `Access Denied` của Windows UAC.
:::
