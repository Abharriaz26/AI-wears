import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Detailpage from './components/Detailpage';
import Men from './components/Men';
import Women from './components/Women';
import Womendetail from './components/Womendetail';
import Shoppingcard from './components/Shoppingcard';
import Payment from './components/Payment';
import Productdetail from './components/Productdetail';
import Contact from './components/Contact';
import { useState } from 'react';
import Sidebar from './components/Sidebar';


function App() {
  const [isloged, setIsloged]=useState(false)
  return (
  
    <div className="app">
      {/* <Sidebar/> */}
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/product/:id' element={<Productdetail/>}></Route>
    <Route path='/women' element={<Women/>}></Route>
    <Route path='/women/:id' element={<Womendetail/>}></Route>
    <Route path='/men' element={<Men/>}></Route>
    <Route path='/men/:id' element={<Detailpage/>}></Route>
    <Route path='/shoppingcard' element={<Shoppingcard/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
