# NỐI CHUỖI
# Để nối hoặc kết hợp hai chuỗi, bạn có thể sử dụng toán tử +.

# NỐI CHUỖI ĐƠN THUẦN
'''
a = "Hello"
b = "World"
c = a + b
print(c)
KẾT QUẢ HelloWorld
'''

# THÊM KÝ TỰ TRONG KHI NỐI CHUỖI
'''
a = "Hello"
b = "World"
c = a + ", " + b + "!"
print(c)
KẾT QUẢ Hello, World!
'''

# NỐI CHUỖI DÙNG HÀM FORMAT()
'''
Phương thức format () nhận các đối số được truyền vào, định dạng chúng và đặt chúng vào chuỗi nơi có trình giữ chỗ {}
age = 17
txt = "My name is Duong, and I am {} yold"
print(txt.format(age))
KẾT QUẢ My name is Duong, and I am 17 yold

# TẤT NHIÊN LÀ CHÚNG TA PHẢI CHO NGƯỜI DÙNG NHẬP CHỨ AI LẠI GÁN CỨNG THẾ !!!
# SỬ DỤNG HÀM input() ở ngay file 1 

age = input("Nhập tuổi")
txt = "My name is Duong, and I am {} yold"
print(txt.format(age))
# ví dụ user nhập 100 tuổi thì 
# kết quả My name is Duong, and I am 100 yold
'''

# NỐI NHIỀU CHUỖI DÙNG HÀM FORMAT()
'''
# Phương thức format () nhận số lượng đối số không giới hạn và được đặt vào các trình giữ chỗ tương ứng
quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))
# KẾT QUẢ I want 3 pieces of item 567 for 49.95 dollars.

# TẤT NHIÊN LÀ CHÚNG TA PHẢI CHO NGƯỜI DÙNG NHẬP CHỨ AI LẠI GÁN CỨNG THẾ !!!
# SỬ DỤNG HÀM input() ở ngay file 1 

quantity = input ("Quantity?")
itemno = input ("Item number?")
price = input ("Price?")
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))
# ví dụ user nhập dở hơi full 1 thì 
# kết quả I want 1 pieces of item 1 for 1 dollars.
'''

