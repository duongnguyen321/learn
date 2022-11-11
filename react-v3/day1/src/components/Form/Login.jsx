import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state.form;
    if (this.ValidateEmail(email) === false) {
      this.setState({ errors: "Please enter a valid email address" });
    } else if (password.length <= 8) {
      this.setState({ errors: "Please enter a valid password" });
    } else {
      this.setState({
        form: {
          email: "",
          password: "",
        },
        errors: "",
      });
      console.log(email, password);
    }
  };
  handleChangeValue = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;
    this.setState({ form: data });
  };
  ValidateEmail = (email) => {
    if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <div className={"container"}>
        <form onSubmit={this.handleLogin}>
          <div className="input">
            <label htmlFor={"email"}>Email</label>
            <input
              type="text"
              id={"email"}
              name="email"
              onChange={this.handleChangeValue}
              value={this.state.form.email}
            />
          </div>
          <div className="input">
            <label htmlFor={"password"}>Password</label>
            <input
              type="password"
              id={"password"}
              name="password"
              onChange={this.handleChangeValue}
              value={this.state.form.password}
            />
          </div>
          <button type={"submit"}>Submit</button>
        </form>
        <h1>{this.state.errors}</h1>
      </div>
    );
  }
}

export default Login;
