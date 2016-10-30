import React, { Component } from 'react'
import TodoItem from './TodoItem'

var myStorage = localStorage

const Todos = (props) => {
    // console.log(props)
    _.sortBy(props ["title"])
    const TodoItems = props.data.map((todo, i) => {
        // console.log(todo)
        // myStorage.setItem('title:' , {todo})
        return <TodoItem data={todo} key={i} />
    })
console.log(TodoItems)
    // return <div>
    //     {TodoItems}
    // </div>
    return <ul className="list-group">
        <h1>Count of Todo Items: {props.data.length}</h1>
        {TodoItems}
    </ul>
}

// console.log(myStorage)
export default Todos
