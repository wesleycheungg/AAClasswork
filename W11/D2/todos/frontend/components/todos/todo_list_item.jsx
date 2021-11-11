import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo)
  }

  toggleStatus(e) {
    console.log("toggling....")
    e.preventDefault();
    this.props.todo.done = !this.props.todo.done
    console.log(this.props.todo.done);
    this.props.receiveTodo(this.props.todo);
  }
  render() {
    return (
      <div>
        <li>Title: {this.props.todo.title}</li>
        <button onClick={this.handleDelete}>DELETE</button>
        <button onClick={this.toggleStatus}>{this.props.todo.done ? "Undo": "Done"}</button>
      </div>
      
    )
  }
}





export default TodoListItem;