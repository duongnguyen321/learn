import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      msg: "",
      loginId: 0
    };
  }

  changeValue = (e) => {
    const data = { ...this.state };

    data[e.target.name] = e.target.value;

    this.setState(data);
  };

  handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const data = {
      email: email,
      password: password,
    };

    // let dataStr = `email=${email}&password=${password}`; //query string

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams(data).toString(),
    };

    fetch("https://unicode.vn/api/login.php", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {

          sessionStorage.setItem('loginId', response.data.id);
          
          this.props.render({
              loginId: response.data.id
          })
          
        } else if (response.status === "failed") {
          this.setState({
            msg: "Email hoặc mật khẩu không chính xác",
          });
        } else {
          this.setState({
            msg: "Vui lòng nhập email và mật khẩu",
          });
        }
      });
  };

  render() {
    return (
      <>
        
          <div className="row justify-content-center">
            <div className="col col-6">
              <h1>Login</h1>
              <form onSubmit={this.handleLogin}>
                {this.state.msg ? (
                  <div className="alert alert-danger text-center">
                    {this.state.msg}
                  </div>
                ) : (
                  ""
                )}
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email..."
                    onChange={this.changeValue}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password..."
                    onChange={this.changeValue}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        
      </>
    );
  }
}
