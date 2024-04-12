import { Component } from 'react'

class UserClass extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            Contact: 9523563253,
            count:0
        }
    }   

    render(){
        return (
        <div className='user-card'>
            <h2>Name: {this.props.name}</h2>
            <h3>Contact: {this.state.Contact}</h3> 
            <h3>Count : {this.state.count}</h3>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                });
            }}>+1</button>
        </div>
        );
    }
}

export default UserClass;