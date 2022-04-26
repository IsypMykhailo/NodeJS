import React from "react";
import MenuMain from "./MenuMain";

class Header extends React.Component {
    render(){
        return(
            <header>My site
                <MenuMain></MenuMain>
            </header>
        )
    }
};
export default Header;