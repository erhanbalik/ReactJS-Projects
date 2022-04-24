import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react'

const NewsApi = () => {
    const [news, setNews] = useState([]);

    const storeData = () => {
        const check = localStorage.getItem('news');

        if(check){
            setNews(JSON.parse(check))
            
        } else {
            const options = {
                method: 'GET',
                url: 'https://crypto-news16.p.rapidapi.com/news/top/100',
                headers: {
                'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
                'X-RapidAPI-Key': 'fd22e7ee69msh1de04a771b1cb5dp16821ejsnad525a26e333'
                }
            };
            
            axios.request(options).then(function (response) {
                localStorage.setItem('news', JSON.stringify(response.data));
                setNews(response.data);
            }).catch(function (error) {
                console.error(error);
            });
            
        }
    }

        useEffect(() =>{
            storeData();
        },[])

  return (
    <div>
        {
            news.map((data) => (
                <div className="news-container">
                    {data.title}
                </div>
            ))
        }
    </div>
  )
}

export default NewsApi