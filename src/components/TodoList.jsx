import TodoItem from "./Todo_Item";
export default function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
