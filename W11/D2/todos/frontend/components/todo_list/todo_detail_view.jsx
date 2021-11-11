
import React from "react";
class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo)
  }

  render() {
    return (
      <div>
        <p>Body: {this.props.todo.body}</p>
        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    )
  }
}

export default TodoDetailView;