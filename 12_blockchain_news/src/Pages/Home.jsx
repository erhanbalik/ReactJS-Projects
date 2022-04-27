import React from 'react'
import NewsApi from '../APIs/NewsApi';
import CroPrices from '../Components/CroPrices';
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{delay:.5}}
    >
        <CroPrices />
        <NewsApi />
    </motion.div>
  )
}

export default Home