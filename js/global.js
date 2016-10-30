import React from 'react' // imports react and children below
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// variables
// var todos = [] // testing the global variable array.  Keeping in seperate file todos.js for neatness.
var createBtn = document.querySelector('#createBtn')
var inputField = document.querySelector('#inputField')
var dateField = document.querySelector('#dateTimePicker')
var myStorage = localStorage

// some JQuery
// $(document).ready(function() {
//     $('#datetimepicker').data("DateTimePicker").FUNCTION()
// }

// Event listeners for input box and button

createBtn.addEventListener('click', getInputValue)
inputField.addEventListener('keypress', createEnterKey)

// functions
function getInputValue() {
    if (inputField.value != '') {
        var createdObject = {}
        // var createdItem = inputField.value
        // var itemDate = dateField.value
        createdObject.title = inputField.value
        createdObject.date = dateField.value
        todos.unshift(createdObject)
        // myStorage.setItem(createdObject)
        // this is duplicating todos, remove or choose this approach
        // todos.unshift({
        //     item: createdItem
        // })
        // renderView(todos)
        inputField.value = ''
        dateField.value = ''
        myStorage.setItem('name','test')
    }
    else {
        alert("Enter a value")
    }
    // var sortedTodos = _.sortBy(todos["title"])
    // console.log(sortedTodos)
renderView(todos)

}

function createEnterKey(event) {
    if(event.key === 'Enter') {
        getInputValue()
    }
}

// var sortedTodos = _.sortBy(todos["title"])
// console.log(sortedTodos)
// console.log(todos)
// _.sortBy(todos ["title"])
// console.log(todos)

// todos.sort()
// creates rendering machine for React
// function renderView(todo) {
function renderView(data) {
    ReactDOM.render(
        <Todos data={data} />,
        document.getElementById('todoList'))
    }

    // renders the page per above
