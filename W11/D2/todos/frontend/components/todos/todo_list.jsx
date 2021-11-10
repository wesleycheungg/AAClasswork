// export default Todo() => <h3>Todo List goes here!</h3>
import React from "react";
import TodoListItem from "./todo_list_item";
const TodoList = (props) => {
  return (
    <div>
      <h3>Todo List!</h3>
      <ul>
        {
          props.todos.map((todo) => {
            return <TodoListItem  key={todo.id} todo={todo} />
          })
        }
      </ul>
    </div>
  )
    
    
};

export default TodoList;