import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Test2 from './Test2'

const modelroot = document.getElementById('model-root');
class Test1 extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount()
    {
        modelroot.appendChild(this.el)
    }

    componentWillUnmount()
    {
        modelroot.removeChild(this.el)
    }
    componentWillReceiveProps(nxtpops)
    {

    }
    

    render() {
        return ReactDOM.createPortal(
           this.props.children,this.el,
        );
    }
}

export default Test1
