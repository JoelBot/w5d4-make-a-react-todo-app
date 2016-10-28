import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (todo) => {
    const TodoItems = todo.data.map((todo, i) => {
        return <Todo data={todo} key={i} />
    })

    return <div>
        <h1>ToDO List:</h1>
        {TodoItems}
    </div>
}

export default Todos
