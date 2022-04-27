import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsApi from '../APIs/NewsApi';

const Detail = () => {
    const [coins, setCoins] = useState([]);

    const getCoins = () => {
        const coin = localStorage.getItem('coins')
        setCoins(JSON.parse(coin));
    }
    useEffect(() => {
        getCoins();
    },[])
    
  return (
    <div className='detail-container'>
        {
            coins.map((coin, index) => {
                return (
                    <div className='detail-coin' key={index}>
                        <div className='detail-coinName'>
                            <div className='detail-info'>
                                <img src={coin.logo} alt={coin.coin} />
                                {coin.coin}
                                <p className='detail-symbol'>{coin.symbol}</p>
                            </div>
                                <div className='detail-price'>
                                    <p className='name'>{coin.coin} Price ({coin.symbol})</p>
                                    <p className='price'>
                                    {coin.price}
                                    </p>
                                </div>
                        </div>
                        <div className='detail-graph'>
                            <p>Overview</p>
                            <a href={coin.href} target="_blank" >
                            <img src={coin.graph} alt={coin.href} />
                            </a>
                        </div>
                        
                    </div>
                )
            })
        }
        <NewsApi/>
    </div>
  )
}

export default Detail