import { useState } from "react";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    fetch("https://unicode.vn/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => response.json())
      .then((json) => sessionStorage.setItem("user_id", json.data.id));
    window.location.reload();
  };
  return (
    <>
      <div>
        {props.render({
          submit: handleSubmit,
          valueemail: email,
          valuepass: password,
          setemail: setEmail,
          setpass: setPassword,
        })}
      </div>
    </>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="email"
    //     placeholder="email@gmail.com"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button type="submit">đăng nhập</button>
    // </form>
  );
}
