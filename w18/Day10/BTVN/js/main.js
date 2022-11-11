//1. Chương trình tính chu vi hình tròn
function chuViHinhTron(a) {
    let chuVi;
    chuvi = 2 * a * Math.PI;
    console.log(chuvi);
}
chuViHinhTron(2);

//2. Chương trình tính diện tích hình tròn
function dienTichHinhTron(a) {
    let dienTich;
    dienTich = a * a * Math.PI;
    console.log(dienTich);
}
dienTichHinhTron(2);

//3. Chương trình quy đổi từ cm sang m
function quyDoiCmSangM(a) {
    console.log (0.01 * a);
}
quyDoiCmSangM(2);

//4. Chương trình quy đổi từ phút sang giờ
function quyDoiPhutSangGio(a) {
    console.log(a / 60);
}
quyDoiPhutSangGio(2);

//5. Chương trình trả về nghiệm của phương trình bậc nhất (ax + b = c)
function phuongTrinhBacNhat(a, b, c) {
    let nghiem;
    nghiem = (c - b) / a;
    console.log(nghiem);
}
phuongTrinhBacNhat(1,2,3);

//6. Chương trình đổi từ độ C => độ F
function cSangF(a) {
    console.log(a * 9/5 + 32);
}
cSangF(2);

//7. Chương trình tính chỉ số BMI của 1 người
function bmi(weight, height) {
    console.log(weight / (height * height))
}
bmi(70, 1.74);

//8. Chương trình random 1 số trong khoảng min - max (min, max là 2 số nguyên dương tùy ý)
function randomNumber(min, max) {
    let number;
    number = (max - min) * Math.random() + min;
    console.log(number);
}
randomNumber(4,7);
