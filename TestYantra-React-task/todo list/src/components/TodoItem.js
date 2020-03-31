import React, { Component } from "react";

export default class TodoItem extends Component {
  state = {
    isComplete: false
  }
  complete = (e) => {
    this.setState({
      isComplete: e
    })
  }

  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <>
        {this.state.isComplete ? <li style={{ backgroundColor: 'green' }} className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <h6 ><strike>{title}</strike></h6>
          <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fas fa-pen" />
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash" />
            </span>
          </div>
        </li> : <li onClick={() => this.complete(true)} className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6 >{title}</h6>
            <div className="todo-icon">
              <span className="mx-2 text-success" onClick={handleEdit}>
                <i className="fas fa-pen" />
              </span>
              <span className="mx-2 text-danger" onClick={handleDelete}>
                <i className="fas fa-trash" />
              </span>
            </div>
          </li>}
      </>
    );
  }
}
