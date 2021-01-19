import React from "react";
import SearchBar from "../components/SearchBar";
import '../index.css';

function NavBar({handleSearchChange}){
    return (
        <nav className="navbar navbar-expand" id="navbar">
            <div className="navbar-collapse row" >
                <SearchBar handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    )
}

export default NavBar;