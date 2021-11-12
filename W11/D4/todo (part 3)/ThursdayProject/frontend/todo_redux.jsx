import React from "react";
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Util from "./actions/todo_actions"
import { receiveSteps, receiveStep, removeStep} from "./actions/step_actions"
import Root from "./components/root"
import { allToDos } from "./reducers/selectors"
import {fetchTodos} from "./util/todo_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
   
    ReactDOM.render(<Root store={store} />, root);
    
    window.store = store;
    window.receiveTodos = Util.receiveTodos;
    window.receiveTodo = Util.receiveTodo;
    window.removeToDo = Util.removeToDo;

    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;

    window.allToDos = allToDos;

    window.fetchTodos = fetchTodos;
})