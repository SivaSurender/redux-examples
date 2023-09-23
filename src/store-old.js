import { combineReducers, createStore } from "redux";

const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const customerInitialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer": {
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    }
    case "customer/updateCustomer": {
      return {
        ...state,
        fullName: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

function accountReducer(state = accountInitialState, action) {
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

// combine reducers if there are multiple reducers and pass it to store

const masterReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(masterReducer);

// store.dispatch({ type: "account/deposit", payload: 7000 });

// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 2000 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 10000, purpose: "buying house" },
// });
// console.log(store.getState());

// store.dispatch({
//   type: "account/payLoan",
//   payload: 10000,
// });
// console.log(store.getState());

// ACTION CREATORS

// account
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan(amount) {
  return { type: "account/payLoan", payload: amount };
}

// customer

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateCustomer(fullName) {
  return {
    type: "customer/updateCustomer",
    payload: fullName,
  };
}

store.dispatch(deposit(7000));
console.log(store.getState());

store.dispatch(withdraw(2000));
console.log(store.getState());

store.dispatch(requestLoan(10000, "buying house"));
console.log(store.getState());

store.dispatch(payLoan(10000));
console.log(store.getState());

store.dispatch(createCustomer("Morton", "123456789"));
console.log(store.getState());

store.dispatch(updateCustomer("Claire"));
store.dispatch(deposit(157000));
console.log(store.getState());
