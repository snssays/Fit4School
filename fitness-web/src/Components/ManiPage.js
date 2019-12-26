import React, { Component } from 'react'
class ManiPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             password:"",
             confirmpassword:"",
             username:"",
             collegecode:"",
             flag:false
        }
        this.formsubmition = this.formsubmition.bind(this);
        //this.comparingpass = this.comparingpass.bind(this);
    }

    changeinthepass = (event)=>
    {
        this.setState(
            {
              password:event.target.value  
            }
        )
    }
    changeintheconfirpass = (event)=>
    {
        this.setState(
            {
              confirmpassword:event.target.value  
            }
    , this.comparingpass())
    }
    changeintheusername = (event)=>
    {
        this.setState(
            {
              username:event.target.value  
            }
        )
    }
    changeinthecollegecode = (event)=>
    {
        this.setState(
            {
              collegecode:event.target.value  
            }
        )
    }

    comparingpass=()=>
    {
        console.log("OUTSIDE:  "+this.state.password+"  "+ event.target.value);
        if (this.state.password!==event.target.value) {
           console.log("Inside  "+this.state.password+"  "+ event.target.value);
           this.setState( 
               {
                   flag:true
               }
           )
        }
        else
        {
            this.setState(
                {
                    flag:false
                })
        }
    }

    formsubmition(event)
    {
        
        alert(this.state.username + this.state.collegecode);
        event.preventDefault();
    }

    render() {
        
        return (
            <div className="MainPage">
                <div className="heading-h1">
                    <h1>One Stop for recriation iformation,
                    fitness classes,Neutrition track and
                    Live Sports Scores.</h1>
                </div>
                <div className="heading-h2">
                <h2> Register and have unltimate access to custom dashboard,
                    diet plans,redeem points and more.</h2>
                </div>
                <form className="registrationform" onSubmit={this.formsubmition}>
                    <div>
                    <input type="text" placeholder="Username"
                    value={this.state.username} onChange={this.changeintheusername}
                    ></input>
                    </div>
                    <div>
                    <input type="password" placeholder="Password"
                    value={this.state.password} onChange={this.changeinthepass}
                    ></input>
                    </div>
                    <div>
                    <input  className= {!this.state.flag? 'name' :'conditional'} type="password" placeholder="Confirm password"
                    value={this.state.confirmpassword} onChange={this.changeintheconfirpass}
                    ></input>
                    </div>
                    <div>
                    <input type="text" placeholder="College Code"
                    value={this.state.collegecode} onChange={this.changeinthecollegecode}
                    ></input>
                    </div>
                    <div>
                    <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ManiPage
