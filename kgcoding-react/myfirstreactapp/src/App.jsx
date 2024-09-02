import React, { useState, useReducer } from "react";
import Hello from "./Hello";
import Random from "./Random";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import style from "./components/App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import WelcomeMessage from "./components/WelcomeMessage";

import AddTodoForm from "./components/AddTodoForm";

import { TodoItemsContext } from "./store/todo-items-store";
import { TodoItemsContextProvider } from "./store/todo-items-store";
//pure function for reducer
// const todoItemsReducer = (currentTodoItems ,action) => {
//   let newTodoItems= currentTodoItems;
//   if (action.type === "NEW_ITEM") {
//      newTodoItems = [
//       ...currentTodoItems,
//       { name: action.payload.name, date: action.payload.date }
//     ];

//   }else if(action.type === "DELETE_ITEM"){
//      newTodoItems = currentTodoItems.filter(
//       (item) => item.name !== action.payload.itemName
//     );
//   }
//   return newTodoItems;
//}
function App() {
  // return <div>
  //   <h1>this is the best react course</h1>
  //   <Hello></Hello>
  //   <Random></Random>
  //   <Random></Random>
  // </div>

  //todo app
  // return <center classNameName="todo-container">
  //   <AppName/>
  //   <AddTodo/>
  //   <div classNameName="items-container">
  //   <TodoItem1/>
  //   <TodoItem2/>
  //   </div>
  // </center>

  //bharat app
  // return <center>
  //   <ClockHeading/>
  //   <ClockSlogan/>
  //   <CurrentTime/>
  // </center>

  //fragment
  // return
  // <React.Fragment>
  //   <h1>Healthy Food</h1>
  //   <ul className="list-group">
  //     <li className="list-group-item">Dal</li>
  //     <li className="list-group-item">Green Vegetable</li>
  //     <li className="list-group-item">Roti</li>
  //     <li className="list-group-item">Salad</li>
  //     <li className="list-group-item">Milk</li>
  //   </ul>
  // </React.Fragment>
  //   let foodItems=['Dal','Green Vegetable','Roti','Salad','Milk'];
  //   // if (foodItems.length===0){
  //   //   return <h1>No food items</h1>
  //   // }
  //   let emptyMessage=(foodItems.length===0 && <h1>No food items</h1>);
  //   return (<>
  //     <h1>Healthy Food</h1>
  //     {/* {foodItems.length===0 && <h1>No food items</h1>} */}
  //     {/* {emptyMessage} */}
  // {foodItems.length===0 && <h3>No food items</h3>}
  //     <ul className="list-group">
  //       {foodItems.map((foodItem)=>(<li className="list-group-item" key={foodItem}>{foodItem}</li>))}
  //     </ul>
  //   </>
  //   );

  //props
  // let foodItems=['Dal','Green Vegetable','Roti','Salad','Milk'];
  // return (
  //   <>
  //     <h1 className="food-heading">Healthy Food</h1>
  //     <ErrorMessage items={foodItems}/>
  //     <FoodItems items={foodItems}/>
  //   </>

  // )
  //todo with props
  //  const todoItems=[{
  //   name:"Buy Milk",
  //   date:"4/10/2023"
  //   },
  //   {
  //     name:"Buy Bread",
  //     date:"4/10/2023"
  //   },
  //   {
  //     name:"Buy Rice",
  //     date:"4/10/2023"
  //   }];

  // return <>
  // {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2023"/>
  // <TodoItem todoName="Buy Bread" todoDate="4/10/2023"/> */}
  // <AppName/>
  // <AppTodo/>
  // <TodoItems todoItems={todoItems}/>
  // </>
  //calculator
  // return <>
  // <div className={style.calculator}>
  //   <Display/>
  //   <ButtonsContainer/>
  // </div>

  // </>
  //passing function via props
  // let foodItems=['Dal','Green Vegetable','Roti','Salad','Milk'];
  // let textState=useState();
  // let textToShow="Food Item Entered By User";

  // const handleOnChange=(event)=>{
  //   console.log(event.target.value+'from app')
  //   textToShow=event.target.value;
  // }
  // return (
  //   <>
  //   <Container>
  //     <h1 className="food-heading">Healthy Food</h1>
  //     <ErrorMessage items={foodItems}/>
  //     <FoodInput handleOnChange={handleOnChange}/>
  //     <p>
  //       {textToShow}
  //     </p>
  //     <FoodItems items={foodItems}/>
  //   </Container>
  //   <Container>
  //     <p>
  //       Above is the list of healthy food items.
  //     </p>

  //   </Container>
  //   </>

  // )

  // }
  //userState
  // let foodItems=['Dal','Green Vegetable','Roti','Salad','Milk'];
  // let textStateArr=useState('Food Item Entered By User');
  // let textToShow=textStateArr[0];
  // let setTextState=textStateArr[1];
  // console.log(`Current value of state is:${textStateArr}`);
  // const handleOnChange=(event)=>{
  //   console.log(event.target.value+'from app')
  //   setTextState(event.target.value);
  // }
  // return (
  //   <>
  //   <Container>
  //     <h1 className="food-heading">Healthy Food</h1>
  //     <ErrorMessage items={foodItems}/>
  //     <FoodInput handleOnChange={handleOnChange}/>
  //     <p>
  //       {textToShow}
  //     </p>
  //     <FoodItems items={foodItems}/>
  //   </Container>
  //   <Container>
  //     <p>
  //       Above is the list of healthy food items.
  //     </p>

  //   </Container>
  //   </>

  // )

  // }
  // let [foodItems,setFoodItems]=useState([]);
  // const onKeyDown=(event)=>{
  //   if(event.key==='Enter'){
  //     let newFoodItem=event.target.value;
  //     event.target.value="";
  //     console.log('Food item entered is:'+newFoodItem);
  //     let newItems = [...foodItems,newFoodItem];
  //     setFoodItems(newItems);
  //   }
  // }
  // return (
  //   <>
  //   <Container>
  //     <h1 className="food-heading">Healthy Food</h1>
  //     <FoodInput handleKeyDown={onKeyDown}/>
  //     <ErrorMessage items={foodItems}/>
  //     <FoodItems items={foodItems}/>
  //   </Container>
  //   <Container>
  //     <p>
  //       Above is the list of healthy food items.
  //     </p>

  //   </Container>
  //   </>

  // )

  //calculator
  // const [calVal, setCalVal] = useState("");
  // const onButtonClick = (buttonName) => {
  //   console.log(buttonName);
  //   if (buttonName === "C") {
  //     setCalVal("");
  //   } else if (buttonName === "=") {
  //     try {
  //       setCalVal(eval(calVal).toString());
  //     } catch {
  //       setCalVal("Error");
  //     }
  //   } else {
  //     setCalVal(calVal + buttonName);
  //   }
  // };
  // return (
  //   <>
  //     <div className={style.calculator}>
  //       <Display displayValue={calVal} />
  //       <ButtonsContainer onButtonClick={onButtonClick} />
  //     </div>
  //   </>
  // );

  //todo
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     date: "4/10/2023",
  //   },
  //   {
  //     name: "Buy Bread",
  //     date: "4/10/2023",
  //   },
  //   {
  //     name: "Buy Rice",
  //     date: "4/10/2023",
  //   },
  // ];
  // const [todoItems, setTodoItems] = useState([]);
  // const handleNewItem = (itemName, itemDueDate) => {
  //   console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
  //   //const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
  //   //setTodoItems(newTodoItems);
  //8.38 functional update if many state to take current value
  //   // setTodoItems((cuurrentValue)=>{
  //   //   const newTodoItems = [...cuurrentValue, { name: itemName, date: itemDueDate }];
  //   //   return newTodoItems
  //   // });
  //   setTodoItems((cuurrentValue)=>[...cuurrentValue, { name: itemName, date: itemDueDate }]);

  // };
  // const handelDeleteItem = (todoItemsName) => {
  //   //console.log(`Item Deleted:${todoItemsName}`);
  //   const newTodoItems = todoItems.filter(
  //     (item) => item.name !== todoItemsName
  //   );
  //   setTodoItems(newTodoItems);
  // };

  // return (
  //   <>
  //     <center className="todo-container">
  //       <AppName />
  //       <AppTodo onNewItem={handleNewItem} />
  //       {todoItems.length === 0 && <WelcomeMessage />}
  //       <TodoItems todoItems={todoItems} onDeleteClick={handelDeleteItem} />
  //     </center>
  //   </>
  // );
  //todo form+useref
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     date: "4/10/2023",
  //   },
  //   {
  //     name: "Buy Bread",
  //     date: "4/10/2023",
  //   },
  //   {
  //     name: "Buy Rice",
  //     date: "4/10/2023",
  //   },
  // ];
  // const [todoItems, setTodoItems] = useState([]);
  // const handleNewItem = (itemName, itemDueDate) => {
  //   console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
  //   const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
  //   setTodoItems(newTodoItems);
  // };
  // const handelDeleteItem = (todoItemsName) => {
  //   //console.log(`Item Deleted:${todoItemsName}`);
  //   const newTodoItems = todoItems.filter(
  //     (item) => item.name !== todoItemsName
  //   );
  //   setTodoItems(newTodoItems);
  // };

  // return (
  //   <>
  //     <center className="todo-container">
  //       <AppName />
  //       <AddTodoForm onNewItem={handleNewItem} />
  //       {todoItems.length === 0 && <WelcomeMessage />}
  //       <TodoItems todoItems={todoItems} onDeleteClick={handelDeleteItem} />
  //     </center>
  //   </>
  // );
  // // todo context api
  // const initialTodoItems = [
  //     {
  //       name: "Buy Milk",
  //       date: "4/10/2023",
  //     },
  //     {
  //       name: "Buy Bread",
  //       date: "4/10/2023",
  //     },
  //     {
  //       name: "Buy Rice",
  //       date: "4/10/2023",
  //     },
  //   ];
  //   const [todoItems, setTodoItems] = useState([]);
  //   const addNewItem = (itemName, itemDueDate) => {
  //     console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
  //     const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
  //     setTodoItems(newTodoItems);
  //   };
  //   const deleteItem = (todoItemsName) => {
  //     const newTodoItems = todoItems.filter(
  //       (item) => item.name !== todoItemsName
  //     );
  //     setTodoItems(newTodoItems);
  //   };

  // //   const defaultTodoItems = [
  // //     {
  // //     name: "Buy Milk",
  // //     date: "4/10/2023"
  // //   }
  // // ];

  //   return (
  //     <>
  //       <TodoItemsContext.Provider value={{todoItems:todoItems,
  //         addNewItem:addNewItem,
  //         deleteItem:deleteItem
  //        }}>
  //       <center className="todo-container">
  //         <AppName />
  //         <AddTodo />
  //          <WelcomeMessage/>
  //         <TodoItems />
  //       </center>
  //       </TodoItemsContext.Provider>
  //     </>
  //   );
  // todo use reducer
  // const [todoItems, setTodoItems] = useState([]);
  /*
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
  // const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
  // setTodoItems(newTodoItems);
};
const deleteItem = (todoItemsName) => {
  // const newTodoItems = todoItems.filter(
  //   (item) => item.name !== todoItemsName
  // );
  // setTodoItems(newTodoItems);

  const deleteItemAction = {
    type:'DELETE_ITEM',
    payload:{
      itemName:todoItemsName
    }
  };
  dispatchTodoItems(deleteItemAction);
};
*/
  //   const defaultTodoItems = [
  //     {
  //     name: "Buy Milk",
  //     date: "4/10/2023"
  //   }
  // ];

  return (
    <>
      {/* <TodoItemsContext.Provider value={{todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem
     }}> */}
      <TodoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
      {/* </TodoItemsContext.Provider> */}
    </>
  );
}

export default App;
