import React, { Component } from 'react'
// nothing else to import because this is the children

const Todo = (props) => <div className="row todo-item">
    <div className="col-sm-12">
    <h3>{props.data.title}</h3>
    <p className="lead">
    Published On {props.data.date}
    </p>
    <span className="small">Author: {props.data.author}</span>
    </div>
    </div>

export default Todo
