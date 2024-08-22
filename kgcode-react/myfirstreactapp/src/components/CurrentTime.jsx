import React, { useState, useEffect } from "react";
let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("clearing interval");
    };
  }, []);
  //let time = new Date();
  return (
    <p className="lead">
      This is current time:{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
