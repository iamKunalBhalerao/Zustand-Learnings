import { useState } from "react";
import useTodoStore from "../store/todoStore";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  };
  return (
    <>
    <div className="p-4 bg-white flex gap-2 shadow rounded-lg">
      <form onSubmit={submitHandler}>
        <input
        className="w-96 outline-0 p-2 mr-2 focus:outline-1 focus:outline-blue-500 rounded-md"
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Todo here..."
        />
        <button type={"submit"} className="py-2 px-4 bg-blue-500 cursor-pointer hover:bg-blue-600 outline-0 rounded-md text-white">Add Todo</button>
      </form>
          </div>
    </>
  );
};

export default TodoForm;
