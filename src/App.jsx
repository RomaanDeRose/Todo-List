import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { toastError } from "./services/services";
import { TodoContext } from "./context/ToDoContext";
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
      <form action="" className="w-4/5 mx-auto max-w-sm font-medium">
        <input
          value={newToDo}
          type="text"
          className="w-full bg-transparent font-medium mt-1 mb-4 py-3 px-3 border-4 border-purple-500 rounded-2xl shadow-lg text-1xl placeholder-purple-500/50 transition-all focus:outline-none shadow-purple-500/30"
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
