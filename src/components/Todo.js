import React from "react";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
// import { editTodo } from "../reducers/todo";
import TodoForm from "./TodoForm";
export default function Todo({ todos, deleteTodo, updateTodo,completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    content: "",
  });

  const submitUpdate = value => {
    updateTodo({id: edit.id, content: value})
    setEdit({
        id: null,
        content: ''
    }) 
}
  if(edit.id) {
    return <TodoForm edit={edit} onSubmit ={submitUpdate}/>;
  }
  return (
    <div>
      { todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div onClick={()=> completeTodo(todo.id)}>{todo.content}</div>
          <div className="icons">
            <RiCloseCircleLine
              className="delete-icon"
              onClick={() => deleteTodo(todo.id)}
            />
            <TiEdit
              className="edit-icon"
              onClick={() => setEdit({ id: todo.id, content: todo.content })}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
