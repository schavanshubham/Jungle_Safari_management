import React from 'react';
export class Admin extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            pkg_id: "",
            pkg_name: "",
            validity_date: "",
            pkg_price_frgn: "",
            pkg_price_ind: "",
            max_people: "",
            description: ""
           
         }
         this.pkg_id=this.pkg_id.bind(this);
         this.pkg_name=this.pkg_name.bind(this);
         this.validity_date=this.validity_date.bind(this);
         this.pkg_price_frgn=this.pkg_price_frgn.bind(this);
         this.pkg_price_ind=this.pkg_price_ind.bind(this);
         this.max_people=this.max_people.bind(this);
         this.description=this.description.bind(this);
    }
    pkg_id=(event)=>{
        this.setState({pkg_id: event.target.value})
     }
     pkg_name=(event)=>{
        this.setState({pkg_name: event.target.value})
     }
     validity_date=(event)=>{
        this.setState({validity_date: event.target.value})
     }
     pkg_price_frgn=(event)=>{
        this.setState({pkg_price_frgn: event.target.value})
     }
     pkg_price_ind=(event)=>{
        this.setState({pkg_price_ind: event.target.value})
     }
     max_people=(event)=>{
        this.setState({max_people: event.target.value})
     }
     description=(event)=>{
        this.setState({description: event.target.value})
     }
     submitInfo=(e)=>{
        e.preventDefault();
        const requestOptions={
            method: 'Post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                pkg_id: this.state.pkg_id,
                pkg_name: this.state.pkg_name,
                validity_date: this.state.validity_date,
                pkg_price_frgn: this.state.pkg_price_frgn,
                pkg_price_ind: this.state.pkg_price_ind,
                max_people: this.state.max_people,
                description: this.state.description
               
            })
        };
        fetch("http://localhost:8080/addpack",requestOptions)
        .then(res=>{
            if(res.status == 200)
            {
                console.log(res);
               alert("reg sucessful");
             //  this.props.history.push("/login");
   
            }
            else{
                alert("reg Failed");
            }
        });
    }



    render()
    {
        return(
            <div
            style={{
            backgroundImage: `url("/13.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize:"cover",width:'1260px',height:'600px',color:'white'
            }}>
            
            <div>
               <br/>
                <h1> Add New Package </h1> <br/> <br/>
                <form onSubmit={this.submitInfo}>
                 <lable>Enter Package ID : </lable>
                 <input type="text" value={this.state. pkg_id} onChange={(event)=>{this. pkg_id(event)}}/> <br/> <br/>
                 

                 <lable>Enter Package Name : </lable>
                 <input type="text" value={this.state.pkg_name} onChange={(event)=>{this.pkg_name(event)}}/> <br/> <br/>

                 <lable>Enter Validity Date : </lable>
                <input type="date" value={this.state.validity_date} onChange={(event)=>{this.validity_date(event)}}/><br/><br/>
                 

                 <lable>Enter Package Price for Foreigner : </lable>
                 <input type="text" value={this.state.pkg_price_frgn} onChange={(event)=>{this.pkg_price_frgn(event)}}/> <br/> <br/>
                 

                 <lable>Enter Package Price for Indian : </lable>
                 <input type="text" value={this.state. pkg_price_ind} onChange={(event)=>{this. pkg_price_ind(event)}}/> <br/> <br/>
                 
                 <lable>Enter Maximun No of People : </lable>
                 <input type="text" value={this.state.max_people} onChange={(event)=>{this.max_people(event)}}/> <br/> <br/>
                 
                 <lable>Enter Description: </lable>
                 <input type="text" value={this.state.description} onChange={(event)=>{this.description(event)}}/> <br/> <br/>
                 
                
                 <button type="submit">Submit</button>
                 </form>
                 
                 
            </div>
            </div>
        )
       
    }
}
export default Admin;