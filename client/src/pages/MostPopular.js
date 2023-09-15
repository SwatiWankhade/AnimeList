import React, { useEffect, useState } from "react";
import axios from 'axios';

const MostPopular = ()=>{
   
    const [popular,setPopular] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
          
            const options = {
                method: 'GET',
                url: 'https://myanimelist.p.rapidapi.com/anime/top/bypopularity',
                headers: {
                  'X-RapidAPI-Key': 'a6f52ddfd0msha7e516472cb40f8p12d8cdjsnaf478de91b22',
                  'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                //   console.log(response.data);
                setPopular(response.data);
              } catch (error) {
                  console.error(error);
              }
        }

        fetchData();
    },[]);
    console.log(popular);

     
    return(
        <>
        <div className='upMain'>
                <div className='upHead'>
                    <h2>Most Popular Anime</h2>
                    <a href='#'>More</a>
                </div>
                <div className='cardUp'>
                {
                    popular.slice(0,10).map((item,index)=>(
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

        </>
    )
}

export default MostPopular;