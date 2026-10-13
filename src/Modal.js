import { React, useState } from 'react'
import "./Modal.css";
function Modal() {
  const [Modal, setModal] = useState(false)
  return (
    <div className='mb'>
      <div>modal box</div>
      {Modal ? <div className="modalbox1">
        <span> Are you sure,do you want to continue</span><br />
        <button onClick={() => setModal(false)} className="bm">OK</button>
      </div> : ""}
      <div>
        <button onClick={() => setModal(true)} className="bm" >Submit</button>
      </div>
    </div>
  )
}
export default Modal
