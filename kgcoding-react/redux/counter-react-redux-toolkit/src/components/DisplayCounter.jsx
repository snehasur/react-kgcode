import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // const counterObj = useSelector((store) => store.counter);
  // const counter = counterObj.counterVal;
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <div>
      <h1>Display Counter Value:{counterVal}</h1>
    </div>
  );
};

export default DisplayCounter;
