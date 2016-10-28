import React from 'react' // imports react and children below
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// variables
var createBtn = document.querySelector('#createBtn')
var inputField = document.querySelector('#inputField')

// Event listeners for input box and button

createBtn.addEventListener('click', getInputValue)
inputField.addEventListener('keypress', createEnterKey)

// functions
function getInputValue() {
    // console.log(inputField.value)
    var createdObject = {}
    // var date = new Date
    createdObject.title = inputField.value
    todos.unshift(createdObject)
    renderView(todos)
    // console.log(todos)
}

function createEnterKey(event) {
    if(event.key === 'enter') {
        getInputValue()
    }
}
// creates rendering machine for React
// function renderView(todo) {
window.renderView = function(data) {
    ReactDOM.render(
        <Todos data={data} />,
        document.getElementById('todoList'))
}

// renders the page per above
renderView(todos)
