# Python có một tập hợp các phương thức tích hợp sẵn mà bạn có thể sử dụng trên các chuỗi
# viết hoa,viết thường, bỏ khoảng trắng,tách chuỗi...

# UPPER()
'''
ĐỂ VIẾT HOA HẾT CÁC KÝ TỰ TRONG STRING TA DÙNG HÀM upper()
a = "Hello, World!"
print(a.upper())
kết quả HELLO, WORLD!
'''

# LOWER()
'''
TƯƠNG TỰ VÀ NGƯỢC LẠI ĐỂ VIẾT THƯỜNG HẾT CÁC KÝ TỰ TRONG STRING TA DÙNG HÀM lower()
a = "HELLO, WORLD!"
print(a.lower())
kết quả hello, world!
'''

# STRIP()
'''
# KHI VIẾT MỘT CHUỖI HOẶC NGƯỜI DÙNG NHẬP Ô INPUT,
# KHÔNG THỂ TRÁNH KHỎI CÁC KHOẢNG TRẮNG Ở 2 ĐẦU CHUỖI NHÌN XẤU VÃI =))
# VÀ CÓ THỂ LÀM SAI THỨ TỰ KHI CHÚNG TA XỬ LÝ CHUỖI.
# VÀ LÚC ĐÓ TA NÊN DÙNG HÀM strip() ĐỂ LOẠI BỎ KHOẢNG TRẮNG 2 ĐẦU (KHÔNG BỎ KHOẢNG TRẮNG GIỮA CHUỖI)
a = "     Hello, World!         "
print(a.strip()) 
# kết quả  "Hello, World!"
'''

# REPLACE()
'''
# KHI MUỐN ĐỔI MỘT HOẶC NHIỀU KÝ TỰ TRONG CHUỖI TA DÙNG HÀM replace()

# ĐỔI 1 KÝ TỰ 
a = "Hello, World!"
print(a.replace("H", "J"))
# kết quả Jello, World!

#ĐỔI NHIỀU KÝ TỰ 
a = "Hello, World!"
print(a.replace("Hell", "J"))
# kết quả Jo, World!

# CÓ THỂ ĐỔI MỘT HOẶC NHIỀU KÝ TỰ THÀNH 1 KÝ TỰ RỖNG
# HAY NÔM NA CÁC CỤ NÓI LÀ XÓA KÝ TỰ TRONG MẢNG
a = "Hello, World!"
print(a.replace("Hell", ""))
# kết quả o, World!
'''

#SPLIT()
'''
# Phương thức split() chia chuỗi thành các chuỗi con NẾU NÓ TÌM THẤY các bản sao của dấu phân tách
a = "Hello, World!"
print(a.split(",")) 
# chia chuỗi a thành 2 phần trước và sau dấu "," và không loại bỏ khoảng trống ở 2 đầu
# đơn giản là chỉ chia và xóa kí tự dùng để chia thôi ở đây ký tự để chia là dấu ","
# kết quả ['Hello', ' World!']
'''
# NGOÀI RA CÒN NHIỀU CÁC PHƯƠNG PHƯƠNG THỨC KHÁC NHƯ
'''
capitalize()	Chuyển ký tự đầu tiên thành chữ hoa
casefold()	Chuyển đổi chuỗi thành chữ thường
center()	Trả về một chuỗi căn giữa
count()	 Trả về số lần một giá trị được chỉ định xuất hiện trong một chuỗi
encode()	Trả về phiên bản được mã hóa của chuỗi
endswith()	Trả về true nếu chuỗi kết thúc bằng giá trị được chỉ định
expandtabs()	Đặt kích thước tab của chuỗi 
find()	Tìm kiếm chuỗi cho một giá trị được chỉ định và trả về vị trí nơi nó được tìm thấy
format()	Định dạng các giá trị được chỉ định trong một chuỗi
format_map()	Định dạng các giá trị được chỉ định trong một chuỗi
index()	Tìm kiếm chuỗi cho một giá trị được chỉ định và trả về vị trí nơi nó được tìm thấy
isalnum()	Trả về True nếu tất cả các ký tự trong chuỗi là chữ và số
isalpha()	Trả về giá trị True nếu tất cả các ký tự trong chuỗi nằm trong bảng chữ cái
isdecimal()	Trả về giá trị True nếu tất cả các ký tự trong chuỗi là số thập phân
isdigit()	Trả về True nếu tất cả các ký tự trong chuỗi là chữ số
isidentifier()	Trả về True nếu chuỗi là số nhận dạng
islower()	Trả về True nếu tất cả các ký tự trong chuỗi là chữ thường
isnumeric()	Trả về True nếu tất cả các ký tự trong chuỗi là số 
isprintable()	Trả về giá trị True nếu tất cả các ký tự trong chuỗi đều có thể in được
isspace()	Trả về True nếu tất cả các ký tự trong chuỗi là khoảng trắng
istitle()	Trả về True nếu chuỗi tuân theo các quy tắc của tiêu đề
isupper()	Trả về True nếu tất cả các ký tự trong chuỗi là chữ hoa
join()	Nối các phần tử của một chuỗi có thể lặp lại
ljust()	Trả về phiên bản căn trái của chuỗi
lstrip()	Trả về phiên bản cắt bên trái của chuỗi 
maketrans()	Trả về một bảng dịch được sử dụng trong bản dịch
partition()	Trả về một bộ giá trị trong đó chuỗi được chia thành ba phần
rfind()	Tìm kiếm chuỗi cho một giá trị được chỉ định và trả về vị trí cuối cùng của nơi nó được tìm thấy
rindex()	Tìm kiếm chuỗi cho một giá trị được chỉ định và trả về vị trí cuối cùng của nơi nó được tìm thấy
rjust()	Trả về một phiên bản hợp lý bên phải của chuỗi 
rpartition()	Trả về một bộ giá trị trong đó chuỗi được chia thành ba phần
rsplit()	Tách chuỗi tại dấu phân tách được chỉ định và trả về một danh sách
rstrip()	Trả về phiên bản cắt bên phải của chuỗi
splitlines()	Tách chuỗi tại các ngắt dòng và trả về một danh sách
startswith()	Trả về true nếu chuỗi bắt đầu bằng giá trị được chỉ định
swapcase()	Hoán đổi các trường hợp, chữ thường trở thành chữ hoa và ngược lại
title()	Chuyển ký tự đầu tiên của mỗi từ thành chữ hoa
translate()	Trả về một chuỗi đã dịch
zfill()	Điền vào chuỗi với một số giá trị 0 được chỉ định ở đầu
'''
