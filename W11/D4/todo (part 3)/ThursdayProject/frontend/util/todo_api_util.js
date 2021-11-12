
export const fetchTodos = () => {
    return $.ajax({
        method: "get",
        url: "/api/todos"
    })
}