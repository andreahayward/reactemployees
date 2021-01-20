import './App.css';
import './index.css';
import axios from "axios";
import React, { Component } from "react";
import AppHeader from "./components/Header.js";
import Table from "./components/Table.js"; 
import Navbar from "./components/NavBar";

class App extends Component {
  state = {
    employeeList: [],
    filteredEmployeeList: []
  }
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200").then((response) => {
      console.log(response)
      this.setState({
        employeeList: response.data.results,
        filteredEmployeeList: response.data.results
      })
      console.log(this.state.employeeList)
    })
  }
  handleSearchChange = (event) => {
    let filter = event.target.value;
    // create deep copy of list so we don't change any values using the filtered list 
    let filteredEmployeeList = JSON.parse(JSON.stringify(this.state.employeeList)); 
    // base case when search is empty, filter list = full list. 
    if(filter === ""){
      this.setState({filteredEmployeeList: filteredEmployeeList});
      return; 
    }
    
    // filter based on first name. 
    filteredEmployeeList = filteredEmployeeList.filter(function(employee){
      if(employee.name.first.toLowerCase().includes(filter.toLowerCase())){
        return true; 
      } else {
        return false; 
      }
    })
    this.setState({filteredEmployeeList: filteredEmployeeList});
  }
  render() {
  return (
    <div>
      <AppHeader />
      <Navbar handleSearchChange={this.handleSearchChange} />
      <Table headings={[{name:"Image", width:10}, {name:"Name", width:10}, {name:"Phone", width:10}, {name:"Email", width:10}, {name:"DOB", width:10}]} users={this.state.filteredEmployeeList} />
    </div>
  );
};
}
export default App;
