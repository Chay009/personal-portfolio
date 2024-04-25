import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <NavLink to="/" className="navbar-link" data-nav-link>
          Welcome
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/my/about" className="navbar-link" data-nav-link>
          About
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/my/resume" className="navbar-link" data-nav-link>
          Resume
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/my/projects" className="navbar-link" data-nav-link>
         Projects
        </NavLink>
      </li>

     

      <li className="navbar-item">
        <NavLink to="/my/contact" className="navbar-link" data-nav-link>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar