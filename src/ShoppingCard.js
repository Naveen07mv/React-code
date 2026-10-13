import React, { useState } from 'react'

function ShoppingCard() {
    const[change,setchange]=useState(false)

        function theme() {
            setchange(!change)
        }
       const [open,setopen]=useState(false)
       const info=[
        {id:1, title:"Shopping Rules",para:"The ultimate golden rule of smart shopping is to always buy with intention by sticking strictly to a pre-planned list and a defined budget."}
        ]
        function handle(id){
        setopen(!open)
        }
    const [product,setProduct]=useState(
      { name:"", price:"" }); 
    const [products,setProducts]=useState([]); 
    function handleChange(e){ 
      setProduct({...product,[e.target.name]:e.target.value}); } 
    function addProduct(e){ 
      e.preventDefault(); 
      setProducts([...products,product]); 
      setProduct({name:"",price:""}); }       
  return (
    <center  style={{background:"skyblue", height:"100vh"}}>
      <h2>Shopping Cart</h2> 
      <form onSubmit={addProduct}> 
        <input 
        type="text" 
        name="name" 
        placeholder="Product Name"
        value={product.name} 
        onChange={handleChange} /> <br/><br/>
        <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={product.price} 
        onChange={handleChange} /> <br/><br/>
        <button type="submit">Add Product</button> <br/>
      </form>  
      <h3>Product List</h3> 
      {
      products.map((p,index)=>( 
      <p key={index}> {p.name} - ₹{p.price} </p> 
      
      ))}
      <div style={{backgroundColor:(change?"white":"black"),height:"30vh"}}>
      <button onClick={theme}>{change?"light":"dark"}</button>
      </div>
      {
      info.map((res)=>{
        return(
            <>
            <p onClick={()=>handle(res.id)}>{res.title}</p>
            {open==res.id?<p>{res.para}</p>:""}
            </>
        )
       })  
    } 
    </center>
  )
}

export default ShoppingCard
