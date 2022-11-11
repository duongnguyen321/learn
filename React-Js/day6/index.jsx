// học lifecycle thao tác với DOM ( load Không cần làm mới lại trang)
// Mounting- chạy một đoạn mã sau khi compoment được gắn vào DOM(tạo bộ đém,gửi request)
// Updating- chạy một đoạn mã sau khi compoment được gắn vào DOM(gửi request)
// UnMounting- chạy một đoạn mã sau khi compoment được gắn vào DOM(Xoá bộ đếm, huỷ request)
// học lại ajax, Jquery ajax
// học lại fetch API/axios
// Khi làm việc với useEffect
// 1. Nó nhận 2 tham số, tham số đầu tiên là một hàm, tham số thứ 2 là một mảng
// 2. Hàm truyền vào useEffect sẽ chạy sau khi render lần đầu tiên, và sau mỗi lần cập nhật (tương tự với didMount và didUpdate)
// 3. Hàm có thể return về một hàm khác, hàm này sẽ chạy TRƯỚC mỗi lần chuẩn bị cập nhật và trước khi gỡ bỏ (tương tự như willUnmount)
// 4. Dependencies sử dụng để giới hạn số lần useEffect chạy, mảng rỗng thì chỉ chạy 1 lần duy nhất
// 5 Một component có thể có nhiều useEffect 