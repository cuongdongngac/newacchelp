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

## 2. Cơ Chế Mặt Nạ Bitwise AND Mask (Dành Cho Kỹ Thuật & Quản Trị)

Khác với các hệ thống phân quyền truyền thống lưu nhiều cột boolean (`CanView`, `CanAdd`, `CanEdit`...) gây cồng kềnh CSDL, NewaccNet sử dụng **cơ chế mặt nạ nhị phân (Bitwise AND mask)** nén toàn bộ quyền hạn vào một số nguyên duy nhất (`RoleMask` kiểu `int`):

### Bảng trọng số các cờ quyền (Binary Flags)

| Quyền thao tác | Giá trị Nhị phân (Binary) | Giá trị Thập phân (Decimal) | Ý nghĩa nghiệp vụ |
| :--- | :---: | :---: | :--- |
| **View (Xem)** | `0000 0001` | **1** | Quyền mở form và xem dữ liệu |
| **Add (Thêm mới)** | `0000 0010` | **2** | Quyền tạo chứng từ / danh mục mới |
| **Edit (Sửa)** | `0000 0100` | **4** | Quyền chỉnh sửa bản ghi đã lưu |
| **Delete (Xóa)** | `0000 1000` | **8** | Quyền xóa chứng từ / danh mục |
| **Print (In ấn)** | `0001 0000` | **16** | Quyền in chứng từ và xuất báo cáo |
| **Approve (Duyệt)** | `0010 0000` | **32** | Quyền ghi sổ / duyệt chứng từ kế toán |
| **Admin (Toàn quyền)**| `1111 1111` | **255** | Toàn quyền kiểm soát hệ thống |

::: tip Công thức tính quyền tổng hợp
Quyền tổng hợp của một người dùng là **phép cộng (hoặc phép OR bitwise)** của các quyền được cấp:
* *Ví dụ 1:* Nhân viên xem (1) + in (16) $\rightarrow$ `RoleMask = 1 + 16 = 17`.
* *Ví dụ 2:* Kế toán viên có quyền Xem (1) + Thêm (2) + Sửa (4) + In (16) $\rightarrow$ `RoleMask = 1 + 2 + 4 + 16 = 23`.
:::

::: warning Cơ chế kiểm tra an toàn trong mã nguồn
Trong phần mềm, hàm kiểm tra quyền trên thanh Ribbon và nút bấm luôn dùng phép toán `AND` nhị phân:
```csharp
// Kiểm tra người dùng có quyền SỬA (Flag = 4) hay không:
bool canEdit = (userRoleMask & 4) == 4;

// Kiểm tra quyền XÓA (Flag = 8):
bool canDelete = (userRoleMask & 8) == 8;
```
Nếu phép tính trả về khác 0, chức năng tương ứng mới được bật sáng (Enable) trên giao diện.
:::

---

## 3. Các Bước Thiết Lập Phân Quyền Trên Giao Diện

Để cấp quyền cho một tài khoản người dùng, Quản trị viên thao tác theo các bước:

1. Đăng nhập vào hệ thống bằng tài khoản Quản trị (`admin`).
2. Trên thanh Ribbon, chọn tab **Hệ Thống** $\rightarrow$ nhóm **Bảo mật** $\rightarrow$ bấm nút **"Quản lý Người dùng & Phân quyền"**.
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
Tài khoản có quyền Quản trị cao nhất (`RoleMask = 255`) có thể xóa hoặc sửa quyền của mọi tài khoản khác. Vui lòng đặt mật khẩu phức tạp và không chia sẻ tài khoản này cho nhân sự không có thẩm quyền.
:::

---

## 4. Xử Lý Sự Cố Thường Gặp (Troubleshooting)

### Trường hợp 1: Người dùng bị mờ nút "Thêm mới" hoặc "Lưu"
* **Nguyên nhân:** Tài khoản chỉ được cấp cờ Xem (`RoleMask = 1`), thiếu cờ Thêm (`+2`) hoặc cờ Sửa (`+4`).
* **Khắc phục:** Quản trị viên vào lại form Phân quyền, tích bổ sung ô **Thêm** / **Sửa** và yêu cầu người dùng đăng xuất đăng nhập lại.

### Trường hợp 2: Không xóa được chứng từ dù đã có quyền
* **Nguyên nhân:** Chứng từ đã được chuyển vào trạng thái **"Đã ghi sổ"** (`Bookflag = True`) hoặc kỳ kế toán đã bị **Khóa sổ**.
* **Khắc phục:** Phải thực hiện thao tác **"Bỏ ghi sổ"** trước khi xóa.
