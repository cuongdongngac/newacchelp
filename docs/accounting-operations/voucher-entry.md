---
title: "Nhập chứng từ đa năng (JournalVoucher)"
description: "Hướng dẫn sử dụng màn hình nhập liệu chứng từ đa năng trong NewaccNet ERP: Thu, Chi, Báo Nợ, Báo Có, Phiếu kế toán"
outline: deep
---

# Màn Hình Nhập Chứng Từ Đa Năng

Màn hình Chứng từ (`VoucherEntryWindow`) là nơi kế toán viên thực hiện phần lớn các giao dịch hàng ngày. Hệ thống hỗ trợ nhập đồng thời nhiều loại chứng từ kế toán trong một giao diện thống nhất.

![Giao diện nhập chứng từ đa năng](/images/accounting-operations-voucher-entry-overview.png)
<p class="img-caption">Hình 3.1: Giao diện tổng quan màn hình nhập chứng từ đa năng (JournalVoucher)</p>

---

## 1. Cấu Trúc Giao Diện Chứng Từ

Giao diện được chia thành 3 phần khoa học:
1. **Phần Thông tin chung (Header):**
   * **Số chứng từ (`VoucherNo`):** Tự động sinh theo quy tắc (ví dụ: `PT001` cho Phiếu thu, `PC001` cho Phiếu chi, `PKT001` cho Phiếu kế toán...).
   * **Ngày chứng từ (`VoucherDate`):** Ô nhập `AppDateEdit` định dạng `dd/MM/yyyy` hỗ trợ tự nhảy con trỏ.
   * **Đối tượng (`PartnerId`):** Khách hàng / Nhà cung cấp liên quan.
   * **Diễn giải (`Contents`):** Lý do chi tiền, nội dung kinh tế phát sinh.
2. **Lưới định khoản chi tiết (Detail Grid):**
   * **Tài khoản Nợ (`DebitAccount`)** & **Tài khoản Có (`CreditAccount`)**.
   * **Số tiền (`Amount`)**: Số tiền phát sinh (tự động đọc thành chữ ở góc dưới).
   * **Đối tượng Nợ / Đối tượng Có**: Phục vụ theo dõi công nợ chi tiết 2 chiều.
   * **Mã công trình / Khoản mục chi phí**: Phục vụ tập hợp chi phí giá thành.

![Lưới định khoản chi tiết](/images/accounting-operations-voucher-entry-detail-grid.png)
<p class="img-caption">Hình 3.2: Lưới định khoản chi tiết nợ có và theo dõi công nợ hai chiều</p>

3. **Thanh công cụ tác nghiệp:**
   * Nút **Thêm mới** (`F4`)
   * Nút **Lưu chứng từ** (`Ctrl + S`)
   * Nút **In chứng từ** (In Phiếu thu, Phiếu chi, Ủy nhiệm chi chuẩn mực)
   * Nút **Xóa chứng từ** (`Ctrl + Delete`)

![Xem trước khi in chứng từ](/images/accounting-operations-voucher-entry-print-preview.png)
<p class="img-caption">Hình 3.3: Xem trước và in mẫu chứng từ chuẩn mực DevExpress XtraReports</p>

---

## 2. Quy Trình Thêm Mới Và Lưu Chứng Từ

1. Bấm **"Thêm mới"** (`F4`).
2. Nhập ngày chứng từ (hệ thống mặc định là ngày hôm nay).
3. Chọn Đối tượng giao dịch và gõ Diễn giải.
4. Xuống lưới chi tiết: Gõ TK Nợ, TK Có, Số tiền.
5. Kiểm tra tổng số tiền bằng chữ hiển thị phía dưới.
6. Nhấn **"Lưu"** (`Ctrl + S`).

::: tip Phím tắt hỗ trợ nhập liệu siêu tốc
* `Tab` hoặc `Enter`: Di chuyển nhanh giữa các ô nhập liệu.
* `F4`: Thêm chứng từ mới.
* `Ctrl + S`: Lưu chứng từ đang sửa/nhập.
* `Ctrl + Delete`: Xóa dòng chi tiết đang chọn (có xác nhận).
:::
