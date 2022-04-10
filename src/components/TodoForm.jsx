import React, { useContext } from "react";
import { TodoContext } from "../context/ToDoContext";

function TodoForm({ checkNewTodo }) {
  const { newToDo, handleToDoChange } = useContext(TodoContext);

  return (
    <form action="" className="w-4/5 mx-auto max-w-sm font-medium">
      <input
        value={newToDo}
        type="text"
        className="w-full bg-transparent font-medium mt-1 mb-4 py-3 px-3 border-4 border-purple-500 rounded-2xl text-1xl placeholder-purple-500/50 transition-all focus:outline-none"
        placeholder="Agenda una tarea..."
        onChange={handleToDoChange}
        required
      />
      <button
        className="bg-purple-500 text-white shadow-purple-500/40 mt-2 p-3 rounded-xl shadow-lg transition-all hover:shadow-purple-600/40 hover:bg-purple-600 active:scale-95"
        onClick={checkNewTodo}
      >
        Agregar tarea
      </button>
    </form>
  );
}

export default TodoForm;
