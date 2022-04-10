import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { toastError } from "./services/services";
import { TodoContext } from "./context/ToDoContext";
import ToDoForm from "./components/ToDoForm";
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
      <h1 className="text-5xl pt-4 mb-4 font-black">Todo List</h1>
      <ToDoForm checkNewTodo={checkNewTodo} />
      {toDo.length === 0 ? (
        <p className="font-bold text-lg md:text-xl mt-4 md:mt-6">
          No hay tareas agendadas!
        </p>
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
