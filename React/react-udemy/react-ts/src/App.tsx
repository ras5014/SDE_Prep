import "./App.css";
import Todos from "./compoents/Todos";
import Todo from "./models/todo";
import NewTodo from "./compoents/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <div>
      <Todos items={todos} />
      <NewTodo />
    </div>
  );
}

export default App;
