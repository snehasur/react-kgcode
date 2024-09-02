import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
//pure function for reducer
const todoItemsReducer = (currentTodoItems ,action) => {
  let newTodoItems= currentTodoItems;
  if (action.type === "NEW_ITEM") {
     newTodoItems = [
      ...currentTodoItems, 
      { name: action.payload.name, date: action.payload.date }
    ];
    
  }else if(action.type === "DELETE_ITEM"){
     newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
}

export const TodoItemsContextProvider= ({children}) => {
  const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);
  const addNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
    const newItemAction ={
      type:'NEW_ITEM',
      payload:{
        name:itemName,
        date:itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoItemsName) => {
  
    const deleteItemAction = {
      type:'DELETE_ITEM',
      payload:{
        itemName:todoItemsName
      }
    };
    dispatchTodoItems(deleteItemAction);
  };

  return ( 
    <TodoItemsContext.Provider value={{todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem
     }}>
    {children}
    </TodoItemsContext.Provider>
  )};
// export default TodoItemsContextProvider