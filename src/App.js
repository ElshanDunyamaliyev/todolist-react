import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import Card from "./UI/Card";

const dummy_todos = [
  { text: "Make breakfast" },
  { text: "Sleep" },
  { text: "Go to school" },
  { text: "Watch movie" },
];

function App() {
  const [todos, setTodos] = useState(dummy_todos);

  const onAddTodos = (newTodo) => {
    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };

  return (
    <Card>
      <h1>ToDo App</h1>
      <TodoForm onAddTodos={onAddTodos} />
      <Todos todos={todos} />
    </Card>
  );
}

export default App;
