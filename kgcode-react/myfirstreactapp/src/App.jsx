import Hello from "./Hello";
import Random from "./Random";
import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
function App(){
  // return <div>
  //   <h1>this is the best react course</h1>
  //   <Hello></Hello>
  //   <Random></Random>
  //   <Random></Random>
  // </div>
  return <center class="todo-container">
    <AppName/>
    <AppTodo/>
    <TodoItem1/>
    <TodoItem2/>
  </center>
}

export default App;