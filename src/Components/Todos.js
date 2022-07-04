import React from "react";

class Todos extends React.Component {
  render() {
    // const ListOfTodoItems = this.props.todoItems;
    // console.log(ListOfTodoItems);

    return (
      <div>
        <table className="list">
          <thead>
            <tr>
              <th>
                <b>SLNO</b>
              </th>

              <th>
                <b>FirstName </b>
              </th>

              <th>
                <b>LastName </b>
              </th>
            </tr>
          </thead>

          {/* {Object.entries(todoItems).length>0 && this.props.todoItems?.map((item, index) => { */}
          {this.props.todoItems.map((item, index) => {
            return (
              <tbody key={item.key}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
//null
//api calls in sox
//Circuit switching with &&  ****
// && - localStorage
// || - first cond
//Add nullishCo-ehsive in js.

//typechecks
export default Todos;
