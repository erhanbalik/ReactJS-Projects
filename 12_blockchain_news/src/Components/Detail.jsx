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
    <div>
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
                                    <p>{coin.coin} Price ({coin.symbol})</p>
                                    {coin.price}
                                </div>
                        </div>
                        <div className='detail-graph'>
                            <a href={coin.href} target="_blank" >
                            <img src={coin.graph} alt={coin.href} />
                            </a>
                        </div>
                        
                    </div>
                )
            })
        }
        <h2>Crypto News</h2>
        <NewsApi/>
    </div>
  )
}

export default Detail