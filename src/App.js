import React, { Component } from "react";
import TodoForm from "./Components/todoForm";

class App extends Component {
  render() {
    return (
      <center>
        <div className="container">
          <h1>User Registration List App</h1>
          <TodoForm />
        </div>
      </center>
    );
  }
}

export default App;
