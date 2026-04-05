import "./todo.css";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
import TodoImage from "../../assets/react.svg";
import { useState } from "react";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewData = (name) => {
    setTodoList([...todoList, { id: Date.now(), name: name }]);
  };

  const deleteValue = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewData={addNewData} />
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteValue={deleteValue} />
      ) : (
        <div className="todo-image">
          <img className="logo" src={TodoImage} alt="" />
        </div>
      )}
    </div>
  );
};
export default ToDoApp;
