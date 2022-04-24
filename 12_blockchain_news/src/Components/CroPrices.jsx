import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CroPrices = () => {

    const [coins, setCoins] = useState([]);

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
    <div className='coin-container'>
        {
            coins.map((coin) => (
                <div className='singleCoin'>
                    {coin.price}
                </div>
            ))
        }
    </div>
)
}

export default CroPrices