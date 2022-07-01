import React from "react";

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListOfItems: this.props.items,
    };
    this.setUpdate = this.setUpdate.bind(this);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedState");
  //   return {
  //     ListOfItems: props.items,
  //   };
  // }
  componentDidUpdate() {
    console.log("componenet Update mount");
    this.setState({
      ListOfItems: this.props.items,
    });
  }

  setUpdate(ele, key) {
    debugger;

    let todoList = [...this.state.ListOfItems];
    console.log(this.state.ListOfItems);
    console.log(todoList);
    console.log(ele.target.value);
    const index = todoList.findIndex((i) => i.key === key);
    console.log(index);
    const newObj = {
      fname: todoList[index].fname,
      lname: todoList[index].lname,
      key: key,
    };

    if (ele.target.name === "fname") {
      newObj.fname = ele.target.value;
      // console.log(todoList.splice(0));
    }
    if (ele.target.name === "lname") {
      newObj.lname = ele.target.value;
    }
    console.log(todoList);
    console.log(newObj);

    todoList.splice(index, 1, newObj);
    console.log(todoList);
    this.setState({
      ListOfItems: todoList,
    });
    console.log(this.state.ListOfItems);
  }

  //After getting all list of items from add button then we are storing in one variable.
  render() {
    //Iterating each and storing in one div.

    //This listItems will contain all values.

    return (
      <div>
        {this.props.items.map((item, index) => {
          //Here i am getting each inputs 1. pavankumar 2.chand kumar
          //I am iterating each
          return (
            <div className="list" key={item.key}>
              {/* <p>{index + 1}</p> */}
              {/* Now i have two input fields, when i click then those should be editable. */}
              <p>
                <input
                  type="text"
                  value={item.fname}
                  name="fname"
                  // id={item.key}
                  onChange={(e) => {
                    this.setUpdate(e, item.key);
                  }}
                  // onChange={(ele) => this.props.setUpdate(ele, item.key)}
                ></input>
                <input
                  type="text"
                  value={item.lname}
                  id={item}
                  name="lname"
                  // onChange={(ele) => this.props.setUpdate(ele, item.key)}
                  onChange={(e) => {
                    this.setUpdate(e, item.key);
                  }}
                ></input>

                <button onClick={() => this.props.deleteItem(item.key)}>
                  Remove
                </button>
                <button
                  // onClick={() => this.props.updateItem(item.key)}
                  onClick={() => this.props.updateItem(item.key)}
                >
                  Edit
                </button>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ListItems;
