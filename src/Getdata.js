import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'

function Getdata() {
    const [value,setvalue]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/c/7bf0-4618-4641-ae80")
        .then((res)=>setvalue(res.data));
        
    },[])
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        {value.map((i)=>{
          return(
            <>
            <tbody>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                </tr>
            </tbody>
            </>
          )
        })}
      </table>
    </div>
  )
}

export default Getdata
