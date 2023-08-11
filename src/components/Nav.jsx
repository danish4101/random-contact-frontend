import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/name">All the Names!</NavLink>
      <NavLink to="/add-contact">Add Contact!</NavLink>
    </nav>
  )
}

