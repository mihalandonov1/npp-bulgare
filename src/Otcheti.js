import React from 'react'
import './Otcheti.css'
import gfo1 from './files/GFO 2024/Годишен финансов отчет-page-001.jpg'
import gfo2 from './files/GFO 2024/Годишен финансов отчет-page-002.jpg'
import gfo3 from './files/GFO 2024/Годишен финансов отчет-page-003.jpg'
import gfo4 from './files/GFO 2024/Годишен финансов отчет-page-004.jpg'
import gfo5 from './files/GFO 2024/Годишен финансов отчет-page-005.jpg'
import gfo6 from './files/GFO 2024/Годишен финансов отчет-page-006.jpg'
import gfo7 from './files/GFO 2024/Годишен финансов отчет-page-007.jpg'
import gfo8 from './files/GFO 2024/Годишен финансов отчет-page-008.jpg'
import prilojenie1 from './files/GFO 2024 Prilojenie/Приложение към Годишен финансов отчет-page-001.jpg'
import prilojenie2 from './files/GFO 2024 Prilojenie/Приложение към Годишен финансов отчет-page-002.jpg'
import prilojenie3 from './files/GFO 2024 Prilojenie/Приложение към Годишен финансов отчет-page-003.jpg'
import gfo from './Годишен финансов отчет.pdf'
import gfoprilojenie from './Приложение към Годишен финансов отчет.pdf'

function Otcheti() {
  return (
    <div className='container'>
        <div className='layout'>
            <div className='title'>ОТЧЕТИ</div>
            <div className='results'>
              <div className='title2'><h3>2024 година</h3></div>
              <h3>Годишен финансов отчет</h3>
              <div className='result-box-otcheti'>
                <img className='gfo-img' src={gfo1} alt='pic'/>
                <img className='gfo-img' src={gfo2} alt='pic'/>
                <img className='gfo-img' src={gfo3} alt='pic'/>
                <img className='gfo-img' src={gfo4} alt='pic'/>
                <img className='gfo-img' src={gfo5} alt='pic'/>
                <img className='gfo-img' src={gfo6} alt='pic'/>
                <img className='gfo-img' src={gfo7} alt='pic'/>
                <img className='gfo-img' src={gfo8} alt='pic'/>
              </div>
              <h3>Годишен финансов отчет - приложение</h3>
              <div className='result-box-otcheti'>
                <img className='gfo-img' src={prilojenie1} alt='pic'/>
                <img className='gfo-img' src={prilojenie2} alt='pic'/>
                <img className='gfo-img' src={prilojenie3} alt='pic'/>
              </div>

              <div>
              <a className="download-button" href={gfo} download="НПП Булгаре - ГФО 2024.pdf">Свали ГФО 2024</a>
              <a className="download-button" href={gfoprilojenie} download="НПП Булгаре - ГФО 2024 (Приложение).pdf">Свали Приложение към ГФО</a>
              </div>
              <div className='media-partners'>
                <p>Медийни Партньори</p>
                <p>Диян Бояджиев ЕООД</p>
              </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default Otcheti