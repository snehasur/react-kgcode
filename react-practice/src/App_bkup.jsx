import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";
import Form from "./components/Form";
import Home from "./Home.jsx";
import Formnew from "./components/Formnew.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import FormValidationBootstrapOnlyAdd from "./components/FormValidationBootstrapOnlyAdd.jsx";
import FormValidationBootstrapWithEdit from "./components/FormValidationBootstrapWithEdit.jsx";
import Todo from "./components/Todo.jsx";
import JsonplaceholderCrud from "./components/JsonplaceholderCrud.jsx";
import JsonplaceholderCrudWithAbortController from "./components/JsonplaceholderCrudWithAbortController.jsx";
import DynamicInput from "./components/DynamicInput.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";

function App() {
  // const [count, setCount] = useState(0);

  // const decrement = () => {
  //   setCount(count - 1);
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);

  return (
    <>
      {/* <Parent />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        {count > 0 && <button onClick={decrement}>-</button>}
      </div>
      <Form />
      <Home/> */}
      {/* <Formnew /> */}
      {/* <FormValidationBootstrapOnlyAdd /> */}
      {/* success msg add//double code for error */}
      {/* <FormValidationBootstrapWithEdit /> */}
      {/* <Todo /> */}
      {/* success msg add //onchange submit validation at a tym not work*/}
      {/* single code for error and api */}
      {/* <JsonplaceholderCrud /> */}
      {/* <JsonplaceholderCrudWithAbortController /> */}
      {/* dynamically handle multiple inputs in React, you can manage the state of each input by using a single state object */}
      {/* <DynamicInput /> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
