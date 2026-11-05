---
title: "Phân hệ Kho ERP & Bán Hàng (ErpWarehouse)"
description: "Hướng dẫn cài đặt, cấu hình định khoản và vận hành phân hệ Kho ERP, Mua hàng, Bán hàng đa kho trong NewaccNet ERP"
outline: deep
---

# Phân Hệ Kho ERP & Bán Hàng (ErpWarehouse)

**NewaccNet.Plugin.ErpWarehouse** là phân hệ mở rộng cao cấp giúp chuyển đổi NewaccNet từ phần mềm kế toán kho tiêu chuẩn thành **Hệ thống Quản trị Kho vận & Chuỗi cung ứng ERP chuyên sâu**.

Phân hệ này giải quyết trọn vẹn bài toán luân chuyển hàng hóa thực tế: theo dõi tồn kho tức thời đa điểm, tự động phân tách doanh thu - thuế - giá vốn xuất kho, và liên kết công nợ chặt chẽ theo từng đối tác.

---

## 1. Cài Đặt & Triển Khai Tiện Ích

Phần mềm NewaccNet hỗ trợ cơ chế nạp plugin tự động cực kỳ đơn giản và an toàn:

### Vị trí lưu trữ mặc định
* Mặc định khi cài đặt hoặc nâng cấp, toàn bộ tệp DLL của phân hệ được đặt trong thư mục **`Plugins\`** nằm cùng cấp với tệp chạy ứng dụng `NewaccNet.Wpf.exe`:
  ```
  NewaccNet/
  ├── NewaccNet.Wpf.exe
  ├── Plugins/
  │   ├── NewaccNet.Plugin.ErpWarehouse.dll
  │   ├── NewaccNet.Plugin.CashBank.dll
  │   └── ...
  ```
* Ngoài ra, bạn cũng có thể cài đặt thông qua giao diện **Hệ thống $\rightarrow$ Quản lý Plugin $\rightarrow$ Cài đặt Plugin** để nạp tệp `NewaccNet.Plugin.ErpWarehouse.dll`.

![Thư mục cài đặt Plugins](/images/Cash/2026-11/explorer_oNLe6s5aej.png)

Ngay khi tệp DLL được nạp, tab chức năng **"Kho ERP & Bán hàng"** sẽ xuất hiện lập tức trên thanh Ribbon DevExpress với đầy đủ các nghiệp vụ tác nghiệp.

---

## 2. Cấu Hình Tài Khoản Kho ERP (Mapping Mối Hạch Toán)

Trước khi tiến hành lập chứng từ kho, kế toán thiết lập bảng mối tài khoản chuẩn nhằm tự động hóa tối đa khâu hạch toán:

* **Menu truy cập:** Chọn **Kho ERP & Bán hàng $\rightarrow$ Cấu hình TK Kho**.
* **Các thiết lập chính:**
  1. **Tài khoản Nhập mua hàng (NM):** Khai báo tài khoản nợ vật tư (152, 156...), thuế GTGT đầu vào (1331) và tài khoản công nợ phải trả (3311).
  2. **Tài khoản Xuất bán hàng (XB):** Khai báo song song:
     - Nhánh Doanh thu: Nợ công nợ (131) / Có doanh thu (5111, 5112), Có thuế GTGT bán ra (33311).
     - Nhánh Giá vốn: Nợ giá vốn hàng bán (632) / Có kho hàng hóa (1561).
  3. **Tài khoản Nhập / Xuất nội bộ (NK, XK):** Khai báo các mối luân chuyển nội bộ, trả hàng, xuất dùng sản xuất hoặc hao hụt.
  4. **Xuất / Nạp cấu hình JSON:** Cho phép sao lưu cấu hình ra tệp JSON hoặc phục hồi về chuẩn mặc định chỉ với 1 click.

![Cấu hình tài khoản kho ERP](/images/whareshousERP/2026-11/NewaccNet.Wpf_AWCCbFe2Tr.png)

---

## 3. Nghiệp Vụ Nhập Mua Hàng (Phiếu NM)

Dùng khi mua vật tư, hàng hóa từ nhà cung cấp về nhập kho, có kèm hóa đơn GTGT hoặc hóa đơn trực tiếp:

* **Các bước thao tác:**
  1. Nhấn **Nhập mua hàng** trên thanh Ribbon (hoặc phím tắt `Ctrl+N`).
  2. Chọn **Nhà cung cấp (NCC)**: Hệ thống tự động điền tên, địa chỉ, mã số thuế và tự động liên kết công nợ `331`.
  3. Chọn **Kho nhập**: Chọn kho lưu trữ đích (Kho nguyên vật liệu, Kho hàng hóa...).
  4. **Khai báo hóa đơn:** Điền Mẫu số, Ký hiệu hóa đơn, Số hóa đơn và Ngày hóa đơn.
  5. **Bảng chi tiết hàng hóa:**
     - Nhấn `Insert` để thêm dòng.
     - Chọn mã vật tư/hàng hóa, nhập số lượng và đơn giá mua chưa thuế.
     - Chọn thuế suất GTGT (0%, 5%, 8%, 10%): Phần mềm tự động tính tiền thuế và tổng tiền thanh toán.
  6. Bấm **Lưu (Ctrl+S)** hoặc **Lưu & Thêm mới (Ctrl+Shift+S)**.

![Giao diện lập phiếu Nhập mua hàng](/images/whareshousERP/2026-11/NewaccNet.Wpf_tVR3hiX29n.png)

> [!NOTE] Cơ chế hạch toán tự động
> Phiếu NM tự động tạo chứng từ kép:
> - Nợ TK 152 / 156 (Tiền hàng chưa thuế)
> - Nợ TK 1331 (Tiền thuế GTGT được khấu trừ)
> - Có TK 331 (Tổng giá trị thanh toán kèm chi tiết công nợ nhà cung cấp)

---

## 4. Nghiệp Vụ Xuất Bán Hàng (Phiếu XB)

Phân hệ tích hợp cơ chế hạch toán đồng thời **Doanh thu** và **Giá vốn** ngay trên một màn hình:

* **Đặc điểm nổi bật:**
  - Tự động theo dõi công nợ phải thu khách hàng (TK 131) theo từng hóa đơn.
  - Phân tách rõ ràng tiền hàng trước thuế, tiền thuế GTGT đầu ra (TK 33311) và giá vốn thực xuất (TK 632 / 1561).
  - Tích hợp tính năng thêm nhanh Khách hàng mới hoặc Vật tư mới ngay trong lúc đang nhập liệu mà không cần rời màn hình.

![Giao diện lập phiếu Xuất bán hàng](/images/whareshousERP/2026-11/NewaccNet.Wpf_3mxaRVEGm0.png)

---

## 5. Nghiệp Vụ Nhập Kho / Xuất Kho Nội Bộ (NK & XK)

Áp dụng cho các trường hợp luân chuyển vật tư phi thương mại:
* **Nhập kho nội bộ (NK):** Nhập thành phẩm từ sản xuất, thu hồi vật tư thừa từ công trình, nhập hàng gia công.
* **Xuất kho nội bộ (XK):** Xuất nguyên vật liệu cho phân xưởng sản xuất, xuất công cụ dụng cụ dùng cho văn phòng, xuất mẫu thử nghiệm.

![Phiếu xuất kho nội bộ](/images/whareshousERP/2026-11/NewaccNet.Wpf_crqYdKuspZ.png)

---

## 6. Chuyển Kho Giữa Các Điểm (Phiếu CK)

Dành cho doanh nghiệp có nhiều kho bãi, chi nhánh hoặc tổng kho và showroom:
* Chọn **Kho xuất (nguồn)** và **Kho nhập (đích)**.
* Chọn danh sách mặt hàng cần điều chuyển cùng số lượng.
* Hệ thống tự động ghi nhận luân chuyển qua tài khoản trung gian hoặc tài khoản kho nội bộ, bảo đảm số dư tồn kho tại từng điểm luôn chuẩn xác từng đơn vị tính.

![Điều chuyển kho nội bộ](/images/whareshousERP/2026-11/NewaccNet.Wpf_1Efi4wyUiY.png)

---

## 7. In Ấn Phiếu Kho & Mẫu Biểu Quản Trị

* Hỗ trợ in trực tiếp **Phiếu nhập kho (Mẫu 01-VT)** và **Phiếu xuất kho (Mẫu 02-VT)** theo đúng quy chuẩn Bộ Tài chính.
* Tích hợp công cụ xem trước tài liệu DevExpress Document Preview với khả năng xuất khẩu ra PDF, Excel, Word cực kỳ sắc nét.
* Tự động đọc tổng tiền thành chữ tiếng Việt chuẩn xác và thể hiện đầy đủ chữ ký các bên liên quan (Thủ kho, Kế toán, Giám đốc, Người giao/nhận).

![In ấn phiếu kho chuẩn mực](/images/whareshousERP/2026-11/NewaccNet.Wpf_CIOVJBKiGI.png)
