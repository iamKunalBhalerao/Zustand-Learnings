import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import useTodoStore from "./store/todoStore";

const App = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      <div className="w-full h-screen bg-slate-200 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 font-[gilroy]">
          Zustand Todo App
        </h1>
        <TodoForm />
        {todos.length !== 0 ? (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <h2 className="text-xl text-blue-400">You Have No Todos Yet!</h2>
        )}
      </div>
    </>
  );
};

export default App;
