import { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
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
        else{
            seterror({
                ...error,
                nameError:""
            })
        }
    }
//719256
  return (
    <div>
      <center>
      <h1>Student Directory</h1>
      <form onSubmit={handleSubmit}style={{ border: "2px solid black",marginLeft: "500px", marginRight: "500px",padding:"4n0px",}}>
       <input onChange={change} name="name" placeholder='enter a name'/>
       <span style={{color:"red"}}>{error.nameError}</span><br/>
       <input onChange={change} name="name" placeholder='enter a email'/>
       <span style={{color:"red"}}>{error.nameError}</span><br/>
       <button type='submit'>submit</button>
       </form><br/><br/>
      <StudentList students={students} isLoading={isLoading} />
      </center>
    </div>
  );
}

export default App;
