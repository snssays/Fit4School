import React, { Component } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import Contact from './Contact'
import NoMatch from './NoMatch'
import styled from 'styled-components'

const styles = styled.div`
.navbar{
    background-color
}

`;

class HomePageNavbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Route component={NoMatch}></Route>
                        <Route path="/contactus" component={Contact}></Route>
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}

export default HomePageNavbar
