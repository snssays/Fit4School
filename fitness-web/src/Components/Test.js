import React, { Component } from 'react'
import LoadImage from "./Gymbackgroundimage.jpg";
import '../index.css';
import {Grid,Row,Col} from 'react-bootstrap';
class Test extends Component {
    render() {
        return (
               <Grid>
                   <Row className="show-grid">
                    <Col xs={4} md ={3}>
                    <p> MAnudeep</p>
                    </Col>
                    <Col xs={4} md ={3}>
                    <p> MAnudeep</p>
                    </Col>
                    <Col xs={4} md ={3}>
                    <p> MAnudeep</p>
                    </Col>
                   </Row>
               </Grid>

        );
    }
}

export default Test
