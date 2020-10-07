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
            <td
              id={this.props.id}
              className=" text-center container centerelement pl-5 pr-2 m-2  "
            >
              {this.props.toDoList}
            </td>

            <td className="container-fluid rightelement">
              <button
                onClick={this.props.onRemove}
                className="rounded-pill btn btn-sm p-auto btn-outline-danger"
              >
                Remove
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default inputElement;
