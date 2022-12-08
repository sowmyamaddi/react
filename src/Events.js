import {Component} from 'react'

class Events extends Component{
    state={
        username:"",
        password:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        console.log(this.state.username,this.state.password)

    }
    render(){
        return(
            <div>
                <input 
                    name="username"
                    onChange={this.handleChange}
                    
                    placeholder="Enter username"/><br/>
                <input
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Enter password"/><br/>
                    <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
export default Events