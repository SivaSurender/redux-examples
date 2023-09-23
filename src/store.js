import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const masterReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(masterReducer);

console.log(store.getState());
