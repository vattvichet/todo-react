import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
}
