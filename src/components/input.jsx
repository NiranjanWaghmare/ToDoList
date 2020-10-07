import React, { Component } from "react";

class inputElement extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="offset-2 col-8 input-group">
          <input
            onChange={this.props.onValueChange}
            type="text"
            className="form-control"
            placeholder="Add List Item"
            aria-label="Recipient's username with two button addons"
            aria-describedby="button-addon4"
          />
          <div className="input-group-append" id="button-addon4">
            <button
              type="submit"
              onClick={this.props.onAdd}
              className="btn btn-link "
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-plus-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default inputElement;
