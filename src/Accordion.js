import { React , useState } from "react";
const Accordion=()=>{
    const[open,setopen]=useState(null)
    const accor=[
        {id:1, title:"accorion 1",para:"paragraph 1"},
        {id:2, title:"accorion 2",para:"paragraph 2"}
    ]
    const handle=(id)=>{
      console.log(id)
      setopen(open===id?null:id)
    }
    return(
        <>
        {
             accor.map((res)=>{
                return(
                    <>
                    <p onClick={()=>handle(res.id)}>{res.title}</p>
                    {open===res.id ?<p>{res.para}</p>:""} 
                    </>
                )
             })
        }
            
        </>
    )
}
export default Accordion