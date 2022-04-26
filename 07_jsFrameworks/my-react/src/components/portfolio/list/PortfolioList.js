import React from "react";
import PortfolioListItem from "./PortfolioListItem";
import PortfolioListCreateItem from "./PortfolioListCreateItem";

export default class PortfolioList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            portfolios: [
                {id:"1", name:"First Work"},
                {id:"2", name:"Second Work"}
            ],
            isLoad: true,
            error: null
        }
    }

    render(){
        if(this.state.error) return this.renderError()
        if(!this.state.isLoad) return this.renderLoading()
        return(
            <div>
                <h2>Portfolio List</h2>
                <ul>
                    {this.state.portfolios.map(p=>{
                        return(<PortfolioListItem portfolio={p} key={'portfolioListItem_'+p.id}/>)
                    })}
                </ul>
                <PortfolioListCreateItem></PortfolioListCreateItem>
            </div>
        )
    }

    /**
     * Если загрузка данных еще не выполнена
     */
    renderLoading(){
        return (
            <div> loading </div>
        )
    }

    /**
     * Если в процессе произошла ошибка
     */
    renderError(){
        return (
            <div> Error {this.state.error} </div>
        )
    }
}