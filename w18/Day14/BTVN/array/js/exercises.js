// Bài 1

// Viết chương trình tính trung bình cộng các giá trị number trong mảng hỗn hợp
// Không tính các giá trị đặc biệt Infinity, -Infinity, NaN
// arr là mảng hỗn hợp nhận vào
// Kết quả cắt đến số thập phân thứ 2
// Nếu mảng rỗng (không chứa giá trị nào) hoặc không chứa giá trị number nào thì trả về NaN
function sumNumber(arr) {
    let total = 0;
    let count = 0;
    for (let i of arr) {
        if (typeof i == "number" || i instanceof Number) {
            if (i != Infinity && i != -Infinity && !isNaN(i)) {
                total += i
                count += 1
            }
        }
    }
    if (count !== 0) {
        return (total / count).toFixed(2)
    } else return NaN
}

// Bài 2

// Viết chương trình tìm số lớn thứ 3 trong mảng number chưa được sắp xếp
// Mảng có thể chứa các giá trị trùng nhau
// Nếu mảng có độ dài nhỏ hơn 3, hoặc không tìm thấy, kết quả là null
// arr là mảng number nhận vào
// Giữ nguyên thứ tự trong arr (không thay đổi mảng đầu vào)
function findThirdNumber(arr) {
    if (arr.length < 3) return null
    let num1 = arr[0];
    let num2 = arr[1];
    let num3 = arr[2];

    //Tim so lon nhat
    for (let i of arr) {
        if (i > num1) num1 = i
    }

    //Tim so lon thu 2
    for (let i of arr) {
        if (i > num2 && i < num1) num2 = i
    }

    //num3 khong trung voi num2 va num1
    for (let i = 0; i < arr.length; i++) {
        if (num3 == num2 || num3 == num1) {
            num3 = arr[i]
        }
    }

    //Tim so lon thu 3
    for (let i of arr) {
        if (i >= num3 && i < num1 && i < num2) num3 = i
    }
    console.log(num1, num2, num3)
    if (num1 > num2 && num2 > num3) {
        return num3
    } else return null
}

// Bài 3

// Viết chương trình tìm giá trị có số lần xuất hiện nhiều nhất trong mảng
// Kết quả trả về là một object có dạng
// {values: [number], times: number}
// arr là mảng nhận vào
// Các giá trị trong arr trong khoảng từ 0 -> 20
// Nếu có nhiều giá trị có số lần xuất hiện giống nhau thì thêm vào mảng value
// {values: [number1, number2], times: number}

function maxFrequency(arr) {
    // return object
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let count = 0
        let obj = {}
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === value) {
                count++
            }
        }
        obj.value = value
        obj.count = count
        newArr.push(obj)
    }

    //Delete duplicate obj
    let uniqueArr = [];
    newArr.forEach(function (obj, index) {
        let hasThatValue = false
        uniqueArr.forEach(function (obj2, index2) {
            if (obj2.value === obj.value) {
                hasThatValue = true
            }
        })
        if (!hasThatValue) {
            uniqueArr.push(obj)
        }
    })
    // console.log(uniqueArr)

    //Find highest counted number
    if (uniqueArr[0] === undefined) {
        return null
    }
    let highestCountedNumber = uniqueArr[0].count;
    for (let obj of uniqueArr) {
        if (obj.count > highestCountedNumber) {
            highestCountedNumber = obj.count
        }
    }
    // console.log(highestCountedNumber)

    //Make the result Object
    let resultObj = {
        values: [],
        times: highestCountedNumber
    };
    for(let obj of uniqueArr) {
        if (obj.count === highestCountedNumber) {
            resultObj.values.push(obj.value)
        }
    }
    console.log(resultObj)
    return resultObj
}


// Bài 4

// Viết chương trình xáo trộn mảng number (sắp xếp theo thứ tự ngẫu nhiên) chứa các giá trị không trùng lặp
// arr là mảng nhận vào
// Thay đổi thứ tự trong chính mảng arr
function shuffle(arr) {
    // no return
    let cloneArr = [...arr]
    cloneArr.forEach(function (value, index) {
        if (value === arr[index]) {
            for (let i = 0; i < cloneArr.length; i++) {
                if (value !== cloneArr[i]) {
                    arr.splice(index, 1, cloneArr[i])
                }
            }
            return arr
        }
    })
    
}

// Bài 5

// Viết chương trình loại bỏ các số xuất hiện lặp lại trong mảng number
// arr là mảng truyền vào
// Không thay đổi mảng đầu vào, không thay đổi thứ tự các phần tử đầu ra
function removeDuplicate(arr) {
    // return new array
    let uniqueArr = [];
    for (let value of arr) {
        if(uniqueArr.indexOf(value) === -1) {
            uniqueArr.push(value)
        }
    }
    return uniqueArr
}

// Cho mảng customers như sau
let customers = [
    {
        id: 1,
        name: "Ba",
        email: "0965338283",
        points: 3425,
    },
    {
        id: 2,
        name: "Béo",
        email: "0965338382",
        points: 1234,
    },
    {
        id: 3,
        name: "Ú",
        email: "0965338832",
        points: 2341,
    },
    {
        id: 4,
        name: "Bon",
        email: "0965338823",
    },
];

// Bài 6

// Viết chương trình sắp xếp mảng customers theo points giảm dần
// Trả về mảng kết quả chỉ bao gồm các customers có points và points >= 2000
// KHÔNG làm biến đổi mảng customers
// Sử dụng sort và filter
function sortByPoints(customers) {
    // return new array
    let cloneCustomers = [...customers]
    cloneCustomers.sort(function (a, b) {
        if (typeof a.points === 'number' && typeof b.points === 'number')
        return b.points - a.points
    })

    let arrResult = cloneCustomers.filter(function (obj, index) {
        if (obj.points === undefined || obj.points < 2000) {
            return false
        } else {
            return true
        }
    })
    return arrResult
}

// Bài 7

// Viết chương trình xếp hạng cho các customer trong mảng customers
// Thêm thuộc tính rating tương ứng với points cho mỗi customer
// Nếu points >= 1000 -> rating: "Silver"
// Nếu points >= 2000 -> rating: "Gold"
// Nếu points >= 3000 -> rating: "Diamon"
// Nếu points < 1000 hoặc không có points -> rating: null

// Trả về kết quả là một mảng mới chỉ bao gồm thông tin name và rating
// VD: [{name: "Ba", rating: "Diamon"}, ...]
// Sử dụng forEach, map
// Mảng gốc thêm thuộc tính rating
function rating(customers) {
    // return new array
    customers.forEach(function (obj, index) {
        if (obj.points >= 3000) {
            obj.rating = 'Diamon'
        } else if (obj.points >= 2000) {
            obj.rating = 'Gold'
        } else if (obj.points >= 1000) {
            obj.rating = 'Silver'
        } else {
            obj.rating = null
        }
    })
    let arrResult = customers.map(function (obj, index) {
        let objFinal = {}
        objFinal.name = obj.name
        objFinal.rating = obj.rating
        return objFinal
    })
    return arrResult
}

// Bài 8

// Viết chương trình tính tổng points của customers
// Sử dụng reduce
// Nếu không có points thì tính bằng 0
function sumPoints(customers) {
    // return total
    let totalPoints = customers.reduce(function (sum, obj, index) {
        if (obj.points === undefined) {
            return sum
        } else {
            sum += obj.points
            return sum
        }
    }, 0)
    return totalPoints
}
