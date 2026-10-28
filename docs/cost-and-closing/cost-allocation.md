---
title: "Phân bổ chi phí tự động theo tiêu thức"
description: "Thuật toán và màn hình phân bổ chi phí chung (627, 641, 642) cho từng công trình, đơn hàng, hợp đồng theo nhiều tiêu thức"
outline: deep
---

# Phân Bổ Chi Phí Tự Động Theo Tiêu Thức

Dịch vụ lõi **CostAllocationService** trong `NewaccNet.Core` giải quyết bài toán phân bổ chi phí gián tiếp (điện, nước, khấu hao, quản lý chung) cho các đối tượng tập hợp chi phí (công trình, sản phẩm, hợp đồng) vào cuối kỳ.

---

## 1. Các Tiêu Thức Phân Bổ Hỗ Trợ

* **Theo Doanh thu:** Phân bổ tỷ lệ thuận theo doanh thu thực tế phát sinh của từng hợp đồng/dự án.
* **Theo Chi phí nhân công trực tiếp (622):** Phổ biến trong doanh nghiệp xây lắp và dịch vụ.
* **Theo Chi phí nguyên vật liệu trực tiếp (621):** Phổ biến trong doanh nghiệp sản xuất chế biến.
* **Theo Hệ số / Định mức người dùng tự chỉ định:** Nhập trực tiếp bảng tỷ lệ %.

---

## 2. Thao Tác Thực Hiện

1. Vào menu **Cuối Kỳ** $\rightarrow$ chọn **"Phân Bổ Chi Phí"**.
2. Chọn khoảng thời gian và **Tài khoản nguồn** cần phân bổ (ví dụ: `627` hoặc `154`).
3. Chọn **Tiêu thức phân bổ**.
4. Bấm **"Tính Toán Tỷ Lệ"**:
   * Hệ thống tự động tính hệ số phân bổ và bảng chia số tiền chi tiết cho từng đối tượng chi phí.
5. Nhấn **"Sinh Chứng Từ Phân Bổ"**:
   * Hệ thống tự động sinh bút toán Nợ `154 (chi tiết đối tượng)` / Có `627`.
