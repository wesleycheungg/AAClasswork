

export const allToDos = (state) => {
    let toDosArray = Object.values(state.todos);
    return toDosArray;
}

export const stepsByTodoId = (state, todoId) => {
    let stepsArray = Object.values(state.steps);
    return stepsArray.filter(element => element.todo_id === todoId)
}