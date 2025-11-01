import React ,{Component} from "react";
class Header extends Component{
    render(){
        return(
            <header className="header">
                <h1>ShopEasy</h1>
                <input  type="search"
                 placeholder="Search products..."
                 className="search-box"
                />
            </header>
        )
    }
}

export default Header