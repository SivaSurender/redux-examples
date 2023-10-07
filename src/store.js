import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// classsic redux
// const masterReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// export const store = createStore(masterReducer, applyMiddleware(thunk));

// using redux toolkit

export const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
