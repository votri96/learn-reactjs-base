const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + action.payload;
    },

    decrease(state, action) {
      return state - action.payload;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions; // named export
export default reducer; // default export
