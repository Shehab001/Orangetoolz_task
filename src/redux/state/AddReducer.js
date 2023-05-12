import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    todo: JSON.parse(localStorage.getItem("todo"))
      ? JSON.parse(localStorage.getItem("todo"))
      : "",
    progress: JSON.parse(localStorage.getItem("progress"))
      ? JSON.parse(localStorage.getItem("progress"))
      : "",
    done: JSON.parse(localStorage.getItem("done"))
      ? JSON.parse(localStorage.getItem("done"))
      : "",
  },

  reducers: {
    todo: (state, action) => {
      //console.log(state, action.payload);
      state.todo = [...state.todo, action.payload];
      localStorage.setItem("todo", JSON.stringify(state.todo));
    },
    progress: (state, action) => {
      // console.log(state, action.payload);
      state.progress = [...state.progress, action.payload];
      localStorage.setItem("progress", JSON.stringify(state.progress));
    },
    done: (state, action) => {
      // state.done = action.payload;
      state.done = [...state.done, action.payload];
      localStorage.setItem("done", JSON.stringify(state.done));
    },
  },
});

export const { todo, progress, done } = counterSlice.actions;
export default counterSlice.reducer;
