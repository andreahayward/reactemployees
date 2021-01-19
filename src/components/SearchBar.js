import React from "react";
import "../index.css";

function SearchBar({handleSearchChange}) {
    return (
        <div className="searchbar">
            <form className="form-inline">
                <input
                className="form-control"
                type= "search"
                placeholder= "Search"
                aria-label="Search"
                onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    )
}

export default SearchBar;