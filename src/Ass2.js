import {React,useState} from 'react'
function Ass2() {
    const[theme,settheme]=useState(false)
    function change(){
        settheme(!theme)
    }
    const[count,setcount]=useState("")
    function counting(e){
        setcount(e.target.value);
    }
    const letterCount = count.replace(/[^a-zA-Z]/g, "").length;
    const[number,setNumber]=useState(0);
    const generateNumber = () => {
    const random = Math.floor(Math.random() * 1000000) + 1;
    setNumber(random);
  };
  return (
    <div>
      <div style={{backgroundColor:(theme?"red":"blue"),height:"20vh"}}>
        <h1>Theme changer</h1>
        <center><button onClick={change}>{theme?"blue":"red"}</button></center>    
      </div>
      <div style={{border :"2px solid black",margin:"100px",padding:"20px",textAlign:"center"}}>
        <h1>live character counting</h1>
        <label>Text</label>
        <input type='text' onChange={counting} placeholder='Enter a text'/>
        <p>Character Count: {letterCount}</p>
      </div>
      
      <button onClick={generateNumber}>Generate Number</button>
      number: {number}
    </div>
  )
}

export default Ass2
