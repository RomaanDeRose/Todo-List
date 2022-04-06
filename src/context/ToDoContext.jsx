import { useState, createContext } from "react";

const TodoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [toDo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const handleToDoChange = (e) => setNewToDo(e.target.value);

  const handleNewToDo = (e) => {
    e.preventDefault();
    newToDo.trim() === ""
      ? console.log("Tarea vacia!")
      : setToDo([
          ...toDo,
          { title: newToDo, id: Math.random() * 1000000, completed: false },
        ]);
    setNewToDo("");
  };

  const deleteToDo = (id) => {
    const toDos = [...toDo];
    const filterToDos = toDos.filter((todo) => todo.id !== id);
    setToDo(filterToDos);
  };

  const showToDoIncomplete = () => {
    const allToDos = [...toDo];
    const filterToDos = allToDos.filter((todo) => todo.completed === false);
    return filterToDos.length;
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
