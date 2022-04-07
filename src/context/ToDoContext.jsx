import { useState, createContext } from "react";
import { toastSuccess } from "../services/services";

const TodoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [toDo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const handleToDoChange = (e) => setNewToDo(e.target.value);

  console.log(toDo);
  const handleNewToDo = () => {
    setToDo([
      ...toDo,
      { title: newToDo, id: (Math.random() * 1000000).toFixed(2) },
    ]);
    toastSuccess(`Tarea agendada con éxito!`);
    setNewToDo("");
  };

  const deleteToDo = (id) => {
    const toDos = [...toDo];
    const filterToDos = toDos.filter((todo) => todo.id !== id);
    setToDo(filterToDos);
  };

  const showToDoIncomplete = () => {
    const allToDos = [...toDo];
    return allToDos.length;
  };

  return (
    <TodoContext.Provider
      value={{
        toDo,
        newToDo,
        handleNewToDo,
        handleToDoChange,
        deleteToDo,
        showToDoIncomplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext };
export default ToDoContextProvider;
