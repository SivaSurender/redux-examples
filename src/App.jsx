import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import Customer from "./features/customers/Customer";
import CreateCustomer from "./features/customers/CreateCustomer";
import { useSelector } from "react-redux";

function App() {
  const customerName = useSelector((store) => store.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!customerName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
