
import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "../counter/Counter.module.css"
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./numberSlice"

export const NumberCounter = () => {
  const dispatch = useAppDispatch() 
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

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
