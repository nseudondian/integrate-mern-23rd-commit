import React, { Component } from 'react';
import axios from 'axios'
import './index.css'


class App extends Component {
    constructor(){
        super()
        this.state ={
            fullname: "",
            username: "",
            email: "",
            password: ""
        }
        this.changeFname = this.changeFname.bind(this)
        this.changeUname = this.changeUname.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.submitted = this.submitted.bind(this)
    }
    changeFname(event){
        this.setState({
            fullname:event.target.value
        })
    }
    changeUname(event){
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    submitted(event){
        event.preventDefault()
        const reg = {
            fullname : this.state.fullname,
            username : this.state.username,
            email : this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:4000/api/routes/signup", reg)
            .then(response => console.log(response.data))

            this.setState({
                fullname : "",
                username: "",
                email: "",
                password: ""
            })

    }
    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.submitted}>
                            <h3 className="text-info text-center">SIGN UP</h3>
                            <input type="text" placeholder="Full Name" 
                            onChange={this.changeFname} value={this.state.fullname}
                            className="form1" />
                            <input type="text" placeholder="Username" 
                            onChange={this.changeUname} value={this.state.username}
                            className="form1" />
                            <input type="email" placeholder="Email" 
                            onChange={this.changeEmail} value={this.state.email}
                            className="form1" />
                            <input type="password" placeholder="Password" 
                            onChange={this.changePassword} value={this.state.password}
                            className="form1" />
                            <div className="btndiv">
                                <input type="submit" className="btn btn-info" value="submit" />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default App;