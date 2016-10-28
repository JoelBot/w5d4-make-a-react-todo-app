import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    console.log(props)
    const TodoItems = props.data.map((todo, i) => {
        return <TodoItem data={todo} key={i} />
    })

    return <div>
        {/* <input id="inputField" type="text" placeholder="Add to-do..." />
        <button id="createBtn" type="button" className="btn btn-primary">Create</button> */}
        <h1>ToDO List:</h1>
        {TodoItems}
    </div>
}

export default Todos
