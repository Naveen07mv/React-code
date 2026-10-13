import {React,useState} from "react";
import './Project.css';
const Project=()=>{
    // const[value,setvalue]=useState(false)
    // const[data,setdata]=useState("")
    // const[email,setemail]=useState("")
    // const[age,setage]=useState("")
    // function int(){
    // //    setvalue(value===0?1:0)   
    // setvalue(!value)
    // }
    // // function getdata(event){
    // //     setdata(event.target.value)
    // // } 
    //  function getemail(event){
    //     setemail(event.target.value)
    // } 
    // function getage(event){
    //     setage(event.target.value)
    // }

    // function handlesubmit(event){
    //     event.preventDefault();
    //     // alert(data+email+age)
    //     // alert(email)
    //     // alert(age)
    // }
    const [student,setstudent]=useState({ 
        name:"naveen",
        age:20,
        email:"abc@gmail.com",
        mark:79}

    )
    const [student2,setstudent2]=useState({ 
        name:"",
        age:"",
        email:"",
        mark:""}

    )
    function getname(e){
        setstudent({...student,[e.target.name]:e.target.value})
    }
    //  function getage(e){
    //     setstudent({...student,age:e.target.value})
    // }
    // function getemail(e){
    //     setstudent({...student,email:e.target.value})
    // }
    function submit(e){
        e.preventDefault();
        setstudent2(
            {
                ...student2,
                name:student.name,
                age:student.age,
                email:student.email,
                mark:student.mark


            }
        )
    }
    return(
        <div className="naveen">
            {/* <div>
        <center style={{background:(value?"yellow":"black")
        ,height:"100vh"}}>
            {value}<br/>
        <span style={{cursor:"grab"}} onClick={int}>
        </span>
        </center>
        </div> */}
        <div className="gv">
        getvalue={student2.name}<br/>
        getvalue={student2.email}<br/>
        getvalue={student2.age}<br/>
        getvalue={student2.mark}<br/>
        </div>
         <form  onSubmit={submit}>
             name     =<input className="input1" onChange={getname} name={"name"}/><br/>
             email    =<input className="input1" onChange={getname} name={"email"}/><br/>
             age      =<input className="input1" onChange={getname} name={"age"} /><br/>
             mark     =<input className="input1" onChange={getname} name={"mark"} /><br/>
             <button type="submit">Submit</button>
         </form>
        </div>
    )
}
export default Project