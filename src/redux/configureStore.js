import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/data.js";

export default configureStore({
  reducer: {
    data: counterReducer,
  },
});
