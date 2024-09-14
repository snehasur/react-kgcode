import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [time, setTime] = useState(Date);

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(Date());
    }, 100);

    // return
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <>
      <div>Counter</div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount(0)} className="ms-3">
        Reset
      </button>
      <p>{time}</p>
    </>
  );
};

export default Counter;
