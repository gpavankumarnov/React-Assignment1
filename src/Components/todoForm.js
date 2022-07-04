import React from "react";

import ListItems from "./ListItems";
import Todos from "./Todos";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],

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
    e.preventDefault();

    if (
      this.state.currentTask.fname !== "" &&
      this.state.currentTask.lname !== ""
    ) {
      console.log(this.state.currentTask);

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
    );
  }
}

export default TodoForm;
