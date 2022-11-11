# MẢNG(ARRAY) ĐƯỢC VIẾT TRONG []

# LẤY 1 KÝ TỰ THEO THỨ TỰ TRONG ARRAY
'''
# để lấy ra 1 ký tự trong Array ra dùng cú pháp sau
a = "Hello, World!"
# có 13 ký tự trong string a và được đánh số thứ tự bắt đầu từ 0->12
print(a[1])
# lấy ra 1 ký tự trong string a ở vị trí thứ 1 tính từ 0 tức là chữ "e" 
'''

# LẤY 1 HOẶC NHIỀU KÝ TỰ THEO THỨ TỰ TRONG ARRAY
'''
# để lấy ra 1 hoặc nhiều ký tự ký tự trong Array ra dùng cú pháp sau
a = "Hello, World!"
# có 13 ký tự trong string a và được đánh số thứ tự bắt đầu từ 0->12
print(a[1:10])
# lấy ra nhiều ký tự trong string a ở vị trí thứ 1 tính từ 0 tức là chữ "e" đến ký tự thứ 10 tức chữ "r"
kết quả : ello, Wor
'''

# LẤY 1 HOẶC NHIỀU KÝ TỰ THEO THỨ TỰ TỪ ĐẦU TRONG ARRAY
'''
# để lấy ra nhiều ký tự ký tự từ đầu đến thứ tự chỉ định trong Array ra dùng cú pháp sau
a = "Hello, World!"
# có 13 ký tự trong string a và được đánh số thứ tự bắt đầu từ 0->12
print(a[:10])
# lấy ra nhiều ký tự trong string a ở vị trí đầu tiên tính từ 0 tức là chữ "H" đến ký tự thứ 10 tức chữ "r"
kết quả : Hello, Wor
'''

# LẤY 1 HOẶC NHIỀU KÝ TỰ THEO THỨ TỰ CHỈ ĐỊNH ĐẾN CUỐI TRONG ARRAY
'''
# để lấy ra nhiều ký tự ký tự từ thứ tự chỉ định đến cuối trong Array ra dùng cú pháp sau
a = "Hello, World!"
# có 13 ký tự trong string a và được đánh số thứ tự bắt đầu từ 0->12
print(a[7:])
# lấy ra nhiều ký tự trong string a ở vị trí tính từ 7 tức là chữ "W" đến ký tự cuối tức dấu "!"
kết quả : Hello, Wor
'''

# LẤY 1 HOẶC NHIỀU KÝ TỰ TỪ CUỐI ĐẾN THỨ TỰ CHỈ ĐỊNH TRONG ARRAY
'''
# để lấy ra nhiều ký tự ký tự từ thứ tự chỉ định đến cuối trong Array ra dùng cú pháp sau
a = "Hello, World!"
# có 13 ký tự trong string a và được đánh số thứ tự bắt đầu từ 0->12
print(a[-5:-2])
# TỪ CHỮ "O" THEO THỨ TỰ -5 TỨC TỪ CUỐI LÙI 5 KÝ TỰ
# ĐẾN KÝ TỰ THỨ -2 TỨC TỪ CUỐI LÙI VỀ 2 KÝ TỰ VÀ LẤY KÝ TỰ TIẾP THEO TỨC CHỮ "L" CHỨ KHÔNG PHẢI CHỮ "D" LÀM ƠN !!!
kết quả : orl
'''