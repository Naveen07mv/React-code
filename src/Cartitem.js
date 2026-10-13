import React from "react";
import './Cartitem.css';
import { useState } from "react";
const Cartitem=()=>{
    const[item,setitem]=useState({
        id: 1,  
        title: "Wireless Mouse",  
         price: 500,  
        qty: 1 
    })

    const[ismember,setismember]=useState(true)
    const{title,price,qty}=item
     function increaseQty(){
        setitem({...item,qty: item.qty+1})
    }
    function decreaseQty(){
        setitem({...item, qty: item.qty-1})
    }
    function toggleMember(){
        setismember(!ismember)
    }
    const finalprice=ismember?price*0.9:price
    
    return(
        <div className="container">
            <h2>{title}</h2>
             <p>Original Price: ₹{price}</p>
              <div className="controls">
              <button onClick={decreaseQty}>-</button>
              <span>{qty}</span>
              <button onClick={increaseQty}>+</button>
              {qty > 5 && <p className="badge">Free Shipping!</p>}
               <p className="price">
               {ismember ? 'Member Price:' + {finalprice}  : 'Regular Price: ₹{price}'}</p>
      
               <button className="memberBtn" onClick={toggleMember}>Toggle Membership </button>
               </div>
        </div>
    )
}

export default Cartitem