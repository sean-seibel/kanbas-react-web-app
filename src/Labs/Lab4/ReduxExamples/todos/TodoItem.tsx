import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const activeTodo = useSelector((state: any) => state.todosReducer).todo;
  //alert(`active todo = ${JSON.stringify(activeTodo)}`);
  const dispatch = useDispatch();

  return (
    <li
      key={todo.id}
      className={`list-group-item p-2 ${
        activeTodo.id === todo.id ? "active" : ""
      }`}
    >
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        className="float-end btn btn-danger"
      >
        Delete
      </button>
      <button
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        className="float-end btn btn-primary mx-2"
      >
        Edit
      </button>
      {todo.title}
    </li>
  );
}
