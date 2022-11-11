// import Tech2 from "./render-props/Tech2";
// import { Component } from "react";
// import Deflogin from "./components/defLogin";
// import Login from "./components/Login";
// import Userinfo from "./components/UserInfo";
import Layout from "./Layout";

// const UserRender = () => {
//   let data = sessionStorage.getItem("user_id");
//   const handleLogout = () => {
//     sessionStorage.setItem("user_id","");
//     data = ""
//     window.location.reload();
//   };

//   if (data !== "") {
//     return (
//       <>
//         <Userinfo
//           render={(data) => {
//             const { name, email } = data;
//             return (
//               <>
//                 <h1>xin chào {name} !</h1>
//                 <h2>email {email}</h2>
//               </>
//             );
//           }}
//         />
//         <button onClick={handleLogout}>Đăng xuất</button>
//       </>
//     );
//   } else {
//     return <></>;
//   }
// };
function App() {
  return (
    <>
      <h1>Render Props</h1>
      <Layout />

      {/* <UserRender /> */}
      {/* <Login
        render={(data) => {
          const { submit, valueemail, valuepass, setemail, setpass } = data;
          return (
            <form onSubmit={submit}>
              <input
                type="email"
                placeholder="email@gmail.com"
                value={valueemail}
                onChange={(e) => setemail(e.target.value)}
                />
              <input
                type="password"
                placeholder="password"
                value={valuepass}
                onChange={(e) => setpass(e.target.value)}
                />
              <button type="submit" onSubmit={submit}>
                đăng nhập
              </button>
            </form>
          );
        }}
        /> */}
          {/* <Deflogin/> */}
      {/* <Tech2
        render={(data) => {
          const { count, increment, decrement, } = data;
          return (
            <>
              <p>Giá trị {count}</p>
              <button onClick={increment}>Tăng</button>
              <button onClick={decrement}>Giảm</button>
            </>
          );
        }}
      /> */}
    </>
  );
}

export default App;
