import React from "react";
import '../assets/css/pages/about.css'
import PortfolioList from "../components/portfolio/list/PortfolioList";

export default class PagePortfolios extends React.Component {
    render(){
        return(
            <div>
                <h1>All portfolios</h1>
                <PortfolioList></PortfolioList>
            </div>
        )
    }
}