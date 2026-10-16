import React, { useState } from 'react'
import './Otp.css'
function Otp() {
    const [otp, setOtp] = useState('')
    const [userOtp, setUserOtp] = useState('')
    const [message, setMessage] = useState('')
    const generateOtp = async () => {
        try {
            const response = await fetch('http://localhost:5000/generate-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message)
            }

            setOtp(data.otp)
            setUserOtp('')
            setMessage(data.message)
        }
        catch (error) {
            setMessage('Backend connection failed')
        }
    }

    const verifyOtp = async () => {
        try {
            const response = await fetch('http://localhost:5000/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ otp: userOtp })
            })

            const data = await response.json()

            setMessage(data.message)

            if (response.ok) {
                setOtp('')
                setUserOtp('')
            }
        }
        catch (error) {
            setMessage('Backend connection failed')
        }
    }

    return (
        <div className="otp-container">
            <h1>OTP Verification</h1>

            <button onClick={generateOtp}>
                Generate OTP
            </button>

            {otp && <h2>Your OTP: {otp}</h2>}

            <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={userOtp}
                onChange={(e) => setUserOtp(e.target.value)}
                maxLength="6"
            />

            <button onClick={verifyOtp}>
                Verify OTP
            </button>

            <p>{message}</p>
        </div>
    )
}

export default Otp