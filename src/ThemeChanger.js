import { React,useState} from 'react'
function ThemeChanger(){
const[change,setchange]=useState(false)
    function theme() {
        setchange(!change)
    }
return (
    <div>
      <div style={{backgroundColor:(change?"red":"black")}}>
      <button onClick={theme}>{change?"🌛":"🔅"}</button>
      </div>
    </div>
  )
}
export default ThemeChanger
