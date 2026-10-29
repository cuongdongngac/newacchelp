---
title: "Quản lý phân quyền"
description: "Hướng dẫn thiết lập tài khoản người dùng và cơ chế kiểm soát quyền hạn bằng mặt nạ Bitwise AND mask trong NewaccNet ERP"
outline: deep
---

# Quản Lý Phân Quyền Người Dùng

Phân hệ Quản lý phân quyền trong **NewaccNet ERP** cho phép Quản trị viên (`admin`) kiểm soát chi tiết quyền hạn của từng nhân viên kế toán đối với từng phân hệ, màn hình nhập liệu và báo cáo tài chính.

---

## 1. Mục Đích & Nguyên Tắc Phân Quyền

* **Bảo mật dữ liệu:** Đảm bảo nhân viên chỉ được xem hoặc thao tác trên các phân hệ được giao (ví dụ: kế toán kho chỉ quản lý phiếu xuất/nhập kho, không được xem sổ cái và bảng cân đối kế toán).
* **Kiểm soát tính toàn vẹn:** Phân định rõ quyền ai được **Thêm mới**, ai được **Chỉnh sửa**, ai được **Xóa chứng từ** và ai chỉ có quyền **Xem / In báo cáo**.

---

## 2. Mô Hình Phân Quyền Chi Tiết Theo Nghiệp Vụ

Hệ thống cho phép Quản trị viên phân tách rạch ròi các quyền hạn tác nghiệp trên từng phân hệ và màn hình chức năng:

### Bảng các nhóm quyền thao tác

| Quyền thao tác | Ký hiệu | Ý nghĩa nghiệp vụ |
| :--- | :---: | :--- |
| **Xem (View)** | `Xem` | Cho phép mở màn hình và tra cứu số liệu, không thể thay đổi nội dung |
| **Thêm mới (Add)** | `Thêm` | Cho phép tạo mới chứng từ, hóa đơn hoặc danh mục khách hàng, vật tư |
| **Chỉnh sửa (Edit)** | `Sửa` | Cho phép chỉnh sửa thông tin chứng từ chưa ghi sổ |
| **Xóa (Delete)** | `Xóa` | Cho phép xóa chứng từ hoặc bản ghi danh mục |
| **In ấn (Print)** | `In` | Cho phép in phiếu thu, phiếu chi, hóa đơn và xuất báo cáo ra Excel/PDF |
| **Ghi sổ / Duyệt (Approve)** | `Duyệt` | Quyền chuyển chứng từ vào sổ sách chính thức hoặc bỏ ghi sổ để sửa |
| **Toàn quyền (Admin)** | `Admin` | Toàn quyền kiểm soát, cấu hình và phân quyền cho người dùng khác |

![Mô hình ma trận phân quyền chi tiết](/images/general-guide-authorization-role-mask-matrix.png)
<p class="img-caption">Hình 1.6: Mô hình ma trận phân quyền theo từng vai trò nghiệp vụ</p>

::: tip Nguyên tắc an toàn dữ liệu kế toán
* **Kiểm soát nút bấm tự động:** Khi người dùng không được cấp một quyền cụ thể (ví dụ không có quyền Sửa), nút bấm tương ứng trên thanh Ribbon hoặc thanh tác nghiệp sẽ tự động mờ đi (Disable), ngăn ngừa hoàn toàn thao tác ngoài thẩm quyền.
* **Tách biệt quyền Xem và In:** Nhân viên có thể được cấp quyền xem dữ liệu trên màn hình để kiểm tra nhưng không được quyền in ấn hoặc kết xuất báo cáo ra bên ngoài để bảo mật thông tin tài chính của doanh nghiệp.
:::

---

## 3. Các Bước Thiết Lập Phân Quyền Trên Giao Diện

Để cấp quyền cho một tài khoản người dùng, Quản trị viên thao tác theo các bước:

1. Đăng nhập vào hệ thống bằng tài khoản Quản trị (`admin`).
2. Trên thanh Ribbon, chọn tab **Hệ Thống** $\rightarrow$ nhóm **Bảo mật** $\rightarrow$ bấm nút **"Quản lý Người dùng & Phân quyền"**.

![Quản lý Người dùng và Phân quyền](/images/general-guide-authorization-user-list.png)
<p class="img-caption">Hình 1.7: Giao diện quản lý danh sách người dùng và bảng phân quyền chi tiết</p>

3. Danh sách người dùng sẽ hiển thị:
   * **Thêm người dùng mới:** Nhấn nút **"Thêm mới"**, nhập Tên đăng nhập, Họ tên và Mật khẩu khởi tạo.
   * **Phân quyền:** Chọn người dùng cần thiết lập ở danh sách bên trái, bảng cây chức năng bên phải sẽ hiển thị các cờ quyền.
4. Tích chọn các ô tương ứng:
   * ☑ **Xem**
   * ☑ **Thêm mới**
   * ☑ **Sửa**
   * ☑ **Xóa**
   * ☑ **In ấn / Kết xuất**
5. Nhấn nút **"Lưu Thiết Lập"** (`Ctrl + S`) để cập nhật vào hệ quản trị cơ sở dữ liệu.

::: danger Cảnh báo bảo mật tài khoản Admin
Tài khoản Quản trị cao nhất (`admin`) có thể xóa hoặc sửa quyền của mọi tài khoản khác. Vui lòng đặt mật khẩu phức tạp và không chia sẻ tài khoản này cho nhân sự không có thẩm quyền.
:::

---

## 4. Xử Lý Sự Cố Thường Gặp (Troubleshooting)

### Trường hợp 1: Người dùng bị mờ nút "Thêm mới" hoặc "Lưu"
* **Nguyên nhân:** Tài khoản chỉ được cấp quyền Xem, chưa được cấp quyền Thêm hoặc Sửa.
* **Khắc phục:** Quản trị viên vào lại màn hình Phân quyền, tích bổ sung ô **Thêm mới** / **Sửa** và yêu cầu người dùng đăng xuất đăng nhập lại.

### Trường hợp 2: Không xóa được chứng từ dù đã có quyền
* **Nguyên nhân:** Chứng từ đã được chuyển vào trạng thái **"Đã ghi sổ"** hoặc kỳ kế toán đã được **Khóa sổ**.
* **Khắc phục:** Phải thực hiện thao tác **"Bỏ ghi sổ"** trước khi xóa.
