// const users = [
//   { id: 1, name: "Tuan Anh", score: 10 },
//   { id: 2, name: "Hoa", score: 9 },
//   { id: 3, name: "Minh", score: 7 },
//   { id: 4, name: "Tung", score: 7 },
//   { id: 5, name: "Dao", score: 8 },
//   { id: 6, name: "Duc", score: 2 },
//   { id: 7, name: "Manh", score: 5 },
//   { id: 8, name: "Duy", score: 3 },
//   { id: 9, name: "Huy", score: 2 },
//   { id: 10, name: "Minh", score: 6 },
// ];
// const scores = users.map (item => item.score)
// const ktra = [];
// for (var i = 0; i < scores.length; i++) {
//   if (scores[i] > 5) {
//     ktra.push(scores[i]);
//   }
// }
// console.log(ktra);

// const age = scores.filter(ktra);
// function ktra(scores,age) {
//    age=scores > 5
//     return age
// }
// console.log(age);
// for(; scores > 5 ;){
//     console.log(scores);
// }

// const users = [
//   { id: 1, name: "Tuan Anh", date: "20-1-1990" },
//   { id: 2, name: "Hoa", date: "3-10-1992" },
//   { id: 3, name: "Minh", date: "10-10-1994" },
//   { id: 4, name: "Tung", date: "10-12-2000" },
// ];

// const removed = users.splice(2, 1);
// console.log(users);
// console.log(removed);

// let fn = () => {
//     return[9,10,8]
// }
// let sum = (a,b,...arg)=> {
//     let total = a+b;
//     console.log(arg);
//     for (let i of arg){

//         total += i
//     }
//     return total
// }
// console.log(sum(1,2,3,4,5,6,74,5235));








// let arr = [1, 3, 4, 6, 2];
// arr.sort(function (a, b) {
//   return a - b;
// });
// n = 2;
// console.log("BÀI 1: " + "số thứ 2 " + "= ", arr[arr.length - n]);


// const arr1 = [1,2,3]
// const array = [2,3,4,...arr1];

//  const arrFilter = array.filter(
// (item, index) => array.indexOf(item) == index);
// console.log("BÀI 2: " + arrFilter);



// let users = [
//   { name: "cung bui tuan anh", age: 28 },
//   { name: "nguyen vu Anh", age: 27 },
//   { name: "tran cong Nam", age: 30 },
//   { name: "do van Duy", age: 25 },
// ];

// users.sort(function (a, b) {return a.age - b.age;});
// console.log(users);


// users.sort(function (a, b) {return b.name.length - a.name.length;});
// console.log(users);

