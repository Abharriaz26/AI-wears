import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const getdata = useSelector((state)=>state.cartReducer.carts);
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">AI wears</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/women">Women</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/men">Men</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      </ul>



        <Link to="/shoppingcard"><Badge badgeContent={getdata.length} color="primary">
          <ShoppingCartIcon className='fs-1 fw-bold ms-4'/>
          </Badge></Link>

          <button className='btn btn-primary mx-2' onClick={()=>(true)}>Login</button>
     <button className='btn btn-danger' onClick={()=>(false)}>Logout</button>

     
    </div>
  </div>
</nav>



</div>
  )
}

export default Navbar