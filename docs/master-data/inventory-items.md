---
title: "Danh mục Vật tư & Hàng hóa"
description: "Quản lý mã vật tư, đơn vị tính, nhóm hàng, kho ngầm định và tài khoản kho"
outline: deep
---

# Danh Mục Vật Tư & Hàng Hóa

Quản lý danh sách nguyên vật liệu, hàng hóa, thành phẩm, công cụ dụng cụ và dịch vụ phục vụ cho các quy trình mua hàng, xuất kho sản xuất, bán hàng và tính giá vốn.

---

## 1. Thông Tin Quản Lý Vật Tư

* **Mã vật tư (`MaterialId`):** Mã định danh duy nhất (ví dụ: `VT_CAT_VANG`, `HH_IPHONE15`...).
* **Tên vật tư, hàng hóa (`MaterialName`):** Quy cách, thông số kỹ thuật, diễn giải.
* **Đơn vị tính (`Unit`):** Cái, Bộ, Kg, Mét, Tấn, M3...
* **Nhóm vật tư (`CategoryId`):** Phân nhóm để phục vụ thống kê tổng hợp và lập báo cáo.
* **Tài khoản kho:** Mặc định tài khoản hạch toán khi nhập kho (`152` - Nguyên liệu, `156` - Hàng hóa, `155` - Thành phẩm, `153` - Công cụ dụng cụ).

![Danh mục vật tư hàng hóa](/images/master-data-inventory-items-grid-view.png)
<p class="img-caption">Hình 2.5: Bảng danh mục vật tư hàng hóa với tính năng lọc và tìm kiếm nhanh</p>

---

## 2. In Danh Mục Vật Tư Bằng DevExpress XtraReport

NewaccNet hỗ trợ in ấn danh mục vật tư chuẩn DevExpress XtraReport:
1. Vào menu **Danh Mục** $\rightarrow$ bấm **"In Danh Mục Vật Tư"**.
2. Cửa sổ **DocumentPreviewWindow** xuất hiện hiển thị biểu mẫu A4 chuẩn mực:
   * Header thông tin công ty, mã số thuế.
   * Danh sách bảng biểu có số thứ tự tự động.
   * Chân trang tổng số lượng mặt hàng và 3 chữ ký (Người lập, Kế toán trưởng, Giám đốc).

![Xem trước in danh mục vật tư XtraReport](/images/master-data-inventory-items-xtrareport-preview.png)
<p class="img-caption">Hình 2.6: Xem trước mẫu in A4 danh mục vật tư chuyên nghiệp trên DevExpress XtraReport</p>

3. Hỗ trợ xuất trực tiếp ra **PDF, Excel (.xlsx), Word (.docx)** hoặc gửi thẳng ra máy in.
