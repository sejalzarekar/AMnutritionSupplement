import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  const location = useLocation();

  const isDropdownActive =
  location.pathname === "/action" ||
  location.pathname === "/another-action" ||
  location.pathname === "/something-else";
  return (
    <>
    <nav className="navbar bg-body-tertiary">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Logo Section */}
        <Link className="navbar-brand w-25" to="/">
          <img src="/assets/Logo.jpg" alt="Logo" className="img-fluid w-25" />
        </Link>

        {/* Cart Icon with Badge */}
        <li className="nav-item list-unstyled">
          <NavLink className="nav-link position-relative text-dark" to="/cart">
            <i className="bi bi-cart fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </NavLink>
        </li>

      </div>
    </nav>





<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-5" to="/"> <span className="bi bi-geo-alt-fill me-1 text-danger "> <span className='text-dark  small fs-6'>- FIND A STORE</span> </span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto ">
        <li className="nav-item mx-4 ">
          <NavLink className="nav-link fw-bold " aria-current="page" to ="/">Home</NavLink>
        </li>
<li className="nav-item  dropdown mx-4">
      <Link
        className={`nav-link fw-bold dropdown-toggle ${isDropdownActive ? "active" : ""}`}
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Products
      </Link>
      <ul className="dropdown-menu">
        <li>
          <NavLink className="dropdown-item " to="/action">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/another-action">
            Another action
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/something-else">
            Something else here
          </NavLink>
        </li>
      </ul>
    </li>




        <li className="nav-item mx-4">
          <NavLink className="nav-link fw-bold" to ="/about">About</NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink className="nav-link fw-bold" to ="/contact">Conatact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex me-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>




    </>
  )
}

export default Navbar
