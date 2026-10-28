---
title: "Quản lý Plugin (1-DLL Modular)"
description: "Hướng dẫn cài đặt, kích hoạt, vô hiệu hóa và gỡ bỏ hoàn toàn các Plugin mở rộng trong NewaccNet ERP"
outline: deep
---

# Quản Lý Plugin Ngoại Vi (Kiến Trúc 1-DLL)

NewaccNet ERP được thiết kế theo mô hình **"Tòa nhà và Mảnh ghép"**. Khách hàng chỉ cần tải các tệp DLL mô-đun chức năng riêng biệt để mở rộng tính năng mà không làm thay đổi hay gây lỗi cho chương trình chính.

---

## 1. Cài Đặt Plugin Mới

1. Trên thanh Ribbon, chọn tab **Hệ Thống** $\rightarrow$ chọn nút **"Quản lý Plugin"**.
2. Nhấn nút **"Cài đặt Plugin"**.
3. Duyệt tìm và chọn tệp `.dll` của Plugin (ví dụ: `NewaccNet.Plugin.Construction.dll`).
4. Nhấn **Open**:
   * Hệ thống tự động sao chép Plugin vào thư mục lưu trữ.
   * Nạp ngay các nút bấm tính năng mới lên thanh Ribbon mà **không cần khởi động lại phần mềm**.

---

## 2. Bật / Tắt (Kích Hoạt & Vô Hiệu Hóa)

* Nếu tạm thời không dùng một tính năng mở rộng:
  * Chọn Plugin trong danh sách.
  * Nhấn nút **"Bật / Tắt Plugin"**.
  * Trạng thái sẽ chuyển từ `🟢 Đang kích hoạt` sang `⚪ Đã tắt`, các nút trên thanh Ribbon sẽ tự động ẩn đi.

---

## 3. Gỡ Bỏ Hoàn Toàn (Uninstall Cleanly)

* Khi không còn nhu cầu sử dụng:
  * Chọn Plugin trong danh sách $\rightarrow$ bấm **"Gỡ bỏ Plugin"**.
  * Hệ thống sẽ **xóa vĩnh viễn tệp `.dll` khỏi ổ cứng**, giải phóng bộ nhớ và dọn sạch menu Ribbon.
