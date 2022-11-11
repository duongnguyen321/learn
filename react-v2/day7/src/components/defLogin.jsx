import React from "react";
class Deflogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
  }
  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();

    let email = this.state.email;
    let password = this.state.password;
    const data = {
      email: email,
      password: password,
    };

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    };

    fetch("https://unicode.vn/api/login.php", option)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-6">
              <h1>Login</h1>
              <form onSubmit={this.handleLogin}>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email..."
                    defaultValue={this.state.email}
                    onChange={this.handleChangeEmail}
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password..."
                    defaultValue={this.state.password}
                    onChange={this.handleChangePassword}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Deflogin;
