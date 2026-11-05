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
* Ngoài ra, bạn cũng có thể mở trung tâm **Quản Lý Tiện ích Mở rộng & Plugin** từ menu Hệ thống để quản lý trạng thái kích hoạt, bật/tắt hoặc gỡ bỏ plugin độc lập.

![Thư mục cài đặt Plugins](/images/Cash/2026-11/explorer_oNLe6s5aej.png)
<p class="img-caption">Hình 2.1: Thư mục Plugins chứa các module mở rộng độc lập</p>

![Trung tâm Quản lý Tiện ích & Plugin](/images/whareshousERP/2026-11/NewaccNet.Wpf_tf7ochjiOO.png)
<p class="img-caption">Hình 2.2: Trung tâm Quản trị Tiện ích Mở rộng & Plugin (NewaccNet Ecosystem)</p>

Ngay khi tệp DLL được nạp, tab chức năng **"Kho ERP & Bán hàng"** sẽ xuất hiện lập tức trên thanh Ribbon DevExpress với đầy đủ các nghiệp vụ tác nghiệp.

---

## 2. Định Nghĩa Mapping Tài Khoản Kho ERP (Slot-Based Mapping)

Điểm đột phá của phân hệ Kho ERP là cơ chế **Định nghĩa Mapping theo từng vị trí (Slot-Based Mapping)**. Thay vì để nhân viên nhập liệu phải nhớ hàng chục tài khoản kế toán phức tạp, quản trị viên định nghĩa trước danh mục tài khoản hợp lệ cho từng vị trí hạch toán của từng loại chứng từ:

* **Menu truy cập:** Chọn **Kho ERP & Bán hàng $\rightarrow$ Cấu hình TK Kho**.
* **Giao diện phân loại theo 4 tab chứng từ:**
  1. *Phiếu Nhập Mua (NM)*
  2. *Phiếu Xuất Bán (XB)*
  3. *Phiếu Nhập Nội Bộ (NNB)*
  4. *Phiếu Xuất Nội Bộ (XNB)*

### 2.1. Cấu hình Phiếu Nhập Mua Hàng (Tab 1 - NM)

Trên chứng từ Nhập mua hàng, hệ thống chia thành 3 mục định khoản (Slot):
1. **Kho hàng nhập (Nợ TK 15x):** Giới hạn danh sách các tài khoản kho được phép nhập hàng (1561 - Hàng hóa kho chính chủ, 1521 - Nguyên vật liệu chính, 1531 - Công cụ dụng cụ, 155 - Thành phẩm...).
2. **Thuế GTGT mua vào (Nợ TK 133):** Tài khoản thuế khấu trừ (1331 - Thuế GTGT hàng hóa dịch vụ, 1332 - Thuế GTGT tài sản cố định).
3. **Thanh toán / Phải trả NCC (Có TK 331, 111, 112):** Tài khoản công nợ người bán hoặc thanh toán ngay bằng tiền mặt/tiền gửi.

![Cấu hình danh mục tài khoản theo từng mục định khoản - Phiếu Nhập Mua](/images/whareshousERP/2026-11/NewaccNet.Wpf_9mbf4vqhcw.png)
<p class="img-caption">Hình 2.3: Giao diện Định nghĩa Mapping cho Phiếu Nhập Mua (NM)</p>

> [!TIP] Ý nghĩa các cột trong bảng Mapping:
> * **Số tài khoản:** Mã số tài khoản chuẩn mực kế toán (hệ thống tự lấy từ Hệ thống Tài khoản).
> * **Tên tài khoản ERP (Chỉnh sửa tùy ý):** Cho phép đặt lại tên hiển thị theo ngôn ngữ vận hành thực tế của doanh nghiệp để thủ kho hoặc nhân viên dễ nhận diện.
> * **Bật chi tiết:** Kích hoạt theo dõi chi tiết đối tượng công nợ, kho hoặc mặt hàng.
> * **Mặc định:** Tài khoản được tích chọn sẽ tự động điền sẵn trên form khi mở phiếu mới.

---

### 2.2. Cấu hình Phiếu Nhập Kho Nội Bộ (Tab 3 - NNB)

Dùng khi điều chuyển hàng hóa nội bộ, nhập thành phẩm từ xưởng sản xuất hoặc thu hồi vật tư:
* **Kho hàng nhập (Nợ TK 15x):** Danh sách tài khoản nhận hàng nhập (1561, 155, 1521...).
* **TK đối ứng NNB (Có TK 154, 711...):** Tài khoản nguồn gốc phát sinh chi phí sản xuất dở dang (154) hoặc thu nhập khác (711).

![Cấu hình định khoản Phiếu Nhập Nội Bộ](/images/whareshousERP/2026-11/NewaccNet.Wpf_a2BQrd69LZ.png)
<p class="img-caption">Hình 2.4: Định nghĩa Mapping cho Phiếu Nhập Nội Bộ (NNB)</p>

---

### 2.3. Cấu hình Phiếu Xuất Kho Nội Bộ (Tab 4 - XNB)

Dùng khi xuất kho nguyên vật liệu cho sản xuất, xuất công cụ dụng cụ cho phòng ban hoặc hao hụt:
* **Kho hàng xuất (Có TK 15x):** Danh sách tài khoản hàng hóa thực xuất (155 - Thành phẩm, 1521 - Nguyên vật liệu chính, 1561 - Hàng hóa...).
* **TK đối ứng XNB (Nợ TK 642, 641, 154...):** Tài khoản tập hợp chi phí quản lý (642), chi phí bán hàng (641) hoặc chi phí sản xuất (154).

![Cấu hình định khoản Phiếu Xuất Nội Bộ](/images/whareshousERP/2026-11/NewaccNet.Wpf_VxvJzOGKbM.png)
<p class="img-caption">Hình 2.5: Định nghĩa Mapping cho Phiếu Xuất Nội Bộ (XNB)</p>

---

### 2.4. Cách Mapping Áp Dụng Lên Form Chứng Từ Thực Tế

Ngay khi mở form lập chứng từ (ví dụ: Phiếu Nhập mua hàng), hệ thống tự động đọc bảng cấu hình và áp dụng:
* Ở chân form, các ô ComboBox **Tiền hàng (Nợ TK Kho)**, **Thuế GTGT (Nợ TK Thuế)** và **Tổng thanh toán (Có TK 331/111)** chỉ hiển thị đúng các tài khoản đã được cấp phép trong cấu hình.
* Tài khoản nào được đánh dấu **Mặc định** sẽ tự động được chọn sẵn.
* Nhờ vậy, người lập phiếu không thể hạch toán nhầm tài khoản, đảm bảo tính chuẩn xác tuyệt đối của sổ cái kế toán.

![Mapping tài khoản hiển thị tự động trên form lập phiếu](/images/whareshousERP/2026-11/NewaccNet.Wpf_AWCCbFe2Tr.png)
<p class="img-caption">Hình 2.6: Các ô chọn tài khoản được khóa theo đúng cấu hình Mapping định sẵn</p>

### 2.5. Sao Lưu, Nạp Cấu Hình JSON & Khôi Phục Mặc Định
* **Xuất JSON:** Lưu toàn bộ thiết lập mapping ra tệp JSON để triển khai đồng bộ cho các máy khác hoặc các chi nhánh.
* **Nạp JSON:** Nạp nhanh cấu hình từ tệp JSON mẫu có sẵn trong thư mục `Template\ErpPostingConfig_Default.json`.
* **Khôi phục mặc định:** Trả cấu hình về trạng thái chuẩn mực ban đầu chỉ với 1 click.

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
<p class="img-caption">Hình 2.7: Giao diện lập phiếu Nhập mua hàng với chi tiết đơn giá & thuế GTGT</p>

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
<p class="img-caption">Hình 2.8: Màn hình lập phiếu Xuất bán hàng tự động hạch toán doanh thu và giá vốn</p>

---

## 5. Nghiệp Vụ Nhập Kho / Xuất Kho Nội Bộ (NK & XK)

Áp dụng cho các trường hợp luân chuyển vật tư phi thương mại:
* **Nhập kho nội bộ (NK):** Nhập thành phẩm từ sản xuất, thu hồi vật tư thừa từ công trình, nhập hàng gia công.
* **Xuất kho nội bộ (XK):** Xuất nguyên vật liệu cho phân xưởng sản xuất, xuất công cụ dụng cụ dùng cho văn phòng, xuất mẫu thử nghiệm.

![Phiếu xuất kho nội bộ](/images/whareshousERP/2026-11/NewaccNet.Wpf_crqYdKuspZ.png)
<p class="img-caption">Hình 2.9: Giao diện lập phiếu Xuất kho nội bộ</p>

---

## 6. Chuyển Kho Giữa Các Điểm (Phiếu CK)

Dành cho doanh nghiệp có nhiều kho bãi, chi nhánh hoặc tổng kho và showroom:
* Chọn **Kho xuất (nguồn)** và **Kho nhập (đích)**.
* Chọn danh sách mặt hàng cần điều chuyển cùng số lượng.
* Hệ thống tự động ghi nhận luân chuyển qua tài khoản trung gian hoặc tài khoản kho nội bộ, bảo đảm số dư tồn kho tại từng điểm luôn chuẩn xác từng đơn vị tính.

![Điều chuyển kho nội bộ](/images/whareshousERP/2026-11/NewaccNet.Wpf_1Efi4wyUiY.png)
<p class="img-caption">Hình 2.10: Màn hình Điều chuyển kho nội bộ giữa các chi nhánh</p>

---

## 7. In Ấn Phiếu Kho & Mẫu Biểu Quản Trị

* Hỗ trợ in trực tiếp **Phiếu nhập kho (Mẫu 01-VT)** và **Phiếu xuất kho (Mẫu 02-VT)** theo đúng quy chuẩn Bộ Tài chính.
* Tích hợp công cụ xem trước tài liệu DevExpress Document Preview với khả năng xuất khẩu ra PDF, Excel, Word cực kỳ sắc nét.
* Tự động đọc tổng tiền thành chữ tiếng Việt chuẩn xác và thể hiện đầy đủ chữ ký các bên liên quan (Thủ kho, Kế toán, Giám đốc, Người giao/nhận).

![In ấn phiếu kho chuẩn mực](/images/whareshousERP/2026-11/NewaccNet.Wpf_CIOVJBKiGI.png)
<p class="img-caption">Hình 2.11: Bản xem trước mẫu in Phiếu kho chuẩn mực Bộ Tài chính</p>
