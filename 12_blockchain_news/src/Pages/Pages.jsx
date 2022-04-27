import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Currencies from '../Components/Currencies'
import Detail from '../Components/Detail'
import Home from './Home'

const Pages = () => {
  return (
    <div className='pages'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/currencies' element={<Currencies/>} />
            <Route path='/detail/:type' element={<Detail/>} />
        </Routes>
    </div>
  )
}

export default Pages