import React from "react";
import Hello from "./Hello";
import Random from "./Random";
import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import 'bootstrap/dist/css/bootstrap.min.css' 

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
function App(){
  // return <div>
  //   <h1>this is the best react course</h1>
  //   <Hello></Hello>
  //   <Random></Random>
  //   <Random></Random>
  // </div>

  //todo app
  // return <center classNameName="todo-container">
  //   <AppName/>
  //   <AppTodo/>
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
let foodItems=['Dal','Green Vegetable','Roti','Salad','Milk'];
return (
  <>
    <h1 className="food-heading">Healthy Food</h1>
    <ErrorMessage items={foodItems}/>
    <FoodItems items={foodItems}/>
  </>
  
)


}

export default App;