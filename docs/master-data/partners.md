---
title: "Danh mục Đối tượng (Khách hàng & Nhà cung cấp)"
description: "Quản lý hồ sơ đối tác, mã số thuế, hạn mức công nợ và địa chỉ giao dịch"
outline: deep
---

# Danh Mục Khách Hàng & Nhà Cung Cấp

Danh mục Đối tượng trong NewaccNet quản lý tập trung toàn bộ danh sách khách hàng, nhà cung cấp, nhà thầu phụ, nhân viên và các đối tác liên quan.

---

## 1. Các Trường Thông Tin Quản Lý

* **Mã đối tượng (`PartnerId`):** Mã định danh (khuyên dùng Mã số thuế hoặc mã viết tắt dễ nhớ, vd: `KH_VINAMILK`, `NCC_HOAPHAT`).
* **Tên đối tượng (`PartnerName`):** Tên đầy đủ trên đăng ký kinh doanh hoặc hóa đơn.
* **Mã số thuế (`TaxCode`):** MST doanh nghiệp (hệ thống hỗ trợ tra cứu thông tin tự động khi tích hợp Hóa đơn điện tử).
* **Địa chỉ (`Address`):** Địa chỉ trụ sở phục vụ xuất hóa đơn và in ấn biên bản đối chiếu công nợ.
* **Tài khoản ngân hàng (`BankAccount`):** Số tài khoản và tên ngân hàng phục vụ lập ủy nhiệm chi.

---

## 2. Theo Dõi Công Nợ Chi Tiết

Khi hạch toán vào các tài khoản công nợ (`131`, `331`, `141`, `338`...), hệ thống bắt buộc chọn Mã đối tượng. 
Từ đó, các báo cáo sau sẽ tự động kết xuất tức thì:
* **Sổ chi tiết công nợ phải thu / phải trả theo từng đối tượng.**
* **Bảng tổng hợp công nợ toàn bộ khách hàng / nhà cung cấp.**
* **Biên bản đối chiếu công nợ cuối kỳ để gửi khách hàng ký nhận.**
