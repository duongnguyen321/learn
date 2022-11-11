import React from "react";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="login">Login</label>
        <input id="login" type={"email"} required />
        <label htmlFor="password">Password</label>
        <input id="password" type={"password"} required />
        <button type={"submit"}>Login</button>
      </form>
    </>
  );
}
