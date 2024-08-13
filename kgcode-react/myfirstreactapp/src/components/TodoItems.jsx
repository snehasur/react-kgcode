import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
      {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2023"/>
      <TodoItem todoName="Buy Bread" todoDate="4/10/2023"/> */}
    </div>
  );
};

export default TodoItems;
