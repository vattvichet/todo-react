import { useState } from "react";

export default function TodoForm({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  function onChange(value) {
    setTodo(value);
  }
  function onAdd(e) {
    e.preventDefault();
    if (!todo) {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <form action="" onSubmit={onAdd}>
      <input
        type="text"
        value={todo}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
