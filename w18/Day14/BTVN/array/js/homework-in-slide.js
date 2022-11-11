//1. Viết hàm sumAvg(arr) tính trung bình cộng một mảng số
function sumAvg(arr) {
    let total = arr.reduce(function (sum, value, index) {
        sum += value
        return sum
    }, 0);
    return sum / arr.length
}
console.log(sumAvg([1,2,3]))
console.log("gg")