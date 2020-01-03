import ReactDOM from "react-dom";

import React, { Component } from "react";

const modelroot = document.getElementById("signin-portal");

class Signinpopup extends Component {
  el = document.createElement("div");
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    modelroot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    modelroot.removeChild(this.el);
  };

  showAlert = () => {
    alert(
      "Hello " + this.state.username + " welcome to the hell HA..HA...HA..!"
    );
  };

  render() {
    return ReactDOM.createPortal(
      <div className="signin-popu">
        <button className="x-mark" onClick={this.props.onClose}>
          x
        </button>
        <form onSubmit={this.showAlert}>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.username}
            name="username"
            placeholder="Username"
          ></input>
          <br></br>
          <input
            type="password"
            onChange={this.changeHandler}
            value={this.state.password}
            name="password"
            placeholder="Password"
          ></input>
          <br></br>
          <button type="submit" className="signin-submit">
            Sign In
          </button>
        </form>
      </div>,
      this.el
    );
  }
}

export default Signinpopup;
