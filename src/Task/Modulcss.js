import React from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
const Modulcss = () => {
    return (

        <div style={{ margin: "80px 0 0 500px",width:"100%"}}>
            <Paper elevation={7} style={{ width: "20%" }}>
                <Paper elevation={10}>
                    <LockOpenRoundedIcon style={{ marginLeft: "100px" }} />

                </Paper>
                <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "20px" }}>
                    <TextField helperText="field is riquired" label="Username" variant="outlined" onChange={(e) => {
                        console.log(e.target.value);
                    }} />
                    <TextField helperText="field is riquired" label="password" type='password' variant="outlined" />
                </div>
            </Paper>
        </div>
    )
}

export default Modulcss