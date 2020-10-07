import React, { Component } from "react";

class inputElement extends Component {
  onCheck = (id) => {
    if (document.getElementById(id).hasAttribute("style")) {
      document.getElementById(id).removeAttribute("style");
    } else {
      document.getElementById(id).style = "text-decoration: line-through;";
    }
  };

  render() {
    return (
      <div className="container">
        <table className="">
          <tr>
            <td className="leftelement">
              <input
                className=""
                type="checkbox"
                onClick={() => this.onCheck(this.props.id)}
              />
            </td>
            <td id={this.props.id} className="center element pl-5 pr-2 m-2  ">
              {this.props.toDoList}
            </td>
            <td className="rightelement">
              <button
                onClick={this.props.onRemove}
                className="rounded-circle btn-sm pl-2 pr-2 ml-5 btn btn-outline-danger"
              >
                x
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default inputElement;
