import React from "react";

class MyArray extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myArray: ["first", "second"]
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(ev){
        const state = this.state;
        state.myArray.push(this.state.myVal)
        this.state.myVal = '';
        this.setState(state);
    }

    onDelete(ev){
        
    }

    onUpdate(ev){

    }

    onInputChange(ev){
        const state = this.state;
        const name = ev.target.name;
        state[name] = ev.target.value;
        this.setState(state);
    }

    render() {
        return (
            <div>
                <h2>My Array</h2>
                <ul>
                    {
                        this.state.myArray.map((el,i)=>{
                            return(
                                <li key={'arEl_' + i}> {el} </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <input name='myVal' onChange={this.onInputChange}></input>
                    <input type="button" onClick={this.onAdd}>Add</input>
                </div>
            </div>
        )

    }
};

export default MyArray