import React, { useContext } from "react";
import { motion } from "framer-motion";
import { TodoContext } from "../context/ToDoContext";

function TodoForm({ checkNewTodo }) {
  const { newToDo, handleToDoChange } = useContext(TodoContext);

  return (
    <motion.form
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      action=""
      className="w-4/5 mx-auto max-w-sm font-medium"
    >
      <input
        value={newToDo}
        type="text"
        className="w-full bg-transparent font-medium mt-1 mb-4 py-3 px-3 border-4 border-purple-500 rounded-2xl text-1xl placeholder-purple-500/50 transition-all focus:outline-none"
        placeholder="Agenda una tarea..."
        onChange={handleToDoChange}
        autoFocus
        required
      />
      <button
        className="bg-purple-500 text-white shadow-purple-500/40 mt-2 p-3 rounded-xl shadow-lg transition-all hover:shadow-purple-700/40 hover:bg-purple-700 active:scale-95"
        onClick={checkNewTodo}
      >
        Agregar tarea
      </button>
    </motion.form>
  );
}

export default TodoForm;
