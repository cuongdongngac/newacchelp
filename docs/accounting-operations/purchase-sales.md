---
title: "Nghiệp vụ Mua hàng, Bán hàng & Kho"
description: "Quy trình lập phiếu nhập kho mua hàng, phiếu xuất kho bán hàng, xuất dùng sản xuất và theo dõi công nợ đồng thời"
outline: deep
---

# Nghiệp Vụ Mua Hàng, Bán Hàng & Kho

NewaccNet hỗ trợ mô hình hạch toán kết hợp giữa chứng từ kho (`InventoryVoucher`) và định khoản tài chính (`JournalVoucher`) trong một thao tác duy nhất, loại bỏ việc phải nhập 2 lần.

---

## 1. Phiếu Nhập Kho Mua Hàng
* Khi mua nguyên vật liệu, hàng hóa về nhập kho:
  * **Hạch toán Nợ:** TK `152`, `156` (Giá trị hàng chưa thuế).
  * **Hạch toán Nợ:** TK `1331` (Thuế GTGT đầu vào được khấu trừ).
  * **Hạch toán Có:** TK `331` (Phải trả người bán) hoặc `1111`, `1121` (Tiền mặt/Ngân hàng).
* Hệ thống tự động ghi nhận số lượng và đơn giá vào Thẻ kho và Bảng tổng hợp nhập xuất tồn.

![Phiếu nhập kho mua hàng](/images/accounting-operations-purchase-sales-inventory-receipt.png)
<p class="img-caption">Hình 3.4: Màn hình lập phiếu nhập kho mua hàng hóa, nguyên vật liệu</p>

---

## 2. Phiếu Xuất Kho Bán Hàng
* Khi bán hàng hóa, thành phẩm cho khách hàng:
  * **Bút toán Doanh thu:** Nợ TK `131` / Có TK `511`, Có TK `33311` (Thuế GTGT đầu ra).
  * **Bút toán Giá vốn:** Nợ TK `632` / Có TK `156`, `155` (Hệ thống hỗ trợ tự động tính giá vốn cuối kỳ theo Bình quân gia quyền).

![Phiếu xuất kho bán hàng](/images/accounting-operations-purchase-sales-inventory-issue.png)
<p class="img-caption">Hình 3.5: Màn hình lập phiếu xuất kho bán hàng và xuất dùng sản xuất</p>
