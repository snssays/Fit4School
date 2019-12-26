import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import Test1 from './Components/Test1'
import ManiPage from './Components/ManiPage';
import { Navbar,Container,Row,Col } from 'reactstrap';
import HomeNavbar from './Components/HomeNavbar';
import Backgroundportals from './Components/Backgroundportals';
import HomePageCarousel from './Components/HomePageCarousel';
import StoryCarousal from './Components/StoryCarousal';
import TestimonyCarousel from './Components/TestimonyCarousel';
import Test2 from './Components/Test2';
import Signinpopup from './Components/Signinpopup';
const style=
{
  margin: '1rem 0rem',
  padding: '0rem 0rem',
  
}
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         showsignin: false
    }
}
signinpopup =()=>
{
  console.log("In Singninpopu")
    this.setState(
        {
            showsignin:!this.state.showsignin
        }
    )
}
  render() {
    return (
      <div className="App" style={this.state.showsignin?{opacity:this.state.showsignin ? 0.6:1,overflow:'hidden'}:null}>
        <HomeNavbar onClose={this.signinpopup} ></HomeNavbar>
        <ManiPage></ManiPage>
        {
        this.state.showsignin ? (
        <Signinpopup onClose={this.signinpopup} className ="popingup"></Signinpopup> 
    ): null
        }
        
        <Container  className="can">
        <Row className="ram justify-contentcenter">
          <Col lg ={8} 
          md={6}
          sm={12}
          xs={12}
          style={style}>
          <div className="carousal info"> 
          <h1>
            Coming Up Events and Games.
          </h1>
          <h2>
            Register for Gym classes, intramurals, nutrisionist appointment and many more.
          </h2>
          </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12} style={style}>
          <div className="carousal"><HomePageCarousel></HomePageCarousel></div>
          </Col>
        </Row>
        </Container>
        <Container  className="can">
        <Row className="ram justify-contentcenter">
          <Col lg={4} md={6} sm={12} xs={12} style={style}>
          <div className="carousal"><Test2></Test2></div>
          </Col>
          <Col lg ={8} 
          md={6}
          sm={12}
          xs={12}
          style={style}>
          <div className="carousal info"> 
          <h1>
            Coming Up Events and Games.
          </h1>
          <h2>
            Register for Gym classes, intramurals, nutrisionist appointment and many more.
          </h2>
          </div>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
