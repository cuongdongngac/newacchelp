---
title: "Kết chuyển chi phí & Xác định KQKD"
description: "Quy trình kết chuyển số dư doanh thu và chi phí cuối kỳ sang tài khoản 911 để xác định lãi/lỗ kế toán"
outline: deep
---

# Kết Chuyển Tự Động Xác Định Kết Quả Kinh Doanh

Dịch vụ lõi **CostTransferService** tự động hóa hoàn toàn các bút toán kết chuyển cuối tháng, cuối quý hoặc cuối năm tài chính sang tài khoản `911` (Xác định kết quả kinh doanh).

---

## 1. Các Cặp Tài Khoản Kết Chuyển Tiêu Chuẩn

Hệ thống đã cấu hình sẵn bộ quy tắc kết chuyển chuẩn mực:
* **Kết chuyển Doanh thu:** Nợ TK `511`, `515`, `711` $\rightarrow$ Có TK `911`.
* **Kết chuyển Chi phí:** Nợ TK `911` $\rightarrow$ Có TK `632`, `635`, `641`, `642`, `811`, `821`.
* **Kết chuyển Lãi / Lỗ:**
  * Nếu Lãi (Doanh thu > Chi phí): Nợ TK `911` $\rightarrow$ Có TK `4212` (Lợi nhuận sau thuế chưa phân phối năm nay).
  * Nếu Lỗ (Chi phí > Doanh thu): Nợ TK `4212` $\rightarrow$ Có TK `911`.

---

## 2. Thao Tác Thực Hiện

1. Vào menu **Cuối Kỳ** $\rightarrow$ chọn **"Kết Chuyển Xác Định KQKD"**.
2. Chọn kỳ kết chuyển.
3. Nhấn nút **"Lấy Số Liệu & Tính Toán"**: Bảng số liệu đối ứng giữa các tài khoản và số tiền kết chuyển sẽ hiển thị đầy đủ.
4. Nhấn nút **"Tạo Chứng Từ Kết Chuyển"**: Một chứng từ Phiếu kế toán tổng hợp sẽ được sinh ra, đưa số dư các tài khoản doanh thu chi phí (loại 5 đến loại 9) về bằng 0.
