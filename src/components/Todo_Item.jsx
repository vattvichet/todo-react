import style from "./todo_item.module.css";
export default function TodoItem({ item, todoList, setTodoList }) {
  function onRemove() {
    setTodoList(todoList.filter((todo) => todo.title !== item.title));
  }
  function onDone() {
    console.log("item: ", todoList);
    setTodoList(
      todoList.map((todo) =>
        todo.title === item.title
          ? { ...todo, isDone: !todo.isDone }
          : { ...todo, isDone: todo.isDone }
      )
    );
  }
  return (
    <div className={style.container}>
      <h3 className={item.isDone === false ? style.title : style.doneTitle}>
        {item.title}
        <span>
          <button className={style.deleteButton} onClick={onRemove}>
            x
          </button>
          <button className={style.doneButton} onClick={onDone}>
            o
          </button>
        </span>
      </h3>
    </div>
  );
}
