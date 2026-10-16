import { React, useState, useEffect } from 'react'
import axios from 'axios';

const Inputbox = () => {
    const [name, setname] = useState("");
    const [pass, setpass] = useState("");
    const [data, setdata] = useState([]);
    function changename(e) {
        setname(e.target.value)
    }
    function changepass(e) {
        setpass(e.target.value)
    }
    useEffect(() => {
        axios.get('https://dummyjson.com/c/e2d7-5698-4370-bbf7')
            .then((res) => { setdata(res.data) })
    })
    function check(e) {
        e.preventDefault();
        if (name === data.username && pass === data.password) {
            alert("match the username and password")
        }
        else {
            alert("mismatch the username and password")
        }
    }
    return (
        <>
        <center>
            <form onSubmit={check}>
                Username:<input onChange={changename}></input><br />
                Password:<input onChange={changepass}></input><br />
                <button type="Submit">confirm</button>
            </form>
        </center>

        </>
    )
}

export default Inputbox
