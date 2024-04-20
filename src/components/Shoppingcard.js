import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { add, remove, removeall } from '../redux/cartSlice';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from './Checkout'

const ShoppingCard = () => {
  const [price , setPrice]=useState();
  const [qty , setQty]=useState();
  const dispatch = useDispatch();
  const Delete =(id)=>{
        dispatch(remove(id))
  }
  const increment =(x)=>{
   dispatch(add(x))
  }
  const decrement =(x)=>{
    dispatch(remove(x))
   }
  const getdata = useSelector((state)=>state.cartReducer.carts)
  const totalp=()=>{
    let tprice = 0;
    getdata.map((x)=>{
      tprice += x.qty * x.price
    })
    setPrice(tprice);
  }
  const calQty=()=>{
    let qtyCount = 0;
    getdata.map((x)=>{
      qtyCount += x.qty
    })
    setQty(qtyCount);
  }

  useEffect(()=>{
    totalp();
    calQty();
  })

const makepayment =async()=>{
  const stripe =  loadStripe
  ('pk_test_51Oo4K0HVu7vz5Br29riqHBblaA0lZTHeC0ktdNgMAlZr83heFGSKVoU24bM1QRXYAfBX3dtCkQQ7GVC8aFTeh4J300kLtV63kC');
  const body ={
    products: getdata
  }
  const headers ={
    "Content--Type": "application/json"
  }

  const response = fetch('http://localhost:7000/api',{
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  }).then((response)=>response.json())
  // const session = response.json();
  // const result = stripe.redirectToCheckout({
  //   sessionId : session.id

  // })

  // if(result.error){
  //   console.log(result.error)
  // }

  alert("Payment Successful")
}

return (
 <div className="container bootdey mt-5">
<div className="row bootstrap snippets ">
  
  <div className="clearfix visible-sm" />
  {/* Cart */}
  <div className="col-lg-9 col-md-9 col-sm-12 m-auto">
    <div className="col-lg-12 col-sm-12 bg-dark text-white p-2 mt-5">
      <span className="title ">SHOPPING CART</span>
    </div>
    <div className="col-lg-12 col-sm-12 hero-feature">
      <div className="table-responsive">
        <table className="table table-bordered tbl-cart">
          <thead>
            <tr>
              <td className="hidden-xs">Image</td>
              <td>Product Name</td>
              <td>-</td>
           
              <td className="td-qty">Quantity</td>
              <td>+</td>
              <td>Unit Price</td>
              <td>Sub Total</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
           {getdata.map((x)=>{
              return(
                  <tr>
                  <td className="hidden-xs">
                    <a href="#">
                      <img src={x.imageUrl}alt="Age Of Wisdom Tan Graphic Tee" title width={47} height={47} />
                    </a>
                  </td>
                  <td><a href="#" className='img1'>{x.title}</a>
                  </td>
                  <td>
                  <a href='#' ><button className='bg-primary' onClick={()=>decrement(x)}>-</button></a>
                  </td>
                  <td>{x.qty}</td>
                  <td>
                  <a href='#' className='plus'><button className='bg-warning' onClick={()=>increment(x)}>+</button></a>
                  </td>
                  <td className="price">$ {x.price}</td>
                  <td>$ {x.qty*x.price}</td>
                  <td className="text-center">
                    <a onClick={()=>Delete(x.id)} href="#" className="remove_cart" rel={2}>
                      <i className="fa fa-trash-o" />
                    </a>
                  </td>
                </tr>
              )
           })}
         
            <tr>
              <td colSpan={6} align="right">Total Amount</td>
              <td className="total" colSpan={2}><b></b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn-group btns-cart">
        <Link to='/product'><button type="button" className="btn btn-primary"><i className="fa fa-arrow-circle-left" /> Continue Shopping</button></Link>
        {/* <button type="button" className="btn btn-primary">Update Cart</button> */}
        <button type="button" className="btn btn-primary pull-right"><Checkout price={price}/></button>
        <div><p className='mx-5'>Total_Qty:{qty}</p></div>
        <div><p className='mx-5'>Total_Price:{price}</p></div>
        
      </div>
    </div>
  </div>
  {/* End Cart */}
</div>
<hr></hr>

<div className="container">
    <h2>Contact us</h2>
    <hr></hr>
<h3>Be the first to hear about new styles and offers and see how you’ve helped.</h3>
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Information</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sports wear</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Casual wear</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Fitness wear</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Fight wear</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Accessories</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Instagram</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Linkedin</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Google+</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between  border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
</div>

)
}

export default ShoppingCard