import type { Todo } from "../store/todoStore";
import useTodoStore from "../store/todoStore";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <>
      <div className="w-2xl p-2 flex items-center justify-between bg-white mt-2 shadow rounded-lg">
        <div className="flex gap-4 px-4">
          <input
          className="form-checkbox w-5 h-5 rounded text-green-500"
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className="text-lg text-black fnt-medium">{todo.title}</span>
        </div>
        <button
          className="p-2 bg-red-300 hover:bg-red-400 hover:text-white cursor-pointer rounded-lg"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
