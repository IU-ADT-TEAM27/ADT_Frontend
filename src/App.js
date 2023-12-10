import logo from './logo.svg';
import './App.css';
import MuiCard from './card';
// import Signup from './grid';
import ProductListingPage from './products';
import CartPage from './cart';
import React, {useState} from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './login';
import PrivateRoutes from './privateRoute';
import MobileForm from './Admin/mobileForm';
import AdminProductListingPage from './Admin/AdminProducts';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      {/* <MuiCard /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/admin/mobile' element={<MobileForm/>}></Route>
          <Route path='/admin/mymobiles' element={<AdminProductListingPage cart={cart} setCart={setCart} />}></Route>
          {/* <Route path='/products' element={<ProductListingPage  cart={cart} setCart={setCart} />}>
            </Route> */}
          <Route element={<PrivateRoutes />}>
            <Route path='/products' element={<ProductListingPage  cart={cart} setCart={setCart} />}>
            </Route>
            <Route path='/cart' element={<CartPage cart={cart} setCart={setCart} />} >
            </Route>
          </Route>
          {/* </Route> */}
          {/* <PrivateRoute path='/products' element={<ProductListingPage  cart={cart} setCart={setCart} />} />
          
          <PrivateRoute path='/cart' element={<CartPage cart={cart} setCart={setCart} />} /> */}
          
        </Routes>
      </Router>
      
      {/* <Signup /> */}
      {/* <ProductListingPage /> */}
    </div>
  );
}

export default App;

 
