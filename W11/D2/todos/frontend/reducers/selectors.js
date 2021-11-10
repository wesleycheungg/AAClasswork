

export const allToDos = (state) => {
    let toDosArray = Object.values(state.todos);
    return toDosArray;
}