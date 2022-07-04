import React from "react";
import ListItems from "./ListItems";
import Todos from "./Todos";

class AddListComponent extends React.Component {
  constructor(props) {
    super(props);
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

export default AddListComponent;
