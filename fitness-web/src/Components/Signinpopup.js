
import ReactDOM from 'react-dom'

import React, { Component } from 'react'


const modelroot = document.getElementById('signin-portal')

class Signinpopup extends Component {
    el = document.createElement('div')
constructor(props) {
    super(props)
    
    this.state = {
         username:"",
         password:""
    }
}

passchange = ()=>
{
    this.setState({
        password:event.target.value
    })
    
}
namechange = ()=>
{
    this.setState({
    username:event.target.value
    })
}
    componentDidMount=()=>
    {
        modelroot.appendChild(this.el)
    }
    componentWillUnmount=()=>
    {
        modelroot.removeChild(this.el)
    }

    showalert = ()=>
    {
        alert("Hello "+this.state.username+" welcome to the hell HA..HA...HA..!")
    }
    
    render() {
        return ReactDOM.createPortal(
                <div className="signin-popu" >
                    <button className="x-mark" onClick={this.props.onClose}>x</button>
                    <form onSubmit={this.showalert}>
                        
                        <input type="text" onChange={this.namechange} value={this.state.username}
                        placeholder="Usernmae">
                        </input>
                        <br></br>
                        <input type="password"  onChange={this.passchange} value={this.state.password}
                        placeholder="password">
                        </input>
                        <br></br>
                        <button type="submit" className="signin-submit">Sign in</button>
                    </form>
            </div>, this.el,
        );
    }
}

export default Signinpopup

