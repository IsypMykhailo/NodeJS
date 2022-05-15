import React from "react";

class MyArray extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //myArray: ["first", "second"]
            myArray: JSON.parse(localStorage.getItem('myArray')) || []
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.getMyArray = this.getMyArray.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onAdd(ev){
        const state = this.state;
        state.myArray.push(this.state.myVal)
        // eslint-disable-next-line
        this.state.myVal = '';
        localStorage.setItem('myArray', JSON.stringify(state.myArray));
        this.setState(state);
    }

    onDelete(ev){
        let state = this.state;
        state.myArray.splice(ev.target.value,1);
        localStorage.setItem('myArray', JSON.stringify(state.myArray));
        this.setState(state);
    }

    onUpdate(ev){
        let state = this.state;
        state.myArray.splice(ev.target.value, 1, this.state.inputUpdate);
        // eslint-disable-next-line
        this.state.inputUpdate = '';
        localStorage.setItem('myArray', JSON.stringify(state.myArray));
        this.setState(state);
    }

    onInputChange(ev){
        const state = this.state;
        const name = ev.target.name;
        state[name] = ev.target.value;
        localStorage.setItem('myArray', JSON.stringify(state.myArray));
        this.setState(state);
    }

    getMyArray(strFilter){
        const state = this.state;
        if (strFilter.length === 0) { return state.myArray }
        return state.myArray.filter(el => {
            return el.name.includes(strFilter)
        })
    }

    render() {
        const strFilter = '';
        let myArray = this.getMyArray(strFilter);
        return (
            <div>
                <h2>My Array</h2>
                <ul>
                    {
                        myArray.map((el,i)=>{
                            return(
                                <li key={'arEl_' + i}> {el}
                                    <button value={i} onClick={this.onDelete}> - index </button>
                                    <input name='inputUpdate' onChange={this.onInputChange}></input>
                                    <button value={i} onClick={this.onUpdate}> update </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <input name='myVal' onChange={this.onInputChange}></input>
                    <input type="button" onClick={this.onAdd} value="Add"></input>
                </div>
            </div>
        )

    }
};

export default MyArray