---
title: "Phân hệ Tiền Mặt & Ngân Hàng (CashBank)"
description: "Hướng dẫn cài đặt, cấu hình mối alias và vận hành phân hệ Thu chi tiền mặt, Tiền gửi ngân hàng, UNC trong NewaccNet ERP"
outline: deep
---

# Phân Hệ Tiền Mặt & Ngân Hàng (CashBank)

**NewaccNet.Plugin.CashBank** là phân hệ mở rộng chuyên nghiệp quản trị toàn bộ dòng tiền của doanh nghiệp: Quỹ tiền mặt (TK 111), Tiền gửi tại các Ngân hàng (TK 112) và Luân chuyển tiền tệ nội bộ.

Phân hệ được thiết kế theo triết lý **"Accounting-first & Tinh gọn tối đa"**: loại bỏ hoàn toàn các bảng lưới phức tạp, thay vào đó là form phẳng trực diện giúp nhân viên quỹ/kế toán thanh toán lập chứng từ chỉ trong **10 giây**, đồng thời hệ thống **tự động phân tích và bắn chi tiết công nợ** vào sổ kế toán mà không cần thao tác thủ công.

---

## 1. Cài Đặt & Triển Khai Tiện Ích

Phân hệ tuân thủ kiến trúc mô-đun chuẩn của NewaccNet:

