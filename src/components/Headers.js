import React from 'react'
import './Headers.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app'; // Import Firebase
import 'firebase/auth'; // Import Firebase Auth module

const Headers = () => {

  const {cart} = useSelector((state) => state.allCart);

  return (
    <div>
        <div className='h1_plus_icon_display_flex'>
            <NavLink style={{textDecoration : "none", color : "#FFFFFF"}} to={'/'} ><h1>Restaurants</h1></NavLink>
            
            <div className='two_btn_plus_cart'>
                <div className='two_btn'>
                    <NavLink to={'/signup'} ><button className='first_btn_in_headers'>Sign Up</button></NavLink>
                    {/* <NavLink to={'/signin'} ><button className='second_btn_in_headers'>Sign In</button></NavLink> */}
                </div>
                
                <div className='logo_plus_counter'>
                    <NavLink to={'/cart'} >
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={"35px"} height={"35px"}><path  fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>  
                    </NavLink>   
                    <p className='counter_show'>{cart.length}</p> 
            </div>
            </div>
        </div>
    </div>
  )
}

export default Headers