# Escape Character
# Để chèn các ký tự không hợp lệ trong một chuỗi, hãy sử dụng Escape Character

# CÁC KIỂU Escape Character
'''
\"	Single Quote	(TRÍCH DẪN ĐƠN)
\\	Backslash	(HIỂN THỊ RA 1 DẤU \ NHƯNG PHẢI VIẾT 2 CÁI :D )
\n	New Line	(XUỐNG DÒNG MỚI)
\r	Carriage Return	 (VẪN LÀ XUỐNG DÒNG MỚI NHƯNG RETURN)
\t	Tab	 (CÁCH RA 1 TAB HAY NÓI CÁC KHÁC LÀ VÀI KHOẢNG TRỐNG)
\b	Backspace	(XÓA ĐI 1 KÝ TỰ ĐẰNG TRƯỚC)
\ooo	Octal value	(VIẾT THEO GIÁ TRỊ BÁT PHÂN "CHẮC LÀ NÓ MÃ HÓA HAY GÌ ĐÓ :D" VD:"\110\145\154\154\157" LÀ "Hello")
\xhh	Hex value (VIẾT THEO GIÁ TRỊ HEX "CHẮC LÀ NÓ MÃ HÓA HAY GÌ ĐÓ :D" VD:"\x48\x65\x6c\x6c\x6f" LÀ "Hello")
'''

# VÍ DỤ
'''
txt = "một con vịt xòe ra 2 "cục" cánh."
print (txt)
# CHẮC CHẮN NÓ SẼ BÁO LỖI CÚ PHÁP VÌ NÓ KHÔNG HIỂU CÁI DẤU "" BAO QUANH CHỮ cục LÀ GÌ ĐÂU =))
# LỖI BÁO
  File "demo_string_escape_error.py", line 1
    txt = "We are the so-called "Vikings" from the north."
                                       ^
SyntaxError: invalid syntax

HÃY THÊM ĐÔI DẤU \\ BAO QUANH 2 DẤU "" ĐÓ trở thành \"cục\"
txt = "một con vịt xòe ra 2 \"cục\" cánh."
print (txt)
kết quả : một con vịt xòe ra 2 "cục" cánh.
'''

