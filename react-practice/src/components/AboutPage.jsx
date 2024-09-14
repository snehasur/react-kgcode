import { useState } from "react";
const AboutPage = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>This is About Page</h1>;
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        {count > 0 && <button onClick={decrement}>-</button>}
      </div>
    </>
  );
};
export default AboutPage;
