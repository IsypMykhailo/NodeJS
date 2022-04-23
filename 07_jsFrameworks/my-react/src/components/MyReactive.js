import React from "react";

class MyReactive extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            myName: "Mykhailo"
        }
    }

    onInputChange(ev){
        const state = this.state
        state.myName = ev.target.value;
        this.setState(state);
    }

    render() {
        return (
            <div>
                <h1>Привет, {this.state.myName}</h1>
                <input onChange={this.onInputChange.bind(this)}></input>
            </div>
        )

    }
};

export default MyReactive