---
title: "Khấu hao Tài sản cố định tự động"
description: "Quy trình trích khấu hao TSCĐ hàng tháng, phân bổ chi phí khấu hao theo phòng ban và tự động sinh chứng từ kế toán"
outline: deep
---

# Khấu Hao Tài Sản Cố Định Tự Động

Phân hệ **Khấu hao TSCĐ** trong NewaccNet hỗ trợ theo dõi nguyên giá, giá trị hao mòn lũy kế, giá trị còn lại và tự động trích khấu hao theo phương pháp đường thẳng chuẩn quy định của Bộ Tài chính.

---

## 1. Quy Trình Trích Khấu Hao Hàng Tháng

Cuối mỗi tháng, kế toán viên chỉ cần thực hiện 3 bước:
1. Vào menu **Cuối Kỳ** $\rightarrow$ chọn **"Tính Khấu Hao TSCĐ"**.
2. Chọn **Từ ngày** và **Đến ngày** của tháng cần trích (ví dụ: `01/10/2026` đến `31/10/2026`).
3. Nhấn nút **"Tính Toán Khấu Hao"**:
   * Hệ thống sẽ tự động rà soát toàn bộ tài sản đang hoạt động.
   * Tính số tiền khấu hao tháng theo công thức:
     $$\text{Khấu hao tháng} = \frac{\text{Nguyên giá}}{\text{Thời gian sử dụng (năm)} \times 12}$$
   * Phân bổ chi phí vào các tài khoản đích tương ứng: `627` (sản xuất), `641` (bán hàng), `642` (quản lý doanh nghiệp).
4. Nhấn nút **"Tạo Chứng Từ Tự Động"**:
   * Hệ thống sinh ra Phiếu kế toán ghi Nợ `627/641/642` và ghi Có `2141` (Hao mòn TSCĐ) đưa thẳng vào Sổ Cái.
