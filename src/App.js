import React, { Component } from "react";
import "./styles.css";
import InputElement from "./components/input";
import ToDoList from "./components/toDoList";

class App extends Component {
  state = {
    toDoItem: "",
    toDoList: []
  };

  handleChange = (event) => {
    this.setState({ toDoItem: event.target.value });
  };

  handleSubmit = (event) => {
    if (this.state.toDoItem.length === 0) {
      event.preventDefault();
    } else {
      const { toDoList } = this.state;
      toDoList.push(this.state.toDoItem);
      this.setState({ toDoList });
      this.setState({ toDoItem: "" });
      event.preventDefault();
      event.target.reset();
    }
  };
 
  removeElement = (index) =>{
    const toDoList = this.state.toDoList
    toDoList.splice(index,1);
    this.setState({ toDoList });
  }
   
  render() {
    return (
      <div className="App">
        <h1>To Do List </h1>
        <InputElement
          onSubmit={this.handleSubmit}
          onValueChange={this.handleChange}
        />
        <hr className="ml-5 mr-5" />
        {this.state.toDoList.map((toDoList, index) => (
          <ToDoList onRemove={() => this.removeElement(index)} toDoList={toDoList} id={index} />
        ))}
      </div>
    );
  }
}
export default App;
