import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
// const TodoItems = ({ todoItems, onDeleteClick }) => {

//   return (
//     <div className={style.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoName={item.name}
//           todoDate={item.date}
//           onDeleteClick={onDeleteClick}
//         />
//       ))}
//     </div>
//   );
// };
//const TodoItems = ({ onDeleteClick }) => {
const TodoItems = () => {
  // const todoItems = useContext(TodoItemsContext);

  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const { todoItems ,deleteItem} = useContext(TodoItemsContext);
  console.log(`TodoItems from Context:`,todoItems);

  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          //onDeleteClick={onDeleteClick}
          onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
