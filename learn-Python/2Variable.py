# BIẾN CỤC BỘ VÀ BIẾN GLOBAL
# BIẾN CỤC BỘ
'''
x = "Đẹp zai"
# biến cục bộ
def myfunc():
    print("Duong is " + x)
myfunc()
print("DƯơng is " + x)
'''

# BIẾN Global
'''
def globalFn():
    global y
#  tạo biến global bằng cú pháp global abcxyz 
    y = "fantastic"
def globalFn():
    print("Python is " + y)
'''

# biến global có thể thay đổi biến cục bộ
'''
z = "awesome"
def myfunc():
    global z
#   biến global có thể thay đổi biến cục bộ
    z = "fantastic"
myfunc()
print("Python is " + z)
'''
