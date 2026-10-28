---
title: "Tính giá vốn xuất kho BQGQ"
description: "Dịch vụ tính giá vốn xuất kho tự động theo phương pháp Bình quân gia quyền cả kỳ và cập nhật giá xuất cho các phiếu xuất kho"
outline: deep
---

# Tính Giá Vốn Xuất Kho Bình Quân Gia Quyền

Dịch vụ lõi **InventoryValuationService** tính toán lại đơn giá xuất kho và cập nhật tiền giá vốn (Nợ `632` / Có `156`) cho toàn bộ các phiếu xuất kho trong kỳ.

---

## 1. Công Thức Tính Đơn Giá Bình Quân

$$\text{Đơn giá BQ} = \frac{\text{Giá trị tồn đầu kỳ} + \text{Tổng giá trị nhập trong kỳ}}{\text{Số lượng tồn đầu kỳ} + \text{Tổng số lượng nhập trong kỳ}}$$

Sau khi có đơn giá bình quân của từng mặt hàng, hệ thống nhân với số lượng xuất của từng phiếu xuất kho để tính ra **Thành tiền xuất kho**.

---

## 2. Thao Tác Thực Hiện

1. Vào menu **Cuối Kỳ** $\rightarrow$ chọn **"Tính Giá Xuất Kho"**.
2. Chọn khoảng thời gian cần tính (thường là từ ngày đầu tháng đến cuối tháng).
3. Nhấn nút **"Bắt Đầu Tính Giá"**:
   * Hệ thống quét qua toàn bộ các mặt hàng và tính đơn giá bình quân.
   * Tự động cập nhật lại trường Đơn giá xuất và Thành tiền xuất vào bảng `InventoryVoucherLine`.
   * Cập nhật số tiền tương ứng vào chứng từ kế toán hạch toán Nợ `632` / Có `156`.
