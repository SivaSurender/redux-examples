import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// hooks method
function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);
  console.log(balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

// connect method before hooks impl.

/**
 * 
1. comp needs to be wired with connect 
2. this connet taks in a function and this connect with arg takes in the component as arg
3. this connect function takes state as arg and it shoul return an object
4. and ths objectr reqd value should be parsed as a prop from the component
 */
// function BalanceDisplay({ balance }) {
//   return <div className="balance">{formatCurrency(balance)}</div>;
// }
// function mapStateToProps(state) {
//   console.log(state, "map");
//   return {
//     balance: state.account.balance,
//   };
// }

// export default connect(mapStateToProps)(BalanceDisplay);
