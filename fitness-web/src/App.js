import React, { Component } from "react";
import "./App.css";
import HomeNavbar from "./Components/HomeNavbar";
import HomePageNavbar from "./Components/HomePageNavbar";
import LastContainer from "./Components/LastContainer";
import MainPage from "./Components/MainPage";
import MiddleContainer from "./Components/MiddleContainer";
import SignInPopUp from "./Components/Signinpopup";

export const LoginContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignInPopUp: false,
      login: true
    };
  }

  toggleLoginStatus = () => {
    console.log(
      `Inside toggle login status - value is ${!this.toggleLoginStatus}`
    );
    this.setState({
      login: !this.state.login
    });
  };

  toggleShowSignInPopUp = () => {
    console.log(
      `Inside toggle Show SignIn PopUp - Value is ${!this
        .toggleShowSignInPopUp}`
    );
    this.setState({
      showSignInPopUp: !this.state.showSignInPopUp
    });
  };

  render() {
    const { showSignInPopUp, login } = this.state;
    const backGroundForSignInPopUp = showSignInPopUp
      ? { opacity: 0.6, overflow: "hidden" }
      : { opacity: 1 };
    return (
      <div className="App" style={backGroundForSignInPopUp}>
        <LoginContext.Provider
          value={{
            loginStatus: login,
            toggleLoginStatus: this.toggleLoginStatus
          }}
        >
          {login ? (
            <HomePageNavbar />
          ) : (
            <React.Fragment>
              <HomeNavbar toggleSignInPopUp={this.toggleShowSignInPopUp} />
              <MainPage />
              {showSignInPopUp ? (
                <SignInPopUp
                  onClose={this.toggleShowSignInPopUp}
                  className="popingup"
                />
              ) : null}
              <MiddleContainer />
              <LastContainer />
            </React.Fragment>
          )}
        </LoginContext.Provider>
      </div>
    );
  }
}

export default App;
