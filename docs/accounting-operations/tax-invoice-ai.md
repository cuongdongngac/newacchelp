---
title: "Trợ lý AI Hóa đơn điện tử"
description: "Tự động đọc tệp XML hóa đơn điện tử, so khớp mã vật tư thông minh bằng trí tuệ nhân tạo và sinh chứng từ kế toán tự động"
outline: deep
---

# Trợ Lý AI Hóa Đơn Điện Tử

Phân hệ **AI Studio / TaxInvoice** trong NewaccNet tích hợp trực tiếp công nghệ trí tuệ nhân tạo (hỗ trợ mô hình ngôn ngữ lớn qua OpenRouter API) giúp tự động hóa khâu xử lý hóa đơn đầu vào.

---

## 1. Tính Năng Nổi Bật

* **Đọc tệp XML hàng loạt:** Tải và bóc tách dữ liệu từ file XML hóa đơn điện tử của tất cả các nhà cung cấp phổ biến (Viettel, VNPT, MISA, BKAV, FPT...).
* **Kiểm tra tính hợp lệ & Chữ ký số:** Xác thực mã cơ quan thuế và tính toàn vẹn của hóa đơn.
* **AI Fuzzy Matching (So khớp mờ):** Tự động nhận diện tên hàng hóa trên hóa đơn với mã vật tư sẵn có trong danh mục nội bộ (ví dụ: *"Cát vàng hạt to đóng bao"* $\rightarrow$ tự động khớp với mã `VT_CAT_VANG`).
* **Sinh chứng từ 1-Click:** Tự động tạo Phiếu nhập kho và Chứng từ kế toán, đưa thẳng vào sổ sách mà không cần gõ tay.

---

## 2. Quy Trình Sử Dụng

1. Trên thanh Ribbon, bấm vào tab **AI & Hóa Đơn** $\rightarrow$ chọn **"Nạp Hóa Đơn Điện Tử"**.
2. Chọn thư mục chứa các file `.xml` hóa đơn mua vào.
3. Hệ thống sẽ liệt kê danh sách hóa đơn kèm bảng chi tiết hàng hóa.
4. Bấm **"AI Tự Động So Khớp"**: Hệ thống sẽ tự động ghép mã vật tư tương ứng.
5. Nhấn **"Sinh Chứng Từ Hạch Toán"**: Các phiếu nhập kho và định khoản Nợ 156 / Nợ 133 / Có 331 sẽ được sinh ra ngay lập tức.
