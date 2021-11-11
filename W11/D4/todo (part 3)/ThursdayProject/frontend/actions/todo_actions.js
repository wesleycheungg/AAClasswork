export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";



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

export default Util;
