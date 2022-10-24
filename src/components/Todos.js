import NewTodo from "./NewTodo";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return <NewTodo text={todo.text} key={Math.random().toString()} />;
      })}
    </div>
  );
};

export default Todos;
