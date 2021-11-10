import React from "react";





const TodoListItem = (props) => {

  const handleDelete = (e) => {
    e.preventDefault();
    this.props.removeTodo(props.todo)
  }

  const toggleStatus = (e) => {
    console.log("toggling....")
  }

  return (
    <div>
      <li>Title: {props.todo.title}</li>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={toggleStatus}>{}</button>
    </div>
    
  )
    
    
};

export default TodoListItem