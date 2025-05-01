import React from 'react'
import './Ustav.css'
import img1 from './images/ustav img/1.png'
import img2 from './images/ustav img/2.png'
import img3 from './images/ustav img/3.png'
import img4 from './images/ustav img/4.png'
import img5 from './images/ustav img/5.png'
import img6 from './images/ustav img/6.png'
import img7 from './images/ustav img/7.png'
import img8 from './images/ustav img/8.png'
import img9 from './images/ustav img/9.png'
import img10 from './images/ustav img/10.png'
import img11 from './images/ustav img/11.png'
import ustav from './ustav.pdf'

function Ustav() {
  return (
    <div className='container'>
        <div className='layout'>
            <div className='title'>УСТАВ</div>
            <div className='gallery'>
                <div ><img className='ustav-img' src={img1} alt='pic'/></div>
                <div ><img className='ustav-img' src={img2} alt='pic'/></div>
                <div ><img className='ustav-img' src={img3} alt='pic'/></div>
                <div ><img className='ustav-img' src={img4} alt='pic'/></div>
                <div ><img className='ustav-img' src={img5} alt='pic'/></div>
                <div ><img className='ustav-img' src={img6} alt='pic'/></div>
                <div ><img className='ustav-img' src={img7} alt='pic'/></div>
                <div ><img className='ustav-img' src={img8} alt='pic'/></div>
                <div ><img className='ustav-img' src={img9} alt='pic'/></div>
                <div ><img className='ustav-img' src={img10} alt='pic'/></div>
                <div ><img className='ustav-img' src={img11} alt='pic'/></div>
            </div>
            <a className="download-button" href={ustav} download="Устав НПП - Булгаре.pdf">Свали Устав</a>
        </div>
    </div>
  )
}

export default Ustav