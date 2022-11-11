// Bài 1: Viết function nhập vào số month và year bất kỳ. Trả về số ngày của tháng đó (sử dụng switch/case)
function totalDaysOfTheMonth(month, year) {
    switch(month) {
        case 1:
            console.log("Thang 1 co 31 ngay")
            return 31
            break;
        case 2:
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                console.log("Thang 2 co 29 ngay")
                return 29
                break
            } else {
                console.log("Thang 2 co 28 ngay")
                return 28
                break
            }
        case 3:
            console.log("Thang 3 co 31 ngay")
            return 31
            break
        case 4:
            console.log("Thang 4 co 30 ngay")
            return 30
            break
        case 5:
            console.log("Thang 5 co 31 ngay")
            return 31
            break
        case 6:
            console.log("Thang 6 co 30 ngay")
            return 30
            break
        case 7:
            console.log("Thang 7 co 31 ngay")
            return 31
            break
        case 8:
            console.log("Thang 8 co 31 ngay")
            return 31
            break
        case 9:
            console.log("Thang 9 co 30 ngay")
            return 30
            break
        case 10:
            console.log("Thang 10 co 31 ngay")
            return 31
            break
        case 11:
            console.log("Thang 11 co 30 ngay")
            return 30
            break
        case 12:
            console.log("Thang 12 co 31 ngay")
            return 31
            break
        default:
            console.log("Nhap lai thang, nam")
            break       
    }
}
totalDaysOfTheMonth(2,1999);

// Bài 2: Viết function sử dụng vòng lặp từ 1->100
// Nếu số đó chia hết cho 3 in ra "Fizz"
// Nếu số đó chia hết cho 5 in ra "Buzz"
// Nếu số đó chia hết cho 3 và 5 in ra "FizzBuzz"
// Các trường hợp còn lại in ra giá trị của số đó
function fizzBuzzGame() {
    for (let i = 1; i <= 100; i += 1) {
        if ( i % 3 == 0 && i % 5 == 0 ) {
            console.log("FizzBuzz")
        } else if ( i % 3 == 0 ) {
            console.log("Fizz")
        } else if ( i % 5 == 0 ) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}
fizzBuzzGame()

// Bài 3: Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function volumeSphere(radius) {
    let result = 4/3 * Math.PI * radius**3
    console.log(result)
    return result
}
volumeSphere(1);

// Bài 4: Viết function truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
// Kết quả xuôi ngược đều như nhau
function sumUpPositiveIntegersNumbers(number1, number2) {
    let result = 0;
    let total = number1 + number2;
    if (number1 >= 0 && number2 >= 0 && Number.isInteger(number1) && Number.isInteger(number2)) {
        if (number1 > number2) {
            result = total * (number1 - number2 + 1) / 2 - total
            console.log(result)
            return result
        } else {
            result = total * (number2 - number1 + 1) / 2 - total
            console.log(result)
            return result
        }
    } else {
        console.log("Xin hãy nhập lại hai số nguyên dương")
    }
}
sumUpPositiveIntegersNumbers(3,8);
sumUpPositiveIntegersNumbers(8,3);

// Bài 5: Viết function truyền vào 1 số. Kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function checkPrimeNumber(number) {
    let result = true
    if (number < 2) {
        result = false
    } else {
        for (let i = 2; i < number-1; i++) {
            if (number % i == 0) {
                result = false
                break
            }
        }
    }
    
    //test
    if (result) {
        console.log(`Số ${number} là số nguyên tố`)
    } else {
        console.log(`Số ${number} không là số nguyên tố`)
    }

    return result
}
checkPrimeNumber(9);

// Bài 6: Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function sumUpAllPrimeNumbbers(number) {
    if (number >= 0 && Number.isInteger(number)) {
        let result = 0;
            for (i = 2; i <= number; i++) {
                let isIPrime = true;
                for (let j = 2; j < i-1; j++) {
                    if (i % j == 0) {
                        isIPrime = false;
                        break
                    }
                }
                if (isIPrime) {
                    result += i
                }
            }
        console.log(result)
        return result
    } else {
        console.log("Xin hãy nhập lại số nguyên dương")
    }
}
sumUpAllPrimeNumbbers(5)

// Bài 7: Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các ước số của số đó.
function sumUpAllDivisors(number) {
    if (number >= 0 && Number.isInteger(number)) {
        let result = 0;
        for (i = 1; i <= number; i++) {
            if (number % i == 0) {
                result += i
            }
        }
        console.log(result)
        return result
    } else {
        console.log("Xin hãy nhập lại số nguyên dương")
    }
}
sumUpAllDivisors(2);











