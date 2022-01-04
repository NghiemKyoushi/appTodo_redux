import React from "react";
import TodoForm from "./TodoForm";
import Todo from './Todo';
export default function TodoApp({todos, addTodo,deleteTodo, updateTodo,completeTodo}) {

    return (
        <div>
        <TodoForm addTodo={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} completeTodo={completeTodo}/>
        </div>
    )
    
}