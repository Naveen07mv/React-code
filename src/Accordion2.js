import {React,useState} from 'react'

function Accordion2() {
    const [acc,setacc]=useState(null)
    const std=[
        {id:1,name:"naveen",age:20},
        {id:2,name:"srinaveen",age:19}

    ]
    function handle(id){
        setacc(acc==id?null:id)
    }
  return (
    <div>
    {
      std.map((res)=>{
        return(
            <>
            <p onClick={()=>handle(res.id)}>{res.name}</p>
            {acc==res.id?<p>{res.age}</p>:""}
            </>
        )
       })  
    }    
       
    </div>
  )
}

export default Accordion2
