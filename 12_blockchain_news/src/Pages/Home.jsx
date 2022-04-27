import React from 'react'
import NewsApi from '../APIs/NewsApi';
import CroPrices from '../Components/CroPrices';

const Home = () => {
  return (
    <div>
        <CroPrices />
        <NewsApi />
    </div>
  )
}

export default Home