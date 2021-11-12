export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as TodoApiUtil from "../util/todo_api_util";



const Util = {
    receiveTodos: (todos) => {
        return {
            type: RECEIVE_TODOS,
            todos
        };
    },

    receiveTodo: (todo) => {
        return {
            type: RECEIVE_TODO,
            todo
        }
    },

    removeToDo: (todo) => {
        return {
            type: REMOVE_TODO,
            todo
        }
    }
};

export const fetchTodos = () => {
    return (dispatch) => {
        return TodoApiUtil.fetchTodos()
        .then(todos => dispatch(Util.receiveTodos(todos)))
    }
}

export default Util;
