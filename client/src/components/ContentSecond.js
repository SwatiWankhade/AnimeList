import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from './Slider';
import '../css/Slider.css';


const ContentSecond = () => {
    const [imgData, setImgData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://myanimelist.p.rapidapi.com/anime/top/favorite',
                headers: {
                    'X-RapidAPI-Key': 'a6f52ddfd0msha7e516472cb40f8p12d8cdjsnaf478de91b22',
                    'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const imageUrls = response.data.slice(0, 20).map(item => item.picture_url);
                setImgData(imageUrls);
            } catch (error) {
                console.error(error);
            }

        }

        fetchData();
    }, []);


    return (
        <div style={{ marginTop: "2rem" }}>
            <div className='upHead'>
                <h2>Summer 2023 Anime</h2>
                <a href='#'>More</a>
            </div>
            <Slider images={imgData}/>
        </div>
    );
}

export default ContentSecond;