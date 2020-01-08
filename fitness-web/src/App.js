import React, { Component } from "react";
import "./App.css";
import HomeNavbar from "./Components/HomeNavbar";
import HomePageNavbar from "./Components/HomePageNavbar";
import LastContainer from "./Components/LastContainer";
import MainPage from "./Components/MainPage";
import MiddleContainer from "./Components/MiddleContainer";
import SignInPopUp from "./Components/Signinpopup";

export const isUserAuthenticatedContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignInPopUp: false,
      isUserAuthenticated: true
    };
  }

  toggleisUserAuthenticatedStatus = () => {
    console.log(
      `Inside toggle isUserAuthenticated status - value is ${!this
        .toggleisUserAuthenticatedStatus}`
    );
    this.setState({
      isUserAuthenticated: !this.state.isUserAuthenticated
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
    const { showSignInPopUp, isUserAuthenticated } = this.state;
    const backGroundForSignInPopUp = showSignInPopUp
      ? { opacity: 0.6, overflow: "hidden" }
      : { opacity: 1 };
    return (
      <div className="App" style={backGroundForSignInPopUp}>
        <isUserAuthenticatedContext.Provider
          value={{
            isUserAuthenticatedStatus: isUserAuthenticated,
            toggleisUserAuthenticatedStatus: this
              .toggleisUserAuthenticatedStatus
          }}
        >
          {isUserAuthenticated ? (
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
        </isUserAuthenticatedContext.Provider>
      </div>
    );
  }
}

export default App;
