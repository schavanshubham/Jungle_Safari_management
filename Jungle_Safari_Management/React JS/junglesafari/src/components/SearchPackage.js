import React from 'react'
class SearchPackage extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            packages: [],
            pkg_id: 0
        }
        this.packageid = this.packageid.bind(this);
    }
    componentDidMount=()=>{
        fetch("http://localhost:8080/packageinfo")
        .then(resp => resp.json())
        .then(data => this.setState({packages: data}))
    }
    packageid=(e)=>{
        this.setState({pkg_id: e.target.value})
    }
    render(){
        return(
            <div>
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
        )
    }
    
}
export default SearchPackage;