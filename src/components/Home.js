import React,{ useState } from "react";
import CardsData from "./CardData";
import "./Home.css";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast'
import Footer from "./Footer";

const Home = () => {
  const [cartData, setCartData] = useState(CardsData); console.log(setCartData);
  const dispatch = useDispatch();

  const send = (e) =>{
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart")
  }

  return (
    <>
    <div className="main">
      {
        cartData.map((element, index) => {
           return(
            <div className="homepage_all_resto_details">
                <img src={element.imgdata} alt="img" />

                <div className="dish_plus_rating">
                  <h3>{element.dish}</h3>
                  <h3 className="rating">{element.rating}&nbsp;★</h3>
                </div>

                <div className="address_plus_price">
                  <h3>{element.address}</h3>
                  <h3>{element.price}</h3>
                </div>

                <button onClick={() => send(element)} className="Add_to_cart_btn_homepage">Add To Cart</button>
            </div>
           )
        })
      }
    </div>
    <Footer/>
    </>
  );
};

export default Home;
