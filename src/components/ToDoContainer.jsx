import React, { useContext } from "react";
import { TodoContext } from "../context/ToDoContext";
import ToDo from "./ToDo";

function ToDoContainer({ toDos }) {
  const { showToDoIncomplete } = useContext(TodoContext);

  return (
    <div>
      {toDos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
      <p className="font-bold text-xl mt-2 mb-6">
        Te quedan{" "}
        <span className="font-extrabold text-4xl mx-1">
          {showToDoIncomplete()}
        </span>{" "}
        Tareas por hacer!
      </p>
    </div>
  );
}

export default ToDoContainer;
