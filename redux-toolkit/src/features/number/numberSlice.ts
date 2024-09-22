import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
export interface NumberSliceState {
  value: number
}

const initialState: NumberSliceState = {
  value: 0
}
export const numberSlice = createAppSlice({
  name: "number",
  initialState,
  reducers: create => ({
    increment: create.reducer(state => {
      state.value += 1
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => { //need to know
        state.value += action.payload
      },
    ),
}),
  selectors: {
    selectCount: counter => counter.value
    
  },
})

export const { decrement, increment, incrementByAmount } =
  numberSlice.actions

export const { selectCount } = numberSlice.selectors

