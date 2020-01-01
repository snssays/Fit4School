import React, { Component } from 'react'
import App from '../App';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <mycontext.Consumer>
                I am In Home
                </mycontext.Consumer>
            </React.Fragment>
        )
    }
}

export default Home
