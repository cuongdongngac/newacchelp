---
title: "Triết lý thiết kế & Tầm nhìn"
description: "Triết lý phát triển của NewaccNet: Từ Accounting-First đến ERP-First, tinh thần làm chủ dữ liệu No-Cloud và kiến trúc đa CSDL linh hoạt"
outline: deep
---

# Triết Lý Thiết Kế & Tầm Nhìn Phát Triển

Phần mềm kế toán **NewaccNet** không chỉ là một công cụ ghi chép sổ sách đơn thuần, mà được xây dựng trên một triết lý thiết kế nhất quán: **Tôn trọng tính chuẩn mực của nghề kế toán, trao quyền làm chủ dữ liệu tuyệt đối cho người dùng, và sẵn sàng mở rộng thành hệ thống quản trị doanh nghiệp toàn diện.**

---

## 1. Triết Lý "Accounting-First": Đi Từ Cái Nôi Chuẩn Mực Của Kế Toán

Trong giai đoạn đầu và đối với đại đa số doanh nghiệp vừa và nhỏ, mô hình vận hành hiệu quả nhất chính là **Accounting-First (Ưu tiên kế toán)**:

* **Bản chất mô hình:** Người làm kế toán là "trung tâm điều phối" duy nhất, trực tiếp tiếp nhận mọi chứng từ thực tế (hóa đơn, phiếu thu, phiếu chi, giấy báo ngân hàng, bảng lương) và tự tay thực hiện toàn bộ các bước hạch toán, tính giá thành, trích khấu hao, lên sổ cái và lập báo cáo tài chính.
* **Màn hình Nhập chứng từ đa năng (`VoucherEntryWindow`) - Trái tim của Accounting-First:**
  * Kế toán viên có thể nhập mọi loại nghiệp vụ kinh tế (Thu, Chi, Báo Nợ, Báo Có, Mua hàng, Bán hàng, Phiếu kế toán tổng hợp) **ngay trên một giao diện duy nhất**.
  * Tối ưu hóa tốc độ nhập liệu bằng bàn phím (`F4` thêm mới, `Enter`/`Tab` nhảy ô, `Ctrl+S` lưu), giúp kế toán xử lý hàng trăm chứng từ mỗi ngày mà không phải mở đi đóng lại hàng chục cửa sổ rườm rà.
* **Ưu điểm vượt trội:**
  * **Chính xác và chuẩn mực ngay từ đầu:** Do người có chuyên môn kế toán trực tiếp định khoản Nợ/Có, dữ liệu vào sổ luôn sạch sẽ, không bị sai lệch tài khoản hay nhầm lẫn nghiệp vụ như khi giao cho các bộ phận ngoài kế toán tự nhập.
  * **Linh hoạt và gọn nhẹ:** Kế toán chủ động điều chỉnh số liệu, xử lý nghiệp vụ phát sinh tức thì mà không phải chờ đợi các quy trình phê duyệt phức tạp qua nhiều phòng ban.
  * **Cực kỳ phù hợp cho dịch vụ kế toán:** Đối với cá nhân hoặc công ty làm dịch vụ kế toán nhận sổ sách của hàng chục doanh nghiệp, Accounting-First là cách làm việc nhanh gọn và hiệu quả nhất.
* **Thách thức khi doanh nghiệp lớn mạnh:** Khi số lượng đơn hàng, hóa đơn và nghiệp vụ kho tăng vọt, gánh nặng nhập liệu thủ công sẽ đè nặng lên vai người kế toán. Kế toán dễ rơi vào trạng thái quá tải, chỉ kịp cặm cụi gõ lại dữ liệu của các phòng ban khác thay vì có thời gian phân tích tài chính giúp ban giám đốc.

---

## 2. Bước Chuyển Dịch "ERP-First": Từ Chứng Từ Đa Năng Sang Nhập Phân Tán Theo Chức Năng

Để giải bài toán quá tải khi doanh nghiệp mở rộng quy mô, NewaccNet cung cấp lộ trình nâng cấp tự nhiên:

### Chuyển đổi linh hoạt theo cấu hình: Từ Đa Năng sang Phân Tán
* **Tùy biến theo cấu hình doanh nghiệp:** Tùy thuộc vào quy mô nhân sự và mức độ phân công công việc, NewaccNet cho phép chuyển đổi linh hoạt giữa:
  * **Chế độ Nhập chứng từ đa năng:** Dành cho kế toán tổng hợp tự tay định khoản toàn bộ.
  * **Chế độ Nhập phân tán theo từng chức năng:** Mở các màn hình chuyên biệt độc lập (Phiếu thu tiền riêng, Phiếu chi tiền riêng, Hóa đơn mua hàng riêng, Hóa đơn bán hàng riêng, Phiếu nhập kho, Phiếu xuất kho...).
* Điều này cho phép doanh nghiệp phân quyền cho từng nhân viên phụ trách một mảng nghiệp vụ chuyên biệt mà người nhập liệu **không cần phải am hiểu sâu về các tài khoản kế toán Nợ/Có phức tạp**.

### Khi đó, hệ thống không chỉ là phần mềm kế toán nữa
* Dữ liệu không còn chờ đưa về phòng kế toán để nhập lại, mà được **ghi nhận ngay tại nơi phát sinh nghiệp vụ thực tế**:
  * Nhân viên kinh doanh tạo báo giá và đơn đặt hàng bán.
  * Nhân viên mua hàng theo dõi đơn đặt hàng nhà cung cấp.
  * Thủ kho dùng máy quét mã vạch xác nhận xuất / nhập hàng thực tế tại kho.
  * Bộ phận xưởng ghi nhận định mức và tiến độ lệnh sản xuất.
* Mỗi nhân viên chỉ làm việc trên đúng giao diện nghiệp vụ của mảng mình phụ trách thông qua các Tiện ích mở rộng (Plugin).

### Vai trò mới của Người làm Kế toán
Trong mô hình ERP-First, vai trò của kế toán viên thay đổi một cách căn bản và nâng lên tầm cao mới:
1. **Không còn cặm cụi gõ lại dữ liệu thủ công:** Dòng tiền và hàng hóa đã được các bộ phận nghiệp vụ ghi nhận, kế toán hoàn toàn thoát khỏi công việc sao chép cơ học.
2. **Người gác cổng và kiểm soát chất lượng dữ liệu:** Kế toán theo dõi, kiểm tra tính hợp lệ của hóa đơn, đối soát công nợ tự động và phát hiện các sai lệch dòng tiền giữa các bộ phận.
3. **Thực hiện Chốt sổ kỳ kế toán:** Khi dữ liệu của các bộ phận đã được xác nhận đầy đủ, kế toán thực hiện các nghiệp vụ then chốt: chạy phân bổ chi phí tự động, tính giá vốn xuất kho, kết chuyển doanh thu - chi phí và **khóa sổ kỳ kế toán**.

---

## 3. Triết Lý "No-Cloud": Quyền Làm Chủ Dữ Liệu Tuyệt Đối

Hiện nay, xu hướng phần mềm kế toán đám mây (Cloud / Web) rất phổ biến, tuy nhiên mô hình này bộc lộ những hạn chế và rủi ro nghiêm trọng đối với dữ liệu tài chính doanh nghiệp. NewaccNet kiên định theo đuổi triết lý **No-Cloud (Lưu trữ độc lập, bảo mật nội bộ)**:

### So sánh Kế toán Cloud và Triết lý No-Cloud của NewaccNet

| Tiêu chí | Kế toán Cloud (SaaS trên Web) | NewaccNet (No-Cloud / On-Premise) |
| :--- | :--- | :--- |
| **Quyền sở hữu dữ liệu** | Dữ liệu tài chính nằm trên máy chủ của bên thứ ba, tiềm ẩn rủi ro rò rỉ thông tin kinh doanh nhạy cảm. | **Bạn làm chủ 100% dữ liệu.** Dữ liệu nằm trọn vẹn trong ổ cứng máy tính hoặc máy chủ nội bộ của doanh nghiệp. |
| **Sự phụ thuộc Internet** | Mất mạng hoặc đứt cáp quang quốc tế là toàn bộ công việc kế toán bị tê liệt hoàn toàn. | **Hoạt động hoàn toàn ngoại tuyến (Offline).** Không cần mạng Internet, phần mềm vẫn chạy mượt mà và bảo đảm tiến độ công việc. |
| **Tốc độ & Trải nghiệm** | Phụ thuộc tốc độ đường truyền web, độ trễ khi tải báo cáo hoặc lưới dữ liệu hàng nghìn dòng. | **Tốc độ tức thì:** Ứng dụng Desktop tận dụng tối đa sức mạnh phần cứng máy tính, mở báo cáo nghìn dòng chỉ trong tích tắc. |
| **Chi phí sở hữu** | Phải trả phí thuê bao định kỳ hàng tháng/năm. Nếu ngừng đóng phí, bạn có nguy cơ bị khóa quyền truy cập dữ liệu cũ. | **Chi phí minh bạch, sở hữu trọn đời.** Bạn kiểm soát hoàn toàn hệ thống mà không lo bị lệ thuộc chính sách giá của nhà cung cấp. |

---

## 4. Triết Lý Đa Cơ Sở Dữ Liệu: Linh Hoạt Cho Mọi Quy Mô

Không ép buộc người dùng vào một khuôn mẫu duy nhất, NewaccNet hỗ trợ chuyển đổi linh hoạt giữa 3 hệ quản trị cơ sở dữ liệu hàng đầu tùy theo nhu cầu thực tế:

* **MS Access (Nhỏ gọn, tiện lợi):**
  * Dành cho kế toán dịch vụ, kế toán làm việc độc lập hoặc doanh nghiệp nhỏ.
  * Toàn bộ dữ liệu của một doanh nghiệp nằm gọn trong **đúng 1 tệp tin duy nhất**. Cần sao lưu hoặc gửi cho người khác, bạn chỉ cần copy tệp gửi qua USB hoặc Zalo/Email là xong, không cần cài đặt phần mềm máy chủ phức tạp.
* **SQL Server & PostgreSQL (Quy mô vừa và Doanh nghiệp lớn):**
  * Khi doanh nghiệp mở rộng quy mô, có nhiều nhân viên cùng nhập liệu đồng thời qua mạng nội bộ LAN hoặc mạng riêng ảo VPN.
  * Dữ liệu phát sinh hàng trăm nghìn, hàng triệu bản ghi mỗi năm vẫn bảo đảm tốc độ truy xuất siêu nhanh, tính toàn vẹn cao và chế độ phân quyền chặt chẽ.

---

## 5. Triết Lý Plugin Dưới Góc Nhìn Người Dùng Đơn Thuần

Thay vì tạo ra một phần mềm kế toán khổng lồ, cồng kềnh với hàng trăm tính năng mà 80% trong số đó doanh nghiệp bạn không bao giờ đụng tới, NewaccNet áp dụng **triết lý Tiện ích mở rộng (Plugin)**:

* **Giống như việc cài thêm ứng dụng trên điện thoại:** Khi mới mua điện thoại, bạn có sẵn các chức năng cơ bản cần thiết (gọi điện, nhắn tin, chụp ảnh). Khi nào bạn cần làm việc chuyên biệt nào, bạn cài thêm ứng dụng đó.
* **Phần mềm luôn gọn nhẹ và sáng sủa:** Bản thân NewaccNet lõi luôn tập trung làm xuất sắc những việc cốt lõi của kế toán (Thu, Chi, Nhập, Xuất, Sổ sách, Báo cáo tài chính). 
* **Tự do may đo theo đặc thù ngành:**
  * Doanh nghiệp xây dựng: Cài thêm tiện ích quản lý dự toán và công trình.
  * Doanh nghiệp sản xuất: Cài thêm tiện ích tính định mức và giá thành nhiều công đoạn.
  * Doanh nghiệp thương mại / Chuỗi cửa hàng: Cài thêm tiện ích quản lý điểm bán lẻ và thẻ khách hàng.
* Khi không còn nhu cầu, bạn chỉ việc tắt đi mà không làm ảnh hưởng đến số liệu kế toán chung đã có.
