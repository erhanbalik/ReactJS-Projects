import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Currencies from '../Components/Currencies'
import Detail from '../Components/Detail'
import Home from './Home'
import { motion } from 'framer-motion'
const Pages = () => {
  return (
    <motion.div className='pages' 
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{delay:1}}
      >
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/currencies' element={<Currencies/>} />
            <Route path='/detail/:type' element={<Detail/>} />
        </Routes>
    </motion.div>
  )
}

export default Pages