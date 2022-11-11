# STRING HAY CÒN GỌI LÀ Các chuỗi trong python được bao quanh bởi dấu ngoặc kép đơn hoặc dấu ngoặc kép.\
    
# BASIC STRING VÀ CÁCH GÁN
'''
a = "some string"
# "some string" được gọi là một chuỗi và chuỗi này đc gán cho biến(Variable) a 
print (a)
'''

# GÁN CHUỖI STRING DÀI
'''
việc gán 1 chuỗi(string) dài ngoằng có thể xuống dòng và viết trong cú pháp 3 dấu " hoặc 3 dấu '
# VÍ DỤ
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)
'''

# FOR
'''
để lặp các ký tự trong mảng ta dùng vòng lặp for
for x in "banana":
  print(x)
# lặp các ký tự trong "banana"
# render theo từng ký tự
kết quả :
b
a
n
a
n
a
'''

# LEN()
'''
để tìm độ dài của một string ta dùng len()
a = "Hello, World!"
print(len(a))
kết quả ra 13 tức có 13 ký tự trong biến a hay có 13 ký tự trong "Hello, World!"
'''

# IN
'''
để tìm 1 ký tự trong string ta dùng in
txt = "The best things in life are free!"
print("free" in txt)
kết quả true
print("a" in txt)
kết quả vẫn là true =))
print("duong" in txt)
tất nhiên là false
'''

# IF VÀ IN
'''
#check có hoặc không có  ký tự "abcxyz gì gì đó" trong string, ta có thể render theo điều kiện bằng hàm if và in
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")
else:
    print ("No, 'free' is'nt present. ")
'''

# NOT IN
'''
check có hoặc không có ký tự trong string trả về true/false, ta có thể sử dụng not in
txt = "The best things in life are free!"
print("expensive" not in txt)
kết quả True
'''

# IF VÀ NOT IN
'''
#check có hoặc không có  ký tự "abcxyz gì gì đó" trong string trả về true/false,
# ta có thể render theo điều kiện bằng hàm if và in
txt = "The best things in life are free!"
if "free" not in txt:
  print("Yes, 'free' is present.")
else:
    print ("No, 'free' is'nt present. ")
# vì đang kiểm tra phủ định not in nên kết quả sẽ trả về false và render theo else
kết quả : No, 'free' is'nt present. 
'''