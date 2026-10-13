import React from 'react'
import "./SamplePhoto.css"
function SamplePhoto() {
  return (
          
    <div className="page">
      <div className="popup">

        <button className="close">×</button>

       <img  src="/image1.jpeg" alt="My Photo" width={"400px"} height={"200px"}/>

        <h1>Secure all your devices</h1>

        <p>
          Ensure your mobile phone, laptop, and other
          devices are protected online.
        </p>

        <button className="premium">
          Purchase Premium
        </button>

      </div>
    </div>
  )
}

export default SamplePhoto
