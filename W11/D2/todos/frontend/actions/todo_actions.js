export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";



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
    }
};

export default Util;
