import { useContext } from "react";
import { TodoContext } from "./context/ToDoContext";
import ToDo from "./components/ToDo";

function App() {
  const { toDo, newToDo, handleNewToDo, handleToDoChange, showToDoIncomplete } =
    useContext(TodoContext);

  return (
    <div className="bg-gray-900 min-h-screen text-center text-purple-500 py-1">
      <h1 className="text-5xl pt-3 mb-3 font-black">Todo List</h1>
      <form action="" className="w-4/5 mx-auto max-w-sm font-medium">
        <input
          value={newToDo}
          type="text"
          className="w-full bg-transparent font-medium mt-1 mb-3 py-3 px-3 border-4 border-purple-500 rounded-2xl shadow-lg text-1xl placeholder-purple-500/60 transition-all focus:outline-none shadow-purple-500/30"
          placeholder="Agenda una tarea..."
          onChange={handleToDoChange}
          required
        />
        <button
          className="bg-purple-500 text-white shadow-purple-500/40 my-2 p-3 rounded-xl shadow-lg transition-all hover:shadow-purple-600/40 hover:bg-purple-600 active:scale-95"
          onClick={handleNewToDo}
        >
          Agregar tarea
        </button>
      </form>
      {toDo.length === 0 ? (
        <p className="font-bold text-lg mt-4">No hay tareas agendadas!</p>
      ) : (
        <div>
          {toDo.map((todo) => (
            <ToDo key={todo.id} todo={todo} />
          ))}
          <p className="font-bold text-xl mt-2 mb-6">
            Te quedan{" "}
            <span className="font-extrabold text-3xl">
              {showToDoIncomplete()}
            </span>{" "}
            Tareas por hacer!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
