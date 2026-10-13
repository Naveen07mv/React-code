import {React,useState} from "react";
import "./Dashboard.css";
function Dashboard(){
  const [dark,setDark]=useState(false);
  const [task,setTask]=useState("");
  const [priority,setPriority]=useState("Low");

  const [tasks,setTasks]=useState([
    {id:1,name:"Problem Solving",priority:"High",completed:false},
    {id:2,name:"GYM",priority:"Medium",completed:true},
    {id:3,name:"Book",priority:"low",completed:false}
  ]);

  function addTask(){
    // if(task==="") return;

    setTasks([...tasks,{
      id:Date.now(),
      name:task,
      priority:priority,
      completed:false
    }]);

    setTask("");
  }

  function deleteTask(id){
    setTasks(tasks.filter(t=>t.id!==id));
  }

  function completeTask(id){
    setTasks(tasks.map(t=>
      t.id===id ? {...t,completed:!t.completed} : t
    ));
  }

  let completed=tasks.filter(t=>t.completed).length;
  let pending=tasks.length-completed;

  return(
    <center>
    <div className={dark?"app dark":"app"}>

      <button onClick={()=>setDark(!dark)}>
        {dark?"Light mood ☀️":"Dark mood 🌙"}
      </button>
        <h1>Task Management Dashboard </h1>
      <h2>Welcome, Naveen 👋</h2>
      <p>Profile: Student</p>
      <div className="box">
        <p>Total Tasks : {tasks.length}</p>
      <p>Completed : {completed}</p>
      <p>Pending : {pending}</p>
      </div>
      
      <h3>Add Task</h3>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={addTask}>Add</button>

      <h3>Tasks</h3>

      {tasks.map(t=>(
        <div className="task" key={t.id}>

          <p className={t.completed?"done":""}>
            {t.name}
          </p>

          <span className={t.priority.toLowerCase()}>
            {t.priority}
          </span>

          <button onClick={()=>completeTask(t.id)}>
            {t.completed?"Undo":"Complete"}
          </button>

          <button onClick={()=>deleteTask(t.id)}>
            Delete
          </button>

        </div>
      ))}

    </div></center>
  );
}
export default Dashboard