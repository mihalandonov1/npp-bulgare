import React from 'react'
import './Header.css'
import headimg from "./images/360_F_125116470_wClwGpNIwmElCIgbtV6OYcL5HPWYXZjJ.jpg"

function Header() {
  return (
    <div className='container'>
        <div className='layout'>
            <div className='header'>
                <h3 className='head-text1'>Национална Политическа Партия</h3>
                <h1 className='head-text'>Б Ъ Л Г А Р Е</h1>
                <img className='headimg' src={headimg} alt='pic'/>
            </div>
        </div>
    </div>
  )
}

export default Header