import Todo from "./components/Todo";
import TodoHeader from "./components/Header";
import style from "./app.module.css";
function App() {
  return (
    <div className={style}>
      <TodoHeader />
      <Todo />
    </div>
  );
}

export default App;
