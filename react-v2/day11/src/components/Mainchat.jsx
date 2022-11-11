import React, { useEffect, useState } from "react";
import Part from "./Part.jsx";
import FormLogin from "./FormLogin";
import Name from "./Name.jsx";
import {useAuth0} from "@auth0/auth0-react"
export default function MainChat() {
  const [mess, setMess] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [newMess, setnewMess] = useState({
    name: "",
    message: "",
  });
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated === true) {
    newMess.name = user.name;
  } else {
    newMess.name = "Ẩn Danh";
  }
  useEffect(() => {
    fetch("https://apiforlearn.herokuapp.com/mess")
      .then((res) => res.json())
      .then(
        (data) => {
          setisLoaded(false);
          setMess(data);
        },
        (error) => {
         setisLoaded(true);
         console.log(error);
        }
      );
  });

  const renderMess = (mess) =>
    mess.map((mess, index) => {
      return (
        <div className="message" key={index}>
          <h1 className="name">{mess.name}</h1>
          <p className="mess">{mess.message}</p>
        </div>
      );
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    mess.push({
      name: newMess.name,
      message: newMess.message,
    });
    setMess(mess);
    fetch("https://apiforlearn.herokuapp.com/mess", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMess),
    });
  };
  const onChangeText = (message) => {
    newMess.message = message;
    setnewMess(newMess)
  };
  const handleLogin = () => {
    let loginForm = document.querySelector(".login-form-container");
    loginForm.classList.add("active");
  };

  function Checkuser() {
    const nameuser = document.querySelector(".container h3").className;
    const chatform = document.querySelector(".container .chatform");
    const loginform = document.querySelector(".container .loginform");
    if (nameuser === "userlogin") {
      chatform.classList.add("active");
      loginform.classList.remove("active");
    } else if (nameuser === "notuser") {
      chatform.classList.remove("active");
      loginform.classList.add("active");
    }
  }
  const checkuser = setTimeout(Checkuser, 500);

  function myStopFunction() {
    clearTimeout(checkuser);
  }
  return (
    <div className="container">
      <FormLogin />
      <div className="chatarena">{renderMess(mess)}</div>
      <Name />
      <form action="" className="chatform">
        <div className="nameform">
          <h2>
          {newMess.name}
          </h2>
        </div>
        <Part mess={newMess} onChangeText={onChangeText} />
        <button type="submit" className="sendform" onClick={handleSubmit}>
          Send
        </button>
        <i className="fas fa-user" id="login-btn" onClick={handleLogin} />
      </form>
      <div className="loginform">
        <h3>Bạn đang ẩn danh !</h3>
        <button type="button" className="btn" onClick={handleLogin}>
          Đăng nhập ngay
        </button>
      </div>
    </div>
  );
}
