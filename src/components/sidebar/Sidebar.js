import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  //   const [isOpen, setOpen] = useState(false)
  return (
    <div className="sidebar">
      <ul>
        <li>
          <h1 className="title">Lorem Ipsum</h1>
        </li>
        <li>
          <NavLink activeClassName="is-active" exact to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" exact to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/cusine">
            Cuisine
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/Book">
            Book
          </NavLink>
        </li>
      </ul>
      <br />
      <br />
      <NavLink className="button" to="/">
        Cart
      </NavLink>
    </div>
  )
}

export default Sidebar
