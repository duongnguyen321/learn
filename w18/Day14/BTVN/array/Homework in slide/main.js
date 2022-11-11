let arr = [1,2,3,4,5,6]

//1. Viết hàm sumAvg(arr) tính trung bình cộng một mảng số
function sumAvg(arr) {
    let total = arr.reduce(function (sum, value, index) {
        sum += value
        return sum
    }, 0);
    return total / arr.length
}
console.log(sumAvg(arr))

//2. Viết hàm findMax(arr) tìm giá trị lớn nhất trong một mảng
function findMax(arr) {
    let max = arr[0]
    for (let value of arr) {
        if (value > max) max = value
    }
    return max
}
console.log(findMax(arr))

//3. Viết hàm fibonacci(n) trả về một mảng chứa n số Fibonacci
function fibonacci(n) {
    let fibArr = []
    fibArr[0] = 0
    fibArr[1] = 1
    for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
    }
    return fibArr
}
console.log(fibonacci(5))

//4. Viết hàm removeFalsy(arr) trả về một mảng mới chỉ chứa các giá trị đúng trong mảng
function removeFalsy(arr) {
    let onlyTruthyArr = arr.filter(function (value, index) {
        return value
    })
    return onlyTruthyArr
}
console.log(removeFalsy([false, true, false, false, true]))

//5. Viết hàm sortByColumn(arr, col) sắp xếp một mảng 2 chiều theo giá trị cột col tăng dần
let arr = [
    [2, 1, 3],
    [0, 4, 1],
    [3, 2, 2],
    [2, 3, 0],
];

arr.sort(function (a, b) { // a và b là mảng con
    return a[1] - b[1];
});



//6. Viết hàm double(arr) trả về một mảng mới với giá trị các phần tử bằng bình phương chính nó
function double(arr) {
    return arr.map(function (value, index) {
        return value * value
    })
}
console.log(double(arr))

//7. Viết hàm capitalize(str) chuyển đổi một chuỗi thành dạng capitalize
function capitalize(str) {
    return str
        .split(" ")
        .map(function (word){
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}
console.log(capitalize('hello world! i am a fe dev'))

//8. Viết hàm randItem(arr) trả về một phần tử ngẫu nhiên trong mảng
function randItem(arr) {
    let randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
}
console.log(randItem(arr))