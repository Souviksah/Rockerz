import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from '../Component/Home/Home'
import Login from '../Component/Login/Login'

import Signup from '../Component/Signup/Signup'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import About from '../Component/About/About'

import Diff_Items from '../Component/Items/Diff_Items/Diff_Items'
import Sub_Items from '../Component/Items/Sub_Items/Sub_Items'
import Single_Item from '../Component/Items/Single_Item/Single_Item'
import Header1 from '../Component/Header1/Header1'
import Collection from '../Component/Collection/Collection'
import Cart from '../Component/Addtocart/Cart'
import List from '../Component/Search/List'
import ContactUs from '../Component/Contact us/ContactUs'



export default function Routing() {
  return (
    <Router>
      <Header />
      {/* <Header1/> */}
      <Routes>
        <Route path="" element={<Home/>} />
        
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="Collection" element={<Collection/>} />
        <Route path="About" element={<About/>} />
        <Route path="items" element={<Diff_Items/>}/>
        <Route path="sub_item/:itemName" element={<Sub_Items/>}/>
        <Route path="Item/:itemName/:company" element={<Single_Item/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="List" element={<List/>} />
        <Route path="ContactUs" element={<ContactUs/>} />

        
      </Routes>
      <Footer />
    </Router>
  )
}
