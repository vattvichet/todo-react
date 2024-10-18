import { useState } from "react";

export default function TodoForm({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({ title: "", isDone: false });
  function onChange(value) {
    setTodo({ ...todo, title: value, isDone: false });
  }
  function onAdd(e) {
    e.preventDefault();
    if (!todo.title) {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({ title: "", isDone: false });
  }
  return (
    <form action="" onSubmit={onAdd}>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
