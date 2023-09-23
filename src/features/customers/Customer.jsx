import { useSelector } from "react-redux";

function Customer() {
  const customerName = useSelector((store) => store.customer.fullName);
  console.log(customerName, "cist");
  return <h2>👋 Welcome, {customerName || "%NAME%"}</h2>;
}

export default Customer;
