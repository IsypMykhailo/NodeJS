import React from "react";

class MyArray extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myArray: ["first", "second"]
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputDelete = this.onInputDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onAdd(ev){
        const state = this.state;
        state.myArray.push(this.state.myVal)
        // eslint-disable-next-line
        this.state.myVal = '';
        this.setState(state);
    }

    onDelete(ev){
        const state = this.state;
        this.arrayRemove(state.myArray, this.state.myValDelete);
        // eslint-disable-next-line
        this.state.myValDelete = '';
        this.setState(state);
    }

    arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele !== value;
        });
    }

    onInputDelete(ev){
        const state = this.state;
        const name = ev.target.name;
        state[name] = ev.target.value;
        this.setState(state);
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
                    <input type="button" onClick={this.onAdd} value="Add"></input>
                </div>
                <div>
                    <input name='myValDelete' onChange={this.onInputDelete}></input>
                    <input type="button" onClick={this.onDelete} value="Delete"></input>
                </div>
            </div>
        )

    }
};

export default MyArray