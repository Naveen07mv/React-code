import React, { useState } from 'react'
function ErrorHandling({}) {
    const [value,setvalue]=useState(
        {name:"",email:"",mobile:""}
    )
    const[error,seterror]=useState(
        {nameError:"",emailError:"",mobileError:""}
    )
    function change(e){
        setvalue({
            ...value,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        if(value.name==""&&value.email==""&&value.mobile==""){
            seterror({
                ...error,
                nameError:"Field is required"
            })
            
        }
        else if(value.name.length<=3){
             seterror({
                ...error,
                nameError:"Name should be more then 3 charector"
            })
        }
        else{
            seterror({
                ...error,
                nameError:""
            })
        }
    }
    // console.log(value.name);
    
  return (
    <div >
      <center style={{margin:"200px" }}>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter a name' name="name" onChange={change}/><br/><br/>
      <span style={{color:"red"}}>{error.nameError}</span><br/>
      <input type="email" placeholder='enter a email'name="email" onChange={change}/><br/><br/>
      <input type="number" placeholder='enter a number' name="mobil" onChange={change}/> <br/><br/>
      <button type='submit'>submit</button> 
      </form>  
      </center>
    </div>
  )
}

export default ErrorHandling
