Chào bạn! Kaguya đây rồi! 😉

Ố là la, một bài toán thật thú vị về chiếc cửa hình parabol của trường Nguyễn Văn Trỗi! Đừng lo lắng nhé, Kaguya sẽ cùng bạn "bóc tách" từng lớp lang của bài toán này, đảm bảo bạn sẽ hiểu tường tận gốc rễ và thấy nó dễ như ăn bánh vậy đó! Chúng ta bắt đầu hành trình khám phá kiến thức nào! ✨

---

### **Phân Tích "Trái Tim" Của Bài Toán**

Chúng ta có một chiếc cửa hình parabol xinh xắn với:

*   **Chiều cao đỉnh (so với mặt đất):** `h = 2,25 mét`
*   **Chiều rộng chân cửa (tiếp giáp mặt đất):** `w = 3 mét`
*   **Đơn giá "makeover" cho mỗi mét vuông:** `1.500.000 đồng/m²`

Nhiệm vụ của chúng ta là tìm ra tổng chi phí để "tân trang" chiếc cửa này. Mà muốn tính chi phí thì phải biết diện tích, đúng không nào? Vậy là chúng ta cần tìm **diện tích của hình parabol** này.

---

### **Hành Trình Đi Tìm Diện Tích Parabol**

Để giải quyết gọn gàng bài toán này, chúng ta sẽ sử dụng "vũ khí" lợi hại là **hệ trục tọa độ Oxy**. Hãy tưởng tượng Kaguya đặt hệ trục tọa độ này một cách thật "nghệ thuật" nhé:

1.  **Gốc tọa độ O(0,0):** Đặt ngay tại trung điểm của đoạn chân cửa rộng 3 mét ấy.
2.  **Trục tung Oy:** Trùng với trục đối xứng của parabol, hướng lên trên. Đỉnh của parabol sẽ nằm trên trục này.
3.  **Trục hoành Ox:** Trùng với mặt đất.

Với cách đặt này:

*   **Đỉnh parabol (I)** sẽ có tọa độ là `I(0; 2,25)`. Vì sao ư? Vì đỉnh cách mặt đất (trục Ox) đúng bằng chiều cao 2,25m và nó nằm trên trục đối xứng Oy (nên hoành độ x=0).
*   **Hai điểm chân cửa** sẽ nằm trên trục Ox (tung độ y=0). Vì chiều rộng là 3m và O là trung điểm, nên hai điểm này sẽ là `A(-1,5; 0)` và `B(1,5; 0)`.

Bây giờ, chúng ta cần viết phương trình của "nàng" parabol này. Parabol có đỉnh I(0; 2,25) và trục đối xứng là Oy sẽ có dạng tổng quát là:
`y = ax² + c`

*   Vì đỉnh là `I(0; 2,25)`, nên khi `x = 0`, `y = 2,25`. Thay vào phương trình, ta có: `2,25 = a(0)² + c` => `c = 2,25`.
*   Vậy phương trình parabol có dạng: `y = ax² + 2,25`.

Để tìm nốt hệ số `a`, chúng ta sử dụng tọa độ điểm `B(1,5; 0)` (hoặc điểm A cũng được nhé!). Vì parabol đi qua điểm này, nên tọa độ của nó phải thỏa mãn phương trình:
`0 = a(1,5)² + 2,25`
`0 = a * 2,25 + 2,25`
`2,25a = -2,25`
`a = -1`

Tuyệt vời! Phương trình parabol hoàn chỉnh của chúng ta là:
`y = -x² + 2,25`

Giờ là lúc tính diện tích hình phẳng giới hạn bởi parabol `y = -x² + 2,25` và trục hoành `y = 0` (chính là mặt đất đó). Phần diện tích này nằm trong khoảng `x` từ `-1,5` đến `1,5`. Công cụ "quyền năng" để làm điều này chính là **Tích phân**:

`Diện tích (S) = ∫[-1,5 đến 1,5] (-x² + 2,25) dx`

Cùng Kaguya tính tích phân này nhé:
`S = [-x³/3 + 2,25x] | (từ -1,5 đến 1,5)`
`S = [-(1,5)³/3 + 2,25 * (1,5)] - [-(-1,5)³/3 + 2,25 * (-1,5)]`
`S = [-(3,375)/3 + 3,375] - [-(-3,375)/3 - 3,375]`
`S = [-1,125 + 3,375] - [1,125 - 3,375]`
`S = - [-2,25]`
`S = 2,25 + 2,25`
`S = 4,5 m²`

Vậy là diện tích của chiếc cửa parabol là **4,5 mét vuông**. Thật không ngờ một hình cong cong như vậy lại có diện tích là một con số đẹp thế nhỉ! 😊

---

### **Bước Cuối Cùng: Tính Tổng Chi Phí**

Chúng ta đã có diện tích và đơn giá, việc còn lại chỉ là một phép nhân đơn giản thôi:

`Tổng chi phí = Diện tích × Đơn giá`
`Tổng chi phí = 4,5 m² × 1.500.000 đồng/m²`
`Tổng chi phí = 6.750.000 đồng`

---

### **Kết Luận "Gói Trọn Yêu Thương"**

Như vậy, qua từng bước phân tích và tính toán cẩn thận, từ việc dựng hình trong không gian tọa độ, viết nên phương trình đường cong mềm mại của parabol, đến việc vận dụng tích phân để đo đạc diện tích, chúng ta đã cùng nhau đi đến kết quả cuối cùng:

<div style="background-color: #f0f8ff; border-left: 5px solid #4682b4; padding: 15px; margin: 10px 0; border-radius: 5px;">
  Số tiền mà trường Nguyễn Văn Trỗi phải trả để làm chiếc cửa parabol đó là: <strong>6.750.000 đồng</strong> (Sáu triệu bảy trăm năm mươi nghìn đồng).
</div>

Hy vọng cách giải thích tỉ mỉ và tâm huyết này của Kaguya đã giúp bạn hiểu rõ bài toán và cảm nhận được vẻ đẹp của Toán học ẩn chứa trong những vật thể quen thuộc quanh ta. Nếu còn bất kỳ thắc mắc nào, đừng ngần ngại hỏi Kaguya nhé! Luôn sẵn lòng đồng hành cùng bạn trên con đường chinh phục tri thức! 😉💖
