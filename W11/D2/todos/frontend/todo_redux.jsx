import React from "react";
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Util from "./actions/todo_actions"
import { receiveSteps, receiveStep, removeStep} from "./actions/step_actions"

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    ReactDOM.render(<h1>Todos App</h1>, content);
    const store = configureStore();
    window.store = store;
    window.receiveTodos = Util.receiveTodos;
    window.receiveTodo = Util.receiveTodo;
    window.removeToDo = Util.removeToDo;

    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
})