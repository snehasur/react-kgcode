
import { useState,useEffect} from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "../counter/Counter.module.css";
//import {useNavigate} from 'react-router-dom';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./numberSlice"

export const NumberCounter = () => {
  //const navigate = useNavigate()
  const dispatch = useAppDispatch() 
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  useEffect(() => {
    if(count>=10){
      //navigate('/home');
      console.log("greater that 10")
    }
  },[count]);


  return (
    <div>
      <div className={styles.row}> 
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.valueAsNumber)
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}
