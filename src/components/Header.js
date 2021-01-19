import React, {Component} from "react";
import '../index.css';

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1>Employee Finder</h1>
                <p>All your employees in one spot!</p>
            </div>
        )
    }
}