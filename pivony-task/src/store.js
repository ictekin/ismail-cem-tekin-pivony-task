import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";

import logger from "redux-logger";

export default configureStore({
  reducer: { filters: filterReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
