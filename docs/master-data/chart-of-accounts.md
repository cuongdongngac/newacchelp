---
title: "Hệ thống Tài khoản kế toán"
description: "Hướng dẫn thiết lập và quản lý cây danh mục tài khoản kế toán chữ T phân cấp trong NewaccNet ERP"
outline: deep
---

# Hệ Thống Tài Khoản Kế Toán (Cây Phân Cấp)

Hệ thống tài khoản là xương sống của toàn bộ quy trình hạch toán kế toán. Trong NewaccNet ERP, tài khoản kế toán được tổ chức theo **cấu trúc cây phân cấp đa cấp (TreeList)**, phản ánh chính xác quan hệ tài khoản mẹ - con theo quy định Thông tư 200/2014/TT-BTC hoặc Thông tư 133/2016/TT-BTC.

---

## 1. Cấu Trúc Bảng Dữ Liệu Tài Khoản

* **Số hiệu tài khoản (`AccountId`):** Mã số duy nhất của tài khoản (ví dụ: `111`, `1111`, `1121`...).
* **Tên tài khoản (`AccountName`):** Diễn giải chi tiết (ví dụ: *Tiền mặt*, *Tiền Việt Nam*...).
* **Tài khoản mẹ (`ParentId`):** Số hiệu của tài khoản cấp trên (ví dụ tài khoản `1111` có `ParentId = 111`).
* **Tính chất (`Dispflag`):**
  * `1` - Dư Nợ (Tài sản, Chi phí)
  * `2` - Dư Có (Nguồn vốn, Doanh thu)
  * `3` - Lưỡng tính (Công nợ 131, 331 - vừa có thể có dư Nợ, vừa có thể có dư Có)
  * `4` - Không có số dư (Tài khoản loại 5, 6, 7, 8, 9 kết chuyển cuối kỳ)
* **Theo dõi ngoài bảng (`Outtableflag`):** Dành cho các tài khoản ngoài bảng (Loại 0).

![Cây danh mục tài khoản dạng TreeList](/images/master-data-chart-of-accounts-treelist.png)
<p class="img-caption">Hình 2.1: Cấu trúc cây phân cấp Hệ thống Tài khoản kế toán</p>

---

## 2. Thao Tác Thêm Mới Tài Khoản Chi Tiết

Khi doanh nghiệp có nhu cầu mở thêm tài khoản con (ví dụ: mở thêm tài khoản chi tiết ngân hàng `11211` cho BIDV):
1. Vào menu **Danh Mục** $\rightarrow$ chọn **"Hệ thống Tài khoản"**.
2. Bấm nút **"Thêm mới"** (`F4`).
3. Điền các trường thông tin:
   * **Số hiệu tài khoản:** `11211`
   * **Tên tài khoản:** `Ngân hàng BIDV - Chi nhánh Cầu Giấy`
   * **Tài khoản mẹ:** Chọn `1121`
   * **Tính chất:** Chọn *1 - Dư Nợ*

![Thêm mới tài khoản con](/images/master-data-chart-of-accounts-add-modal.png)
<p class="img-caption">Hình 2.2: Cửa sổ thêm mới tài khoản kế toán chi tiết</p>

4. Nhấn **"Lưu"** (`Ctrl + S`).

::: tip Tính năng tự động tổng hợp số dư lên tài khoản mẹ
Trong NewaccNet ERP, bạn chỉ hạch toán chứng từ vào các **tài khoản chi tiết nhất (tài khoản lá)**. Số dư và phát sinh của các tài khoản con sẽ tự động được hệ thống cộng dồn lên các tài khoản mẹ trên Bảng cân đối tài khoản và Báo cáo tài chính mà không cần can thiệp thủ công.
:::
