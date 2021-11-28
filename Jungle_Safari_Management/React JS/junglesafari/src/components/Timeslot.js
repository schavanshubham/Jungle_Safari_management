import React from 'react'
class Timeslot extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            Time_slot: [],
            time_slot_id: 0
        }
        this.timeslotid = this.timeslotid.bind(this);
    }
    componentDidMount=()=>{
        fetch("http://localhost:8080/timeslot")
        .then(resp => resp.json())
        .then(data => this.setState({Time_slot: data}))
    }
    timeslotid=(e)=>{
        this.setState({time_slot_id: e.target.value})
    }
    render(){
        return(
            <div>
                Select Timeslot :
                <select name="time" onChange={(e)=>{this.timeslotid(e)}}>
                    {
                        this.state.Time_slot.map(time => {
                            return(<option value={time.time_slot_id}>{time.time_slot_name}</option>)
                        })
                    }
                </select><br/>
                <p></p>
            </div>
        )
    }
    
}
export default Timeslot;