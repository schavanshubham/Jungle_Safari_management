import React from "react";
import { Link,Route } from "react-router-dom";
import User from "./User";
import "./Navbar.css";
import mystore from "./store";
export default class Navbar extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            flag: false
        }
    }
render(){
    mystore.subscribe(()=> {this.setState({flag: mystore.getState().loggedin})})



    return(
        
       <div>
        <nav className="navbar">
        <img src="lo.png" width="70" height="60px" />
            <h4 className="logo">&nbsp; Jungle Safari Management</h4>
            <ul className="nav-links">
            <span>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            </span>
            <span>
            <Link to="/about" className="about">
                <li>About</li>
            </Link>
            </span>
            <span>
            <Link to="/services" className="services">
                <li>Services</li>
            </Link>
            </span>
            <span>
            <Link to="/contact" className="contact">
                <li>Contact</li>
            </Link>
            </span>
            <span style={{display: this.state.flag?'none':'block'}} >
                <Link to="/Register" className="register">
                    <li>Register</li>
                </Link>
                </span>
                <span style={{display: this.state.flag?'none':'block'}} >
                <Link to="/login" className="login">
                    <li>Login</li>
                </Link>
                </span>
            <span style={{display: this.state.flag?'block':'none'}} >
            <Link to="/login" className="login">
                <li>Logout</li>
            </Link>
            </span>
           
           
            
            </ul>
        </nav>
        </div>
    
         
        
      
    )
}
}

