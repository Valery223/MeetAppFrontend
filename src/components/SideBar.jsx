import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <nav style={{ backgroundColor: "red", minHeight: "100vh" }}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="g">login</NavLink>
        </li>
        <li>
          <NavLink to="Test1">test1</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
