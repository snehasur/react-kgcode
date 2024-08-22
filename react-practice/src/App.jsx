import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";
import Form from "./components/Form";
import Home from "./Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Parent />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        {count > 0 && <button onClick={decrement}>-</button>}
      </div>
      <Form />
      <Home/>
    </>
  );
}

export default App;
