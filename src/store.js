import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducerFn(state = initialState, action) {
  switch (action.type) {
    case "account/deposit": {
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    }
    case "account/withdraw": {
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    }
    case "account/requestLoan": {
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    }
    case "account/payLoan": {
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.loan - action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

// import createStore from redux
// pass the reducer fn to store
// dispatch the reqd action with store
// call getState method on store to log current state

const store = createStore(reducerFn);

store.dispatch({ type: "account/deposit", payload: 7000 });

console.log(store.getState());

store.dispatch({ type: "account/withdraw", payload: 2000 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 10000, loanPurpose: "buying house" },
});
console.log(store.getState());

store.dispatch({
  type: "account/payLoan",
  payload: 10000,
});
console.log(store.getState());
