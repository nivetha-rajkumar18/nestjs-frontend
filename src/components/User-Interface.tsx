import { Link } from "react-router-dom";
import Login from "./Login";

export default function UserInterface() {
  return (
    <div>
      <h1>Product List</h1>
      <Link to="/"></Link>
      <br />
      <Link to="/login"></Link>
      
    </div>
  );
}