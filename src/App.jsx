import { useContext } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { toastError } from "./services/services";
import { TodoContext } from "./context/ToDoContext";
import TodoForm from "./components/TodoForm";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const { toDo, newToDo, handleNewToDo, handleToDoChange } =
    useContext(TodoContext);

  const checkNewTodo = (e) => {
    e.preventDefault();
    newToDo.trim() !== ""
      ? handleNewToDo()
      : toastError("Por favor, rellena el campo!");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-center text-purple-500 py-1">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, type: "sping" }}
        className="text-5xl pt-4 mb-4 font-black"
      >
        Todo List
      </motion.h1>
      <TodoForm checkNewTodo={checkNewTodo} />
      {toDo.length === 0 ? (
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="font-bold text-lg md:text-xl mt-4 md:mt-6"
        >
          No hay tareas agendadas!
        </motion.p>
      ) : (
        <ToDoContainer toDos={toDo} />
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 1500,
        }}
      />
    </div>
  );
}

export default App;
