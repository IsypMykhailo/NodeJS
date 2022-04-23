import React from "react";

class MyArray extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myArray: ["first", "second"]
        }
        //this.onInputChange = this.onInputChange.bind(this);
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
            </div>
        )

    }
};

export default MyArray