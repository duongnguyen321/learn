# NUMBER
# CÁC KIỂU DỮ LIỆU CỦA NUMBER
'''
x = 1    # int
y = 2.8  # float
z = 1j   # complex
print(type(x))
print(type(y))
print(type(z))
'''

# INT
'''
# Int, hoặc số nguyên, là một số nguyên, dương hoặc âm, không có số thập phân, có độ dài không giới hạn.
x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))
'''

# FLOAT
'''
# Float, hoặc "số dấu phẩy động" là một số, dương hoặc âm, chứa một hoặc nhiều số thập phân.
x = 1.10
y = 1.0
z = -35.59

print(type(x))
print(type(y))
print(type(z))

# Float cũng có thể là các số khoa học với chữ "e" để biểu thị lũy thừa của 10
x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))
'''

# COMPLEX
'''
# Complex là Số phức được viết với "j" là phần ảo
# Nhất định phải là j không là cái khác làm ơn :(
x = 3+5j
y = 5j
z = -5j

print(type(x))
print(type(y))
print(type(z))
'''

# ÉP KIỂU
'''
# Có thể chuyển đổi từ kiểu này sang kiểu khác bằng các phương thức int (), float () và complex ()
x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))
'''

# RANDOM
'''
import random
# import module random 
print(random.randrange(1, 10))
# print ra số ngẫu nhiên từ 1 ĐẾN 9 với hàm random.randrange
# Nhớ là từ 1->9 làm ơn :((
'''


