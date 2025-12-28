import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/about">About</NavLink>
       <NavLink to="/contact">Contact</NavLink>
    </nav>
  );     
}

export default Navbar;
