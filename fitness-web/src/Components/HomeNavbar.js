import React, { Component } from "react";
class HomeNavbar extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       planb: false
  //     };
  //   }

  //   tester = () => {
  //     console.log("HEY");
  //     this.setState({
  //       planb: !this.state.planb
  //     });
  //   };

  render() {
    return (
      <div className="HomepageNav">
        <span className="logo">FITNESS</span>
        <span className="signin">
          <button onClick={this.props.toggleSignInPopUp}>Sign in</button>
        </span>
      </div>
    );
  }
}

export default HomeNavbar;
