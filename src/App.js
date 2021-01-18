import './App.css';
import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  state = {
    employeeList: [],
  }



  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200").then((response) => {
      console.log(response)
      this.setState({
        employeeList: response.data.results
      })
      console.log(this.state.employeeList)
    })
  }

  render() {
  return (
    <div>
      {this.state.employeeList[100].email || null}
    </div>
  );
};
}

export default App;
