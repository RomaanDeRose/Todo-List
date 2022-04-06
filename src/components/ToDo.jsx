import { useContext } from "react";
import { TodoContext } from "../context/ToDoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ todo }) => {
  const { deleteToDo } = useContext(TodoContext);
  const { id, title } = todo;

  return (
    <div className="w-4/5 max-w-lg flex justify-between items-center mx-auto my-7 p-5 rounded-xl shadow-lg shadow-purple-500/40 bg-purple-500 text-white transition-all hover:scale-105">
      <h3 className="font-black capitalize text-xl">{title}</h3>
      <div>
        <FontAwesomeIcon
          className="cursor-pointer text-2xl mx-2"
          icon={faTrashCan}
          onClick={() => deleteToDo(id)}
        />
      </div>
    </div>
  );
};

export default ToDo;