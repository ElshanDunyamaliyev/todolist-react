import { useRef } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const todoInput = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredTodo = todoInput.current.value;
    if (enteredTodo.trim().length < 1) {
      return;
    }
    props.onAddTodos({ text: enteredTodo });

    todoInput.current.value = "";
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" ref={todoInput} />
      <button className="addBtn" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
