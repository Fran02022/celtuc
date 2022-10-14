import React from 'react'
import videoPortada from '../../media/videoPortada.mp4'
import './Portada.css'
function Portada() {
  return (
    <div className='portada-container'>
        <video className='video' src={videoPortada} autoPlay loop muted></video>
        <h1>CelTuc</h1>
        <p>Informacion</p>
    </div>
  )
}

export default Portada