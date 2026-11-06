---
title: "Cấu hình Trí tuệ Nhân tạo (OpenRouter AI Gateway)"
description: "Hướng dẫn khai báo OpenRouter API Key, chọn mô hình AI tự động cho Trợ lý kế toán, OCR bóc tách tài liệu và Giám đốc tài chính CFO"
outline: deep
---

# Cấu Hình Trí Tuệ Nhân Tạo (OpenRouter AI Gateway)

Phần mềm Kế toán **NewaccNet ERP** tích hợp cổng kết nối **OpenRouter AI Gateway**, mang đến năng lực trí tuệ nhân tạo thế hệ mới nhất cho công tác kế toán và quản trị doanh nghiệp. Với OpenRouter, bạn chỉ cần **một mã khóa API duy nhất** để truy cập và sử dụng tất cả các mô hình AI hàng đầu thế giới như **Google Gemini, Anthropic Claude, OpenAI GPT-4o, DeepSeek, Meta Llama** mà không bị phụ thuộc vào một nhà cung cấp cố định.

---

## 1. Giới Thiệu Cổng Kết Nối OpenRouter Gateway

OpenRouter hoạt động như một cầu nối trung chuyển AI thông minh:
* **Đa dạng hóa mô hình:** Linh hoạt lựa chọn mô hình phù hợp nhất cho từng nghiệp vụ (mô hình siêu tốc giá rẻ cho nhập liệu, mô hình có mắt đọc cho OCR, mô hình tư duy chuyên sâu cho CFO).
* **Minh bạch chi phí:** Hiển thị rõ ràng giá tiền theo từng triệu token, kiểm soát ngân sách theo từng tháng.
* **Hỗ trợ bản dùng thử miễn phí:** Có sẵn các mô hình miễn phí 100% (như `google/gemini-2.0-flash-exp:free`) để người dùng trải nghiệm ngay mà không cần nạp tiền.

---

## 2. Hướng Dẫn Khai Báo API Key

1. Trên thanh Ribbon Menu chính, chuyển sang tab **Trí tuệ Nhân tạo (AI)** $\rightarrow$ bấm nút **"Cài đặt AI"** (hoặc mở từ menu **Hệ thống** $\rightarrow$ **Cấu hình**).
2. Cửa sổ **Cấu hình Trí tuệ Nhân tạo (OpenRouter AI Gateway)** sẽ xuất hiện:

![Cửa sổ Cấu hình AI OpenRouter](/images/OpenRouter/2026-11/NewaccNet.Wpf_RkvSMoNuQ8.png)
<p class="img-caption">Hình: Mở chức năng Cài đặt AI trên Menu chính NewaccNet</p>

![Giao diện Cấu hình OpenRouter Gateway](/images/OpenRouter/2026-11/NewaccNet.Wpf_2cU11Jdyjg.png)
<p class="img-caption">Hình: Giao diện thiết lập OpenRouter API Key và các mô hình tác nghiệp</p>

3. **OpenRouter API Key:** Nhập mã khóa API của bạn.
   * *Nếu chưa có khóa:* Bạn đăng ký tài khoản và tạo khóa miễn phí tại [https://openrouter.ai/keys](https://openrouter.ai/keys).
4. **Endpoint Base URL:** Giữ nguyên mặc định là `https://openrouter.ai/api/v1`.

---

## 3. Duyệt & Chọn Mô Hình AI Trực Quan (Model Picker)

Trước đây, người dùng phải tự nhớ và gõ tay các chuỗi mã mô hình phức tạp (như `google/gemini-2.5-flash`, `anthropic/claude-3.5-sonnet`). Giờ đây, NewaccNet cung cấp công cụ **Duyệt & Chọn mô hình trực quan** chỉ với một cú nhấp chuột:

Bấm vào nút **`[ 🔍 Chọn... ]`** bên cạnh mỗi loại mô hình, cửa sổ **Danh mục Mô hình Trí tuệ Nhân tạo** sẽ mở ra:

![Cửa sổ Danh mục Mô hình OpenRouter](/images/OpenRouter/2026-11/NewaccNet.Wpf_JUVTLbSPvQ.png)
<p class="img-caption">Hình: Cửa sổ duyệt, tìm kiếm và so sánh chi tiết các mô hình AI trên OpenRouter</p>

### Các tính năng nổi bật của cửa sổ Chọn Mô Hình:
* **🔍 Tìm kiếm nhanh tức thì:** Gõ từ khóa tên mô hình (ví dụ: `gemini`, `claude`, `deepseek`, `flash`, `gpt`...).
* **Lọc theo Nhà cung cấp:** Dễ dàng lọc riêng các mô hình của từng hãng như **Google, Anthropic, OpenAI, DeepSeek, Meta, Qwen, Mistral**...
* **Lọc nhanh theo tính năng:**
  * `[x] Chỉ hiện bản Miễn phí (Free)`: Lọc nhanh các mô hình dùng thử không mất phí.
  * `[x] Hỗ trợ đọc ảnh (OCR / Vision)`: Chỉ hiện các mô hình có khả năng phân tích hình ảnh và tài liệu scan.
  * `[x] Hỗ trợ JSON chuẩn`: Các mô hình có khả năng trả về dữ liệu có cấu trúc phục vụ hạch toán tự động.
* **Thông tin chi phí & ngữ cảnh minh bạch:**
  * Cột **Ngữ Cảnh**: Thể hiện độ dài văn bản mô hình có thể ghi nhớ (`1M` = 1 triệu token, `128K`, `200K`...).
  * Cột **Chi Phí (Vào / Ra)**: Quy đổi rõ ràng theo USD trên 1 triệu token.
  * Khung chi tiết bên dưới giải thích rõ thế mạnh và công dụng tối ưu của mô hình đang chọn.

![Lọc mô hình theo hãng và tính năng](/images/OpenRouter/2026-11/NewaccNet.Wpf_cnezSv0Ybl.png)
<p class="img-caption">Hình: Bộ lọc thông minh giúp kế toán viên dễ dàng chọn đúng mô hình phù hợp</p>

![Xem thông tin chi tiết mô hình được chọn](/images/OpenRouter/2026-11/NewaccNet.Wpf_AuicAzpaiy.png)
<p class="img-caption">Hình: Tóm tắt chi phí, ngữ cảnh và tính năng hỗ trợ của mô hình</p>

---

## 4. Cơ Chế Tự Động Điều Phối Mô Hình Theo Từng Nghiệp Vụ

Trong NewaccNet, các tác vụ AI được phân định chuyên biệt theo 3 nhóm nghiệp vụ:

| Nghiệp vụ | Loại mô hình phụ trách | Mô hình khuyên dùng | Mục đích sử dụng |
| :--- | :--- | :--- | :--- |
| **Trợ lý Kế toán & Nhập liệu** | `ChatModel` (Văn bản) | `google/gemini-2.5-flash`<br>`deepseek/deepseek-chat` | Nhập nghiệp vụ bằng tiếng Việt tự nhiên (VD: *"Mua 10 ram giấy A4 thanh toán tiền mặt"*), AI tự định khoản Nợ/Có. Tối ưu tốc độ cao và chi phí siêu rẻ. |
| **Nhận dạng OCR & Ảnh** | `VisionModel` (Đa phương tiện) | `google/gemini-2.5-flash`<br>`openai/gpt-4o` | **Chuyên trách khi quét ảnh / tài liệu:** Bóc tách hóa đơn, đơn thuốc, phiếu kho dạng ảnh chụp, file PDF scan và tự động giải mã CAPTCHA trang Thuế. |
| **Phân tích Quản trị & CFO Brain** | `AnalysisModel` (Tư duy sâu) | `google/gemini-2.5-pro`<br>`anthropic/claude-3.5-sonnet`<br>`deepseek/deepseek-r1` | Phân tích sức khỏe tài chính doanh nghiệp, cảnh báo rủi ro dòng tiền và xuất Báo cáo Quản trị Word/Excel. |

::: tip Cơ chế chuyển đổi thông minh
**Người dùng không cần thao tác chuyển đổi mô hình thủ công khi làm việc.** 
- Khi bạn làm việc trên văn bản hoặc chat trợ lý, hệ thống dùng **`ChatModel`**.
- **Khi bạn thực hiện chức năng quét ảnh, bóc tách hóa đơn OCR hoặc giải CAPTCHA**, hệ thống sẽ **tự động chuyển sang gọi `VisionModel`** (mô hình có mắt đọc ảnh).
- Khi bạn chọn mô hình ở ô *Nhận dạng OCR & Ảnh*, cửa sổ sẽ **tự động kích hoạt sẵn bộ lọc "Hỗ trợ đọc ảnh (OCR / Vision)"** để tránh chọn nhầm các mô hình không hỗ trợ ảnh.
:::

![Chọn mô hình chuyên biệt cho OCR và Vision](/images/OpenRouter/2026-11/NewaccNet.Wpf_N28bzByUOL.png)
<p class="img-caption">Hình: Tự động lọc các mô hình có hỗ trợ đọc ảnh khi cấu hình phân hệ OCR</p>

![Gán mô hình đã chọn vào cấu hình](/images/OpenRouter/2026-11/NewaccNet.Wpf_NonGhd31wb.png)
<p class="img-caption">Hình: Mã ID mô hình được tự động cập nhật chính xác vào cấu hình</p>

---

## 5. Kiểm Tra Kết Nối & Lưu Cấu Hình

1. Sau khi đã chọn xong các mô hình, bấm nút **"Kiểm tra kết nối"**:
   * Hệ thống sẽ gửi tín hiệu ping thử nghiệm tới cổng OpenRouter Gateway.
   * Nếu thành công, thông báo màu xanh `✅ Kết nối OpenRouter API thành công!` sẽ xuất hiện.
2. Bấm nút **"Lưu cấu hình"** để hoàn tất. Cấu hình sẽ được mã hóa và lưu trữ an toàn trong hệ thống, sẵn sàng phục vụ toàn bộ các phân hệ AI của NewaccNet.

![Kiểm tra kết nối OpenRouter thành công](/images/OpenRouter/2026-11/NewaccNet.Wpf_pxnNkjkgh8.png)
<p class="img-caption">Hình: Kiểm tra kết nối thành công và sẵn sàng tác nghiệp</p>
