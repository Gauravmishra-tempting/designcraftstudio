import React from 'react'
import './Loader.css'; 

function Loader() {
  return (
<div className="loader-wrapper">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  )
}

export default Loader
