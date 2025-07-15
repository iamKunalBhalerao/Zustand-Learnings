import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Todo {
  id: number | string;
  title: string;
  done: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), title, done: false }],
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);

export default useTodoStore;
