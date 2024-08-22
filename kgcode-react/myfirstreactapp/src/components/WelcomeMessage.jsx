import React from "react";
import style from "./WelcomeMessage.module.css";


import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage() {  
  //const todoItems = useContext(TodoItemsContext);
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.length === 0 && <p className={style.welcome}>Enjoy your day</p>;
}

export default WelcomeMessage;
