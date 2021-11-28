import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            contact_no: "",
            gender: "",
            city: "",
            nationality: "" 
          
        }
        this.fname=this.fname.bind(this);
        this.lname=this.lname.bind(this);
        this.email=this.email.bind(this);
        this.password=this.password.bind(this);
        this.contact_no=this.contact_no.bind(this);
        this.gender=this.gender.bind(this);
        this.city=this.city.bind(this);
        this.nationality=this.nationality.bind(this);
        this.submitInfo=this.submitInfo.bind(this);
 }
 fname=(event)=>{
    this.setState({fname: event.target.value})
 }
 lname=(event)=>{
    this.setState({lname: event.target.value})
 }
email=(event)=>{
    this.setState({email: event.target.value})
 }
 password=(event)=>{
    this.setState({password: event.target.value})
 }
contact_no=(event)=>{
    this.setState({contact_no: event.target.value})
 }
 gender=(event)=>{
    this.setState({gender: event.target.value})
 }
 city=(event)=>{
    this.setState({city: event.target.value})
 }
 nationality=(event)=>{
    this.setState({nationality: event.target.value})
 }
 submitInfo=(e)=>{
     e.preventDefault();
     const requestOptions={
         method: 'POST',
         headers: {
             'Content-Type':'application/json'
         },
         body: JSON.stringify({
             
             fname: this.state.fname,
             lname: this.state.lname,
            email: this.state.email,
             password: this.state.password,
             contact_no: this.state.contact_no,
            gender: this.state.gender,
            city: this.state.city,
            nationality: this.state.nationality
         })
     };
     fetch("http://localhost:8080/saved",requestOptions)
     .then(res=>{
        alert(res)
         if(res.status == 200)
         {
             console.log(res);
            alert("reg sucessful");
            this.props.history.push("/login");

         }
         else{
             alert("reg Failed");
         }
     });
 }
 render(){
     return(
        <div
        style={{
        backgroundImage: `url("/7.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize:"cover",width:'1260px',height:'600px',color:'white'
        }}>
         <div>
             <h1>Registration Page</h1> <br/> <br/>
             <form onSubmit={this.submitInfo}>
                 <lable>Enter First Name: </lable>
                 <input type="text" value={this.state.fname} onChange={(event)=>{this.fname(event)}}/> <br/> <br/>
                 

                 <lable>EnterLast Name: </lable>
                 <input type="text" value={this.state.lname} onChange={(event)=>{this.lname(event)}}/> <br/> <br/>

                 <lable>Enter Email: </lable>
                 <input type="text" value={this.state.email} onChange={(event)=>{this.email(event)}}/> <br/> <br/>
                 

                 <lable>Enter Password: </lable>
                 <input type="text" value={this.state.password} onChange={(event)=>{this.password(event)}}/> <br/> <br/>
                 

                 <lable>Enter Contact No: </lable>
                 <input type="text" value={this.state.contact_no} onChange={(event)=>{this.contact_no(event)}}/> <br/> <br/>
                 
                 <label htmlFor="gender">Select Your Gender : </label>
                                                <div className="form-check form-check-inline rd">
                                                    <input required className="form-check-input" type="radio" id="Male" name="gender" value="Male" onChange={(event) => { this.gender(event) }} />
                                                    <label className="form-check-label" htmlFor="Male">Male</label>&nbsp;&nbsp;&nbsp;

                                                    <input required className="form-check-input" type="radio" id="Female" name="gender" value="Female" onChange={(event) => { this.gender(event) }} />
                                                    <label className="form-check-label" htmlFor="Female">Female</label>
                                                </div>
                                                <div className="form-check form-check-inline rd">

                                                </div>
                                                <br></br>
                 
                 <lable>Enter City: </lable>
                 <input type="text" value={this.state.city} onChange={(event)=>{this.city(event)}}/> <br/> <br/>
                 
                 <lable>Enter Nationality: </lable>
                 <input type="text" value={this.state.nationality} onChange={(event)=>{this.nationality(event)}}/> <br/> <br/>
                 <button type="submit">Submit</button>
                 
                 
                 
             </form>
         </div>
         </div>
     )
 }
 }
export default Register;


   