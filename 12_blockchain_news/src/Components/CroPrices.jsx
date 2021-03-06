import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {IoMdArrowDropup, IoMdArrowDropdown} from 'react-icons/io'

const CroPrices = () => {

    const [coins, setCoins] = useState([]);
    const [isDown] = useState(true);

    const storeCoins = () => {
        const check = localStorage.getItem('coins');

        if(check) {
            setCoins(JSON.parse(check))
        }
        else {
            const options = {
                method: 'GET',
                url: 'https://coin-mc-analyser.p.rapidapi.com/currencies/7d/loss/2.29',
                headers: {
                'X-RapidAPI-Host': 'coin-mc-analyser.p.rapidapi.com',
                'X-RapidAPI-Key': 'fd22e7ee69msh1de04a771b1cb5dp16821ejsnad525a26e333'
                }
            };
            
            axios.request(options).then(function (response) {
                localStorage.setItem('coins', JSON.stringify(response.data));
                setCoins(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
    }
    useEffect(() => {
        storeCoins();
    },[])


return (
        <div className='singleCoin-container'>
        {
            coins.map((coin, index) => (
                <div className='singleCoin' key={index}>
                    <p className='coin-status'>
                    {isDown ? <IoMdArrowDropdown/> : <IoMdArrowDropup/>}
                    </p>
                    <div className='coin-info'>
                    <p>{coin.symbol}</p>
                    <p className='coin-price'>{coin.price}</p>
                    </div>
                </div>
            ))
        }
        </div>
)
}

export default CroPrices