import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {IoMdArrowDropup, IoMdArrowDropdown} from 'react-icons/io'
import {useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
const Currencies = () => {

    const [coins, setCoins] = useState([]);
    const [isDown] = useState(true);
    let params = useParams();

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
        storeCoins(params.detail);
    },[params.detail])

    const navigate = useNavigate();

return (
        <motion.div className='currencies-container'
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{delay:.5}}
        >
            <h2>Currencies</h2>
            <div className='curr-header'>
                <p>Coin</p>
                <p>Price</p>
                <p>Graph</p>
            </div>
        {
            coins.map((coin, index) => (
                <div className='curr-container' onClick={() => navigate('/detail/' + coin.symbol)} key={index}>
                    <div className='curr-name'>
                        <img src={coin.logo} alt="" />
                        <p className='coin-name'>{coin.coin}</p>
                    </div>
                    <div className='curr-info'>
                        <p className='coin-status'>
                        {isDown ? <IoMdArrowDropdown/> : <IoMdArrowDropup/>}
                        </p>
                    <p className='curr-price'>{coin.price}</p>
                    </div>
                    <img className='curr-graph' src={coin.graph} alt={coin.coin} />
                </div>
            ))
        }
        </motion.div>
)
}

export default Currencies