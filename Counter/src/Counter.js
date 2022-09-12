import React, { Component } from 'react'

//Counter Class Component Start here
class Counter extends Component{
    //Contructor of the Counter Class Component
    constructor(props)
    {
        super(props);
        this.state = {
            number : 0
        }
    }
    //End of Constructor of the class Component

    //increment function
    increment = ()=>{
        this.setState({number : this.state.number+1});
    }
    //End of Increment Function

    //Decrement Function
    decrement = ()=>{
        this.setState({number : this.state.number-1});
    }
    //End of Decrement Function

    //Neutral Function 
    neutral = ()=>{
        this.setState({number : 0});
    }
    //End of Neutral Function

    render(){
        return(
    <div className="App center">

        <div className="counter">
        <h1>React Counter</h1>
        <p id="display_counter" className="center">{this.state.number}</p>
        <button id="increase" onClick={this.increment}>Increase</button>
        <button id="decrease" onClick={this.decrement}>Decrease</button>
        <button id="neutral" onClick={this.neutral}>Neutral</button>
     
     </div>
    </div>
        )
    }
}
// End of Counter Component

export default Counter;