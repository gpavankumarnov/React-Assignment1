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
    this.setUpdate = this.setUpdate.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  // handleInput = (e) => {
  //   this.setState({
  //     currentTask: {
  //       fname: e.target.value,
  //       key: Date.now(),
  //     },
  //   });
  // };
  // InputHandle = (l) => {
  //   this.setState({
  //     currentTask: {
  //       lname: l.target.value,
  //       key: Date.now(),
  //     },
  //   });
  // };

  handleInput = (e) => {
    if (e.target.name === "fname") {
      // if (e.target.value.length >= 4) {
      //   this.setState({ disabled: false });
      // } else {
      //   this.setState({ disabled: true });
      // }

      this.setState({
        currentTask: {
          ...this.state.currentTask,
          fname: e.target.value,
          key: Date.now(),
        },
      });
    }

    if (e.target.name === "lname") {
      // if (e.target.value.length >= 4) {
      //   this.setState({ disabled: false });
      // } else {
      //   this.setState({ disabled: true });
      // }
      this.setState({
        currentTask: {
          ...this.state.currentTask,
          lname: e.target.value,
          key: Date.now(),
        },
      });
    }

    // if (e.target.value.length >= 4) {
    //   this.setState({
    //     disabled: false,
    //   });
    // }
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
      debugger;
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
    console.log(this.state.items);
    // this.deleteItem = this.deleteItem.bind(this);
  };
  deleteItem(key) {
    debugger;
    console.log(this.state.items);
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  setUpdate(ele, key) {
    debugger;
    const todoList = [...this.state.items];
    const index = todoList.findIndex((i) => i.key === key);
    const newObj = {
      lname: todoList[index].lname,
      fname: todoList[index].fname,
      key: key,
    };
    if (ele.target.name === "fname") {
      newObj.fname = ele.target.value;
    }
    if (ele.target.name === "lname") {
      newObj.lname = ele.target.value;
    }
    const spliced = todoList.splice(index, newObj);
    this.setState({
      items: spliced,
    });
  }
  // const items = this.state.items;
  // items.map((ele) => {
  //   return (ele.text = text);
  // });

  // if (i.key === key) {
  //   i.text = text;
  // }

  // console.log(text);

  // console.log(text);
  // this.setState({
  //   items: items,
  // });

  /*
  updateItem(text, key) {
    debugger;
    console.log(this.state.items);
    const items = this.state.items;
    items.map((item) => {
      //check if item.key is === key that is provided in our function
      //And then change the text to updated value.
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
*/
  render() {
    return (
      <div className="form">
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
          setUpdate={this.setUpdate}
        ></ListItems>
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
