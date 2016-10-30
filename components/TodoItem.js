import React, { Component } from 'react' // Ask what this is if you remember to
// nothing else to import because this is the children

const Todo = (props) => <div className="row todo-item">
    <div className="col-sm-12">
    <h3>{props.data.title}</h3>
    <p className="lead">
    Created On {props.data.date}
    </p>
    </div>
    </div>

export default Todo
