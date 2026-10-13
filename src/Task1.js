import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Task1.css'

const Task1=()=>{
  const [cart,setCart]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/")
      .then(res=>setCart(res.data))
      .catch(err=>console.error("Error fetching data:",err));
  },[]);
  const ItemNames=(...items)=>{
    console.log("Current Items:",items.map(i=>i.name));
  };
  useEffect(()=>{
    if(cart.length>0)ItemNames(...cart);
  },[cart]);
  const shop=()=>{
    const newItem={ 
      id:4, 
      name:"USB Cable",
       price:400, 
       inStock:true
       };
    setCart([...cart,newItem]);
  };
  const removeOutOfStock=()=>{
    setCart(cart.filter(item=>item.inStock));
  };
  return(
    <div>
      <center>
      <h1>Shopping Cart Manager</h1>
      </center>
      <center>
      <div >
        {cart.map(({ id,name,price})=>(
          <h3 key={id}>{name} - ₹{price}</h3>
        ))}
      </div>
      </center>
      <center>
      <button onClick={shop} >Add USB Cable</button>
      <button onClick={removeOutOfStock} >
        Remove Out of Stock
      </button>
      </center>
    </div>
  );
};
export default Task1;