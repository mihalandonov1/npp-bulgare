import React from 'react'
import "./Navbar.css"
import  { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='container'>
        <div className='layout'>
            <div className='navi'>
            <div className='nav'>
                <div className='logo'>logo</div>
                <div className='menu'>
                    <li className='menu'>
                       
                        <Link to="/" className="menu-item" onClick={() => {window.scrollTo(0, 0);}}>Начало</Link>

                        <Link to="/" className="menu-item" onClick={() => {window.scrollTo(0, 1400);}}>Структура</Link>
                        
                        <Link to="/" className="menu-item" onClick={() => {window.scrollTo(0, 1800);}}>Устав</Link>
                           
                        <Link to="/" className="menu-item" onClick={() => {window.scrollTo(0, 4000);}}>Отчети</Link>

                    </li>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar