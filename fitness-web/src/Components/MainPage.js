import React, { Component } from "react";
class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      collegecode: "",
      flag: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  comparingPassword = e => {
    if (this.state.password !== e.target.value) {
      this.setState({
        flag: true
      });
    } else {
      this.setState({
        flag: false
      });
    }
  };

  formSubmission = e => {
    alert(`Form is submitted for ${this.state.username}`);
    e.preventDefault();
  };

  render() {
    return (
      <div className="MainPage">
        <div className="heading-h1">
          <h1>
            One Stop for recreation information, fitness classes,Nutrition track
            and Live Sports Scores.
          </h1>
        </div>
        <div className="heading-h2">
          <h2>
            Register and get ultimate access to custom dashboard, diet plans,
            redeem points and more.
          </h2>
        </div>
        <form className="registrationform" onSubmit={this.formSubmission}>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              className={!this.state.flag ? "name" : "conditional"}
              type="password"
              placeholder="Confirm password"
              onChange={this.comparingPassword}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="College Code"
              name="collegecode"
              value={this.state.collegecode}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MainPage;
