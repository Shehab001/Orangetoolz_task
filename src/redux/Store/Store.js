import { configureStore } from "@reduxjs/toolkit";
import adddReducer from "../state/AddReducer";

export default configureStore({
  reducer: {
    counter: adddReducer,
  },
});
