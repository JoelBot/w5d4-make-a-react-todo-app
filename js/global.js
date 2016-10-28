import React from 'react' // imports react and children below
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// creates rendering machine for React
// function renderView(todo) {
window.renderView = function(todo) {
    ReactDOM.render(
        <Todos data={todo} />,
        document.getElementById('todoList'))
}

// renders the page per above
renderView(Todos)
