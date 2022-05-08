import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navabar = () => {
    const state=useSelector((state)=>state?.handleCart)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
    <div className="container">
        <a href="#" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link active">Home</NavLink>
                <NavLink to="/Product" className="nav-item nav-link">Profile</NavLink>
                <NavLink to="#" className="nav-item nav-link">Messages</NavLink>
                <NavLink to="#" className="nav-item nav-link disabled" tabindex="-1">Reports</NavLink>
            </div>
            <div className="navbar-nav ms-auto">
                <NavLink to="#" className="btn btn-outline-warning ms-2">
                <i className="fa-solid fa-arrow-right-to-bracket me-1"></i> Login
                </NavLink>
                <NavLink to="/AddToCart" className="btn btn-outline-warning ms-2">
                <i className="fa-solid fa-cart-shopping me-1"></i>
                Cart ({state.length})
                </NavLink>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Navabar