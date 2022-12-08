import React from 'react'

class StateExample extends React.Component{
    state={
        name:"ReactJS",year:2013,
        employees:[
            {id:1,name:"one"},
            {id:2,name:"two"}
        ]
    }
    render(){
        return(
            <div>
                <p>{this.state.name}  {this.state.year}</p>
                {/*<p> 
                    {this.state.employees[0].id} &nbsp;
                    {this.state.employees[0].name}
                </p>
                <p>
                    {this.state.employees[1].id} &nbsp;
                    {this.state.employees[1].name}
                </p>*/}
                    {
                        this.state.employees.map((emp)=>(
                        <div>
                            <p>{emp.id}</p>
                            <p>{emp.name}</p>
                        </div>
                        ))
                    }
            </div>
        )
    }
}
export default StateExample