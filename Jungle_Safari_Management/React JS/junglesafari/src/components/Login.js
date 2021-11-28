import React from 'react';
import mystore from './store';
export class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email: "",
            password: "",
            user: {},
            admin: {},
            loginerror:""
           
        }
    }
    handleChange=(e)=>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });
    }

    submitData=(e)=>{
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        }
        fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(resp => resp.json())
        .then(data => {
            
          
          /* if(data.length != 0)
            {

                const json = JSON.parse(data);
                
               /* alert (data)
                 if(data == "admin")
                this.props.history.push("/adminhome/");
                 else if(data == "user")
                 {
               mystore.dispatch({type: 'LOGGEDIN'});
                this.props.history.push("/userhome/");
                 }
                 alert(data)        
                 this.setState({user: json});
                 localStorage.setItem("loggedin", JSON.stringify(this.state.user));
                 mystore.dispatch({type: 'LOGGEDIN'});
                 this.props.history.push("/userhome/"); 
              
                 
              }*/
              //alert(data.u_type+" : "+data.u_id);
             
        if(data.u_id == 1)
        {
            this.setState({user: data});
            localStorage.setItem("loggedin", JSON.stringify(this.state.user));
            mystore.dispatch({type: 'LOGGEDIN'});
            this.props.history.push("/admindashbord/"); 
        }  
        else if(data.u_id != 1)
        {
           this.setState({user: data});
            localStorage.setItem("loggedin", JSON.stringify(this.state.user));
            mystore.dispatch({type: 'LOGGEDIN'});
            this.props.history.push("/packagedisp/");
        }    
        
else{
                this.setState({loginerror:<p>"Wrong ID/PASSWORD"</p> });
                 }
        });
    }
    render()
    {
        return(
            <div
            style={{
            backgroundImage: `url("/9.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize:"cover",width:'1260px',height:'600px',color:'white'
            }}>
            <div>
                <br/>
                <h1 id="loginheader">Login Page</h1><br/><br/>
                <form>
                    Enter Email : <input type="text" name="email" onChange={this.handleChange}/><br/><br/>
                    Enter Password : <input type="password" name="password" onChange={this.handleChange} /><br/><br/>
                    <input  type="submit" value="LOGIN" id="button" onClick={this.submitData} /> <br/>
                </form>
                <br/>
                <p>{this.state.user.u_id}</p>
                <p>{this.state.user.name}</p>
                <p>{this.state.loginerror}</p>
            </div>
            </div>
        );
    }
}
export default Login;