const root = document.getElementById("root");

//1

// let name = "Gầy";
// const element = (
//   <h1>
//     Hello World!
//     <span>hdạkdhakdjhdjkáhkadhakjdahkdahkạh</span>
//     <p>hjgfhjsgfjhfgsjdhf</p>
//     <h2>
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, adipisci
//       fuga illum doloremque magni sit dolorum modi omnis esse, earum dolore
//       facilis ratione consequatur quia et inventore laudantium blanditiis
//       laboriosam.
//     </h2>
//     <h3>my name is {name}</h3>
//   </h1>
// ); //cú pháp jsx

// ReactDOM.render(element, root);

//2

// let admin = {
//   name: "duong",
//   age: 17,
// };
// let adName = admin.name;
// let adAge = admin.age;

// function greeting(admin) {
//   return (
//     <div>
//       <h1>
//         Hi mình là {adName}, mình {adAge} tuổi
//       </h1>
//       <p>dòng này để đọc thôi không có gì cả</p>
//     </div>
//   );
// }

// ReactDOM.render(greeting(admin.duong), root);

//3

// let count = 0
// function update(){
//     const element = (

//         <div>
//             <h1> React DOM</h1>
//             <p>count = {count}</p>
//         </div>
//     );

//     ReactDOM.render(element,root)

//     count++
// }

// update()

// setInterval(update, 1000);//tăng fgiá trin count mỗi 1s

//4
// const element = (
//   <div>
//     <div className="item">
//       <img src="https://cf.shopee.vn/file/d3ff6281c4f5f89fb02fa76cd0d44b17_tn" />
//       <p>Váy đỏ đầm chữ A đính nơ...</p>
//       <span>Giảm 3k</span>
//       <h2>128.000</h2>
//       <p>đã bán 22</p>
//     </div>
//     <div className="item">
//       <img src="https://cf.shopee.vn/file/d3ff6281c4f5f89fb02fa76cd0d44b17_tn" />
//       <p>Váy đỏ đầm chữ A đính nơ...</p>
//       <span>Giảm 3k</span>
//       <h2>128.000</h2>
//       <p>đã bán 22</p>
//     </div>
//     <div className="item">
//       <img src="https://cf.shopee.vn/file/d3ff6281c4f5f89fb02fa76cd0d44b17_tn" />
//       <p>Váy đỏ đầm chữ A đính nơ...</p>
//       <span>Giảm 3k</span>
//       <h2>128.000</h2>
//       <p>đã bán 22</p>
//     </div>
//     <div className="item">
//       <img src="https://cf.shopee.vn/file/d3ff6281c4f5f89fb02fa76cd0d44b17_tn" />
//       <p>Váy đỏ đầm chữ A đính nơ...</p>
//       <span>Giảm 3k</span>
//       <h2>128.000</h2>
//       <p>đã bán 22</p>
//     </div>
//   </div>
// );

// ReactDOM.render(element,root)

//5
// class Item extends React.Component{
//     render(){
//         return(
//     <div className="item">
//       <img src="https://cf.shopee.vn/file/d3ff6281c4f5f89fb02fa76cd0d44b17_tn" />
//       <p>Váy đỏ đầm chữ A đính nơ...</p>
//       <span>Giảm 3k</span>
//       <h2>128.000</h2>
//       <p>đã bán 22</p>
//     </div>
//         )
//     }
// } ////cú pháp class

// const element = (
//     <div className="list">
//         <Item />
//         <Item />
//         <Item />
//         <Item />
//         <Item />
//     </div> //Nhớ viết hoa chữ đầu
// )
// ReactDOM.render(element,root)

//6
// function Item(){
//        return(
//     <div className="item">
//       <img src="https://cf.shopee.vn/file/d3ff6281c4f5f89fb02fa76cd0d44b17_tn" />
//       <p>Váy đỏ đầm chữ A đính nơ...</p>
//       <span>Giảm 3k</span>
//       <h2>128.000</h2>
//       <p>đã bán 22</p>
//     </div>
//     )
// }//cú pháp funtion

// const element = (
//     <div className="list">
//         <Item />
//         <Item />
//         <Item />
//         <Item />
//         <Item />
//     </div> //Nhớ viết hoa chữ đầu
// )
// ReactDOM.render(element,root)

//7
// function Wellcome() {
//   return (
//     <div className="Wellcome">
//       <h1 style={{ color: "red" }}>Hello</h1>
//       <img src="data:image/jpeg;base64,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" />
//     </div>
//   );
// }

// class App extends React.Component{
//     render(){
//         return (
//           <div className="App">
//             <img src="data:image/jpeg;base64,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" />
//             <h1 style={{ color: "blue" }}>app1</h1>
//             <h1 style={{ color: "yellow" }}>app2</h1>
//             <h1 style={{ color: "orrange" }}>app3</h1>
//           </div>
//         );
//     }
// }

// function Menu() {
//   return (
//     <div className="Menu">
//       <select style={{background:"red"}}>
//           <option >a</option>
//           <option >b</option>
//           <option >c</option>
//       </select>
//     </div>
//   );
// }

// const element = (
//     <div className="list">
//        <Wellcome/>
//        <App/>
//        <Menu/>
//     </div>
// )
// ReactDOM.render(element,root)



//học thêm về props, {props.text},{props.href}...
//class thành className
//for thành htmlFor
//element là 1 giá trị có thể sử dụng trong jsx bình thường như vòng lặp, if else...
//nhúng giá trị dùng {}
//css bằng xStyle và gán bằng {}
// viết tên file nhớ viết hoa chữ đầu =))

