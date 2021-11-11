import React from "react";
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Util from "./actions/todo_actions"
import { receiveSteps, receiveStep, removeStep} from "./actions/step_actions"
import Root from "./components/root"
import { allToDos } from "./reducers/selectors"

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const store = configureStore();
   
    ReactDOM.render(<Root store={store} />, content);
    
    window.store = store;
    window.receiveTodos = Util.receiveTodos;
    window.receiveTodo = Util.receiveTodo;
    window.removeToDo = Util.removeToDo;

    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;

    window.allToDos = allToDos;
})