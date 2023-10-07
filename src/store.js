import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import thunk from "redux-thunk";

const masterReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(masterReducer, applyMiddleware(thunk));
