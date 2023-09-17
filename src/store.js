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
        loanPurpose: action.payload.purpose,
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

// create action creators to automate dispatching actions

const store = createStore(reducerFn);

store.dispatch({ type: "account/deposit", payload: 7000 });

console.log(store.getState());

store.dispatch({ type: "account/withdraw", payload: 2000 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 10000, purpose: "buying house" },
});
console.log(store.getState());

store.dispatch({
  type: "account/payLoan",
  payload: 10000,
});
console.log(store.getState());

// ACTION CREATORS

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
store.dispatch(deposit(7000));
console.log(store.getState());

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
store.dispatch(withdraw(2000));
console.log(store.getState());

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
store.dispatch(requestLoan(10000, "buying house"));
console.log(store.getState());

function payLoan(amount) {
  return { type: "account/payLoan", payload: amount };
}
store.dispatch(payLoan(10000));
console.log(store.getState());
