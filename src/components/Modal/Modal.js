import React from 'react'
import './modal.css'
const Modal = ()=>{
    return (
        <div className="modal__wrapper">
            <div className="modal">
                <p>Are You Sure?</p>
                <div className="modal__actions">
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal