import React, { Component } from 'react'
// nothing else to import because this is the children

const Todo = (todo) => <div className="row todo-item">
    <div className="col-sm-12">
    <h3>{todo.data.title}</h3>
    <p className="lead">
        Published On {todo.data.date}
    </p>
    <span className="small">Author: {todo.data.author}</span>
    </div>
    </div>

export default Todo
