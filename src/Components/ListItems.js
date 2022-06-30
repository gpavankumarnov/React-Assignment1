import React from "react";

class ListItems extends React.Component {
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
                  // onChange={(e) => {
                  //   this.props.updateItem(e.target.value, item.key);
                  // }}
                  onChange={(ele) => this.props.setUpdate(ele, item.key)}
                  // this.props.setUpdate(ele.target.value, item.key)
                ></input>
                <input
                  type="text"
                  value={item.lname}
                  id={item}
                  name="lname"
                  onChange={(ele) => this.props.setUpdate(ele, item.key)}
                ></input>

                <button onClick={() => this.props.deleteItem(item.key)}>
                  Remove
                </button>
                <button onClick={() => this.props.updateItem(item.key)}>
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
