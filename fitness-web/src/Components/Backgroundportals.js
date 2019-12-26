import React from 'react'
import ReactDOM from 'react-dom'
function Backgroundportals() {
    return ReactDOM.createPortal(
        <div className="backgroundportal">
            <h1>Portal</h1>
        </div>,
        document.getElementById('background-root')
    )
}
export default Backgroundportals
