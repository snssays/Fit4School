import React, { Component } from 'react'
import App from '../App';
import MyProvider, { MycontextConsumer } from './MyProvider'
import { Button } from 'react-bootstrap';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
               <MycontextConsumer>
                   {(context)=>
                   (
                       <React.Fragment>
                    <p>I am in the Homepage</p>
                   <Button onClick={context.loginstate}>ClickHere</Button>
                   </React.Fragment>
                   )}
               </MycontextConsumer>
            </React.Fragment>
        )
    }
}

export default Home
