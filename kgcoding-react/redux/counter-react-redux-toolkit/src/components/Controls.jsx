import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    console.log("handleIncrement");
    //dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    console.log("handleDecrement");
    //dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    // dispatch({
    //   type: "ADD",
    //   payload: {
    //     num: inputElement.current.value,
    //   },
    // });
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    // dispatch({
    //   type: "SUBTRACT",
    //   payload: {
    //     num: inputElement.current.value,
    //   },
    // });
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    //dispatch({ type: "TOGGLE" });
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-md-2"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center control-row">
        <input
          type="text"
          placeholder="Enter a number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
