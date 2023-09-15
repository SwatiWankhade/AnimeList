import React, { useEffect, useState } from "react";
import axios from 'axios';

const RightContent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://myanimelist.p.rapidapi.com/anime/top/airing',
                headers: {
                  'X-RapidAPI-Key': 'a6f52ddfd0msha7e516472cb40f8p12d8cdjsnaf478de91b22',
                  'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                //   console.log(response.data);
                  setData(response.data);
              } catch (error) {
                  console.error(error);
              }
        }

        fetchData();
    }, []);
    // console.log(data);
    return (
        
        <div className='upMain'>
                <div className='upHead'>
                    <h2>Top Airing Anime</h2>
                    <a href='#'>More</a>
                </div>
                <div className='cardUp'>
                {
                    data.slice(0,5).map((item,index)=>(
                        <div className='cards' key={index}>
                            <span className='rank'>
                                {item.rank}
                            </span>
                            <img src={item.picture_url}/>
                            <div className='infoUp'>

                                <h3><a href='#'>{item.title}</a></h3>
                                <span>{item.type} scored {item.score}</span>
                                <span >{item.members} members </span>
                            </div>
                            <button className='addBtn'>Add</button>
                    </div>
                    ))
                }
                    
                </div>
            </div>
    );
}

export default RightContent;
