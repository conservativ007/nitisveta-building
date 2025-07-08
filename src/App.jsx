import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import ozon8 from './assets/ozon-96.svg';
import yandex from './assets/yandex.svg';

import CountdownTimer from './CountdownTimer'

function App() {

  return (
    
      <div id='root' className='flex flex-col gap-10 p-1'>
        <p className='text-2xl text-center'>Сайт временно на техобслуживании.</p>

        <div className="flex items-center justify-center mt-10">
          <CountdownTimer targetDate="2025-07-10T18:00:00" />
        </div>

        <div className='flex justify-center gap-5'>
          <div>
            <a href="https://ozon.ru/seller/niti-sveta-2286902" target="_blank" rel="noopener noreferrer">
              <img
                src={ozon8}
                alt="ozon"
                className=""
              />
            </a>
          </div>
          
          <div className='min-h-[96px]'>
            <a href="https://market.yandex.ru/store--niti-sveta?businessId=138599662" target="_blank" rel="noopener noreferrer">
            <img
                src={yandex}
                alt="yandex"
                className=""
              />
            </a>
          </div>
          
        </div>
      </div>
     
    
  )
}

export default App
