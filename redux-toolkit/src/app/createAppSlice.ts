import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"
import { numberSlice } from "../features/number/numberSlice"

// `buildCreateSlice` allows us to create a slice with async thunks.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})