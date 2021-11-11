import { RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";
import { RECEIVE_TODO } from "../actions/todo_actions";


const initialState = {
        1: {
            id: 1,
            title: 'take a shower',
            body: 'and be clean',
            done: false
        }
  };
const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            let newToDos = {};
            for (let i = 0; i < action.todos.length; i++) {
                newToDos[action.todos[i].id] = action.todos[i];
            }
            return newToDos;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state;
    }
};

export default todosReducer;