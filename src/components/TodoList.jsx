import TodoItem from "./Todo_Item";
export default function TodoList({ todoList, setTodoList }) {
  return (
    <div>
      {todoList.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
