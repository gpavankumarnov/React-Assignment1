import React from "react";

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayList: props.items,
      ownUpdate: true,
    };

    this.setUpdate = this.setUpdate.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("calling getDerivedStateFromProps");
    if (state.ownUpdate) {
      return {
        ArrayList: state.ArrayList,
        ownUpdate: false,
      };
    } else if (props.items !== state.ArrayList) {
      return {
        ArrayList: props.items,
      };
    }

    return null;
  }

  /////////////////////////

  setUpdate(ele, key) {
    // console.log(this.state.ListItems);
    let newArray = [...this.state.ArrayList];
    console.log("ListItems");
    const index = newArray.findIndex((i) => i.key === key);
    console.log(index);
    const newObj = {
      fname: newArray[index].fname,
      lname: newArray[index].lname,
      key: key,
    };

    if (ele.target.name === "fname") {
      newObj.fname = ele.target.value;
      // console.log(todoList.splice(0));
    }
    if (ele.target.name === "lname") {
      newObj.lname = ele.target.value;
    }
    // console.log(ListOfItems);
    console.log(newObj);

    newArray.splice(index, 1, newObj);

    console.log(newArray);
    this.setState({
      ArrayList: newArray,
      ownUpdate: true,
    });
  }

  // }

  ////////////////////

  updateItem(ele, key) {
    console.log(this.state.ArrayList);

    this.props.updateItem(this.state.ArrayList);
  }

  //After getting all list of items from add button then we are storing in one variable.
  render() {
    //Iterating each and storing in one div.

    //This listItems will contain all values.

    return (
      <div>
        {this.state.ArrayList.map((item, index) => {
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
                  onClick={() => this.updateItem(item.key)}
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
