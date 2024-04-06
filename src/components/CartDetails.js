import React, { useState,useEffect } from 'react'
import './CartDetails.css'
import { addToCart, removeToCart, singleRemoveCart, emptycartIteam } from '../redux/cartSlice'
import { useDispatch, useSelector} from 'react-redux'
import toast from 'react-hot-toast'
import Footer from './Footer'


const CartDetails = () => {
  const {cart} = useSelector((state) => state.allCart);

  const [totalprice,setPrice] = useState(0);
  const [totalquantity,setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleSingleIncreament = (e) =>{
    dispatch(addToCart(e))
  }

  const handleSingleDecreament = (e) =>{
    dispatch(removeToCart(e));
  }

  const removeSingleCart = (e) =>{
    dispatch(singleRemoveCart(e));
    toast.success("Item Remove From Your Cart")
  }

  const emptycart = () =>{
    dispatch(emptycartIteam())
    toast.success("Your Cart is Empty")
  }

  const total = ()=>{
    let totalprice = 0
    cart.map((ele,ind)=>{
        totalprice = ele.price * ele.qnty + totalprice
    });
    setPrice(totalprice)
}  


// count total quantity
const countquantity = ()=>{
    let totalquantity = 0
    cart.map((ele,ind)=>{
        totalquantity = ele.qnty + totalquantity
    });
    setTotalQuantity(totalquantity)
}  

useEffect(()=>{
    total()
},[total])

useEffect(()=>{
    countquantity()
},[countquantity])

  return (
    <>
      <div>
          <div className='Restaurants_Cart_plus_trash_empty_text'>
            <h2>Restaurants Cart</h2>
            
            <div className='trash_empty_text'>
                <svg width={"15px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                <button onClick={() => emptycart()}>Empty Cart</button>
            </div>
          </div>

          <div className='heading_name'>
            <div className='img_name_price_title'>
                <h3>Image</h3>
                <h3>Name</h3>
                <h3>Price</h3>
            </div>
            <div className='qunt_title'>
                <h3>Qty</h3>
            </div>
            <div className='total_plus_delete_title'>
              <h3>Total Amount</h3>
              <h3>Delete</h3>
            </div>
          </div>
          {
              cart.map((data,index) => {
                return(
                  <div className='item_row_data'>
                      <div className='img_name_price'>
                          <img style={{width : "70px", borderRadius : "10px"}} alt='img' src={data.imgdata}/>
                          <h3>{data.dish}</h3>
                          <h3>{data.price}</h3>
                      </div>

                      <div className='quantity'>
                        <button onClick={ data.qnty <= 1 ? () => removeSingleCart(data.id) : () => handleSingleDecreament(data)} className='qty_btn_in_cartdetails'> - </button>
                        <h3>{data.qnty}</h3>
                        <button onClick={() => handleSingleIncreament(data)} className='qty_btn_in_cartdetails'> + </button>
                      </div>
                      
                      <div className='total'>
                        <h3>₹{data.qnty * data.price}</h3>
                        <button onClick={() => removeSingleCart(data.id)}>
                          <svg width={"15px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ff0000" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                        </button>
                      </div>
                  </div>
                )
              })
          }

          <div className='last_qnty_plus_total'>
              <h2>Items In Cart : {totalquantity}</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h2>Total Price : ₹ {totalprice}</h2>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default CartDetails