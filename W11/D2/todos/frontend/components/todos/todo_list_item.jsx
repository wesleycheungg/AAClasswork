import React from "react";
import TodoDetailViewContainer from "../todo_list/todo_detail_view_container";
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false}
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
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

  toggleDetail(e) {
    e.preventDefault();
    console.log('toggling details...')
    this.setState({detail: !this.state.detail});
  }
  render() {
    if (this.state.detail) {
      return (
        <div>
          <li onClick={this.toggleDetail}>Title: {this.props.todo.title}</li>
          <TodoDetailViewContainer todo={this.props.todo}/>
          <button onClick={this.toggleStatus}>{this.props.todo.done ? "Undo": "Done"}</button>
        </div>
        
      )
    } else {
      return (
        <div>
          <li onClick={this.toggleDetail}>Title: {this.props.todo.title}</li>
          <button onClick={this.toggleStatus}>{this.props.todo.done ? "Undo": "Done"}</button>
        </div>)
    }
    
  }
}





export default TodoListItem;