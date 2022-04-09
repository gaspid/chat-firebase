import { createSlice } from '@reduxjs/toolkit'

const toolkit = createSlice({
  name: 'toolkit',
  initialState: {
    user: null,
    token: null,
    auth: false,
    count: 0,
  },
  reducers: {
    incriment(state) {
      state.count = state.count + 1
    },
  },
})

const { actions, reducer } = toolkit

export default reducer
export const { setUser, incriment } = actions
