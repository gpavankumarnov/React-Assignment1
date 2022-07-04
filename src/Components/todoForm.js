import React from "react";

import ListItems from "./ListItems";
import Todos from "./Todos";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    //State is for storing the data and accessing inside the html via jsx syntax.
    this.state = {
      //item array had created.
      items: [],

      //currentItem object we have created.
      // state.counter = this.state.counter + 1;
      currentTask: {
        fname: "",
        lname: "",
        key: "",
      },
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput = (e) => {
    if (e.target.name === "fname") {
      this.setState({
        currentTask: {
          ...this.state.currentTask,
          fname: e.target.value,
          key: Date.now(),
        },
      });
    }

    if (e.target.name === "lname") {
      this.setState({
        currentTask: {
          ...this.state.currentTask,
          lname: e.target.value,
          key: Date.now(),
        },
      });
    }
  };

  addItem = (e) => {
    //PreventDefault is for when click on add button that shouldn't be refresh the page.
    e.preventDefault();
    //printing the all setState values after given input
    // const newItem = this.state.currentTask;

    // console.log(newItem);
    //Checking if inputValues not equal to null then adding the values to newItems.
    //So on click on add button then setting the inputValues to empty values.
    //Now after click on add button the values should be stored in one list. --ListItems.js file
    if (
      this.state.currentTask.fname !== "" &&
      this.state.currentTask.lname !== ""
    ) {
      console.log(this.state.currentTask);
      //initially you wont have values in the items []
      // console.log(...this.state.items);
      //storing in new arrays newItems
      // const newItems = [...this.state.items, this.state.currentTask];
      // console.log(newItems);
      this.setState({
        items: [...this.state.items, this.state.currentTask],

        currentTask: {
          fname: "",
          lname: "",
          key: "",
        },
      });
    }
  };

  deleteItem(key) {
    console.log(this.state.items);
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  setUpdate(data1) {
    console.log(data1);
  }

  updateItem(data) {
    console.log("data ---->" + data);
    this.setState({
      items: data,
    });
  }

  render() {
    return (
      <div className="form">
        <ListItems
          items={this.state.items}
          setUpdate={(data1) => this.setUpdate(data1)}
          deleteItem={this.deleteItem}
          updateItem={(data) => this.updateItem(data)}
        />
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.currentTask.fname}
            onChange={this.handleInput}
            placeholder="Enter First Name"
            name="fname"
          ></input>
          &nbsp;
          <input
            type="text"
            value={this.state.currentTask.lname}
            onChange={this.handleInput}
            placeholder="Enter Last Name"
            name="lname"
          ></input>
          &nbsp;
          <button
            id="add"
            disabled={
              this.state.currentTask.fname === "" ||
              this.state.currentTask.lname === ""
            }
          >
            Add
          </button>
        </form>
        <Todos todoItems={this.state.items} />
      </div>

      // <AddListComponent />
    );
  }
}

export default TodoForm;