### Vị trí lưu trữ mặc định
* Toàn bộ tệp thực thi của phân hệ (`NewaccNet.Plugin.CashBank.dll`) mặc định được lưu trữ trong thư mục **`Plugins\`** của phần mềm:
  ```
  NewaccNet/
  ├── NewaccNet.Wpf.exe
  ├── Plugins/
  │   ├── NewaccNet.Plugin.CashBank.dll
  │   ├── NewaccNet.Plugin.CashBank.pdb
  │   └── ...
  ```
* Người dùng cũng có thể cài đặt dễ dàng bằng cách vào **Hệ thống $\rightarrow$ Quản lý Plugin $\rightarrow$ Cài đặt Plugin** và chọn tệp `NewaccNet.Plugin.CashBank.dll`.

![Thư mục tệp Plugins của NewaccNet](/images/Cash/2026-11/explorer_oNLe6s5aej.png)

Sau khi nạp tiện ích, nhóm chức năng **"Nghiệp Vụ Tiền"** sẽ hiển thị ngay trên thanh Ribbon:
* **Phiếu thu / Báo có (PT / BC)**
* **Phiếu chi / Báo nợ (PC / BN / UNC)**
* **Chuyển tiền nội bộ (CKT)**
* **Cấu hình nghiệp vụ tiền**

![Giao diện thanh Ribbon với phân hệ Tiền mặt & Ngân hàng](/images/Cash/2026-11/NewaccNet.Wpf_B1RjRuHU8f.png)

---

## 2. Khai Báo Mối Nghiệp Vụ Tiền (Alias Mapping)

Điểm cốt lõi giúp phân hệ đạt tốc độ nhập liệu siêu tốc là cơ chế **Mối Alias**:

* **Menu truy cập:** Chọn **Nghiệp Vụ Tiền $\rightarrow$ Cấu hình nghiệp vụ tiền**.
* **Nguyên tắc hoạt động:**
  - Mỗi nghiệp vụ thu/chi thực chất là một **cặp tài khoản định khoản xác định** (Tài khoản Quỹ/Ngân hàng và Tài khoản Đối ứng).
  - Người dùng đặt tên nghiệp vụ theo ngôn ngữ thực tế (ví dụ: *"Thu nợ khách hàng"*, *"Thu bán lẻ thu tiền ngay"*, *"Chi trả nợ NCC"*, *"Chi tạm ứng nhân viên"*, *"Chi tiếp khách"*...).
  - Khi người dùng chọn tên nghiệp vụ, hệ thống sẽ **tự động điền cặp tài khoản Nợ - Có** tương ứng.
* **Lưu trữ CSDL & JSON:** Toàn bộ bảng mapping được lưu trực tiếp vào trường `CashPostingConfig` trong bảng `DbConfig` của CSDL, hỗ trợ xuất/nạp JSON để chuyển đổi cấu hình giữa các máy tính hoặc đơn vị thành viên.

![Cửa sổ Cấu hình tài khoản quỹ và Mối Alias nghiệp vụ tiền](/images/Cash/2026-11/NewaccNet.Wpf_6h9roGJifF.png)

---

## 3. Phiếu Thu Tiền Mặt & Giấy Báo Có (PT / BC)

Áp dụng cho mọi dòng tiền đi vào quỹ tiền mặt hoặc tài khoản ngân hàng của doanh nghiệp:

### Quy trình nhập liệu 4 bước siêu tốc:
1. **Chọn Phương thức thu:** Tiền mặt (PT) hoặc Ngân hàng (BC).
2. **Chọn Nghiệp vụ (Mapping):** Chọn mối thu đã khai báo $\rightarrow$ hệ thống tự điền **Thu vào TK (Nợ)** và **Tài khoản đối ứng (Có)**.
3. **Nhập Số tiền thu:** Ô nhập số tiền to, rõ ràng, tự động đọc thành chữ tiếng Việt chuẩn xác.
4. **Chọn Đối tượng nộp tiền:**
   - **Nếu TK đối ứng là Công nợ (131, 141, 138...):** Hệ thống **tự động bắn chi tiết** (`DebtDetail`) vào chứng từ. Dòng trạng thái báo xanh: `✓ Đã tự động liên kết công nợ với đối tượng`. Nếu chưa chọn đối tượng, hệ thống báo đỏ và **chặn không cho lưu**.
   - **Nếu TK đối ứng KHÔNG PHẢI công nợ (511, 711...):** Hệ thống hạch toán trực tiếp, dòng trạng thái báo xám thân thiện.
5. Nhấn **Lưu phiếu (Ctrl+S)** hoặc **Lưu & Thêm mới (Ctrl+Shift+S)**.

![Giao diện Phiếu thu tiền mặt & Báo có ngân hàng](/images/Cash/2026-11/NewaccNet.Wpf_41F2H1kc5Y.png)

---

## 4. Phiếu Chi Tiền Mặt, Báo Nợ & Ủy Nhiệm Chi (PC / BN / UNC)

Quản lý toàn diện các khoản chi trả tiền mặt và chuyển khoản thanh toán qua ngân hàng:

### Các tính năng đặc biệt:
* **Hỗ trợ Ủy nhiệm chi (UNC):** Khi chọn phương thức là Ngân hàng (`BN`) hoặc Ủy nhiệm chi (`UNC`), phần mềm tự động hiển thị nhóm trường chuyên dùng cho in ấn ngân hàng:
  - *Tài khoản chi & Tên ngân hàng chi*
  - *Đơn vị thụ hưởng, Số tài khoản nhận & Tên ngân hàng nhận*
* **Tự động liên kết công nợ Nhà cung cấp / Tạm ứng:**
  - Đối với các tài khoản `331`, `141`, `334`, `338`, hệ thống bắt buộc chọn Đối tượng nhận và tự động tạo bản ghi chi tiết công nợ bên Nợ.
  - Có nút phụ **"Hóa đơn đến hạn..."** để kế toán có thể mở cửa sổ phân bổ và cấn trừ đích danh từng hóa đơn mua hàng (LiabilityDue).

![Giao diện Phiếu chi tiền mặt & Ủy nhiệm chi](/images/Cash/2026-11/NewaccNet.Wpf_D5D7yqVN21.png)

---

## 5. Chuyển Tiền Nội Bộ (Phiếu CKT)

Dành riêng cho việc luân chuyển dòng tiền bên trong nội bộ doanh nghiệp:
* **Các tình huống sử dụng:**
  - Rút tiền gửi ngân hàng về nhập quỹ tiền mặt (Có 112 / Nợ 111).
  - Nộp tiền mặt tồn quỹ vào tài khoản ngân hàng (Có 111 / Nợ 112).
  - Điều chuyển tiền giữa các tài khoản ngân hàng khác nhau (Có 1121A / Nợ 1121B).
* **Đặc tính:** Không yêu cầu thông tin đối tác công nợ, giao diện cực kỳ tinh giản, tập trung vào **Tài khoản nguồn (Có)**, **Tài khoản đích (Nợ)**, **Số tiền** và **Lý do chuyển**.

![Cửa sổ Chuyển tiền nội bộ giữa các quỹ và ngân hàng](/images/Cash/2026-11/NewaccNet.Wpf_Vq0C7e7gQ1.png)

---

## 6. In Ấn Chứng Từ Thu Chi Chuẩn Mực

Phân hệ tích hợp sẵn các mẫu in ấn XtraReport chuyên nghiệp theo chuẩn Bộ Tài chính:
* **Phiếu thu tiền (Mẫu 01-TT)**
* **Phiếu chi tiền (Mẫu 02-TT)**
* **Giấy báo có, Báo nợ ngân hàng & Mẫu Ủy nhiệm chi**

Hỗ trợ xem trước trực quan trên màn hình, in trực tiếp ra máy in hoặc xuất ra tệp PDF, Excel kẹp cùng hồ sơ thanh toán gốc.

![Xem trước và in ấn Phiếu thu / Phiếu chi chuẩn Bộ Tài chính](/images/Cash/2026-11/NewaccNet.Wpf_KQnO8lSohq.png)
