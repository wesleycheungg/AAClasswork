import React from "react";
import ReactDOM from "react-dom"
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    ReactDOM.render(<h1>Todos App</h1>, content);
})