import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
  const [text, setText] = useState(props.edit ? props.edit.content : "");
  const [check, setCheck] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.edit) {
      props.onSubmit(text);
    } else {
      props.addTodo(text);
    }
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            required
            placeholder="Update a todo"
            className="todo-input edit "
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={inputRef}
          />
          <button className="todo-button edit" type="submit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            required
            placeholder="Add a todo"
            className="todo-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={inputRef}
          />
          <button className="todo-button" type="submit">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
