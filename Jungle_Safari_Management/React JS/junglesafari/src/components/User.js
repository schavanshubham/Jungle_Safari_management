import React from 'react';

export class User extends React.Component
{
   
        constructor(props) {
        super(props)
       // alert(this.props.match.params.pkg_id)
        this.state = {

            pkg_id: "",
            time_slot_id: "",
            visit_date: "",
            no_of_adults: "",
            no_of_children: "",
            Time_slot: [],
            time_slot_id: 0,
            packages: [],
            pkg_id: 0,
            sp:0
           
        }
        this.setState({sp:this.props.match.params.pkg_id})
      //  let res = this.menu.value;
         this.pkg_id=this.pkg_id.bind(this);   
        this. time_slot_id=this. time_slot_id.bind(this);
        this.visit_date=this.visit_date.bind(this);
        this.no_of_adults=this.no_of_adults.bind(this);
        this.no_of_children=this.no_of_children.bind(this);
        this.timeslotid = this.timeslotid.bind(this);
        this.packageid = this.packageid.bind(this);
       
 }
 pkg_id=(event)=>{
    this.setState({pkg_id: event.target.value})
 }

 time_slot_id=(event)=>{
    this.setState({time_slot_id: event.target.value})
 }
 visit_date=(event)=>{
    this.setState({visit_date: event.target.value})
 }
 no_of_adults=(event)=>{
    this.setState({no_of_adults: event.target.value})
 }
 no_of_children=(event)=>{
    this.setState({no_of_children: event.target.value})
 }
 timeslotid=(e)=>{
    this.setState({time_slot_id: e.target.value})
 }
 packageid=(e)=>{
    this.setState({pkg_id: e.target.value})
 }
 componentDidMount=()=>{
    fetch("http://localhost:8080/timeslot")
    .then(resp => resp.json())
    .then(data => this.setState({Time_slot: data}))

  /*  fetch("http://localhost:8080/packageinfo")
    .then(resp => resp.json())
    .then(data => this.setState({packages: data}))*/
   
   // alert(this.state.sp)
}

 submitInfo=(e)=>{
     e.preventDefault();
     alert(this.props.match.params.pkg_id)
     const requestOptions={
         method: 'POST',
         headers: {
             'Content-Type':'application/json'
         },
         body: JSON.stringify({
             u_id:JSON.parse( localStorage.getItem("loggedin")).u_id,
             pkg_id: this.props.match.params.pkg_id,
            timslot_id: this.state.time_slot_id,
            vdate: this.state.visit_date,
            adults: this.state.no_of_adults,
            children: this.state.no_of_children
            
         })
     };
     fetch("http://localhost:8080/bookingsave",requestOptions)
     .then(res=>{
         
         if(res.status == 200)
         {
             console.log(res);
            alert("Booking sucessful");
            this.props.history.push("/bookingsave");

         }
         else{
             alert("Booking Failed");
         }
     });
 }
 render() {
     return(
        <div>
             <div
            style={{
            backgroundImage: `url("/9.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize:"cover",width:'1260px',height:'600px',color:'white'
            }}>
             <h1>Booking Form</h1> <br/> <br/>
             <form onSubmit={this.submitInfo}>
             <div>
            Select Timeslot :
            <select name="time" onChange={(e)=>{this.timeslotid(e)}}>
             {
                this.state.Time_slot.map(time => {
               return(<option value={time.time_slot_id}>{time.time_slot_name}</option>)
             })
             }
            </select><br/>
             </div>
            <br/>
          {/*  <div>
                Select Package :
                <select name="packagee" onChange={(e)=>{this.packageid(e)}}>
                    {
                        this.state.packages.map(packagee => {
                            return(<option value={packagee.pkg_id}>{packagee.pkg_name}</option>)
                        })
                    }
                </select><br/>
                <p></p>
            </div>
                */}
            <br/>

          {/*  Select date:
            <div id="cal">
            <>
            <Calendar />
             </>
             </div>
        
          */}

    

 
<lable>Select date : </lable>
<input type="date" value={this.state.visit_date} onChange={(event)=>{this.visit_date(event)}}/><br/><br/>

                 
                 <lable>Enter Number of Adults: </lable>
                 <input type="number" value={this.state.no_of_adults} onChange={(event)=>{this.no_of_adults(event)}}/> <br/> <br/><br/>
                 
                 <lable>Enter Number of Children: </lable>
                 <input type="number" value={this.state.no_of_children} onChange={(event)=>{this.no_of_children(event)}}/> <br/> <br/><br/>
   
                 <button type="submit" id="button">Submit</button>
                 
                 
                 
             </form>
             </div>
         </div>
         
     )
 }
 }

export default User;