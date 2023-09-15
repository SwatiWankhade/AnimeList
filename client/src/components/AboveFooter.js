import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/Abovefooter.css';

const AboveFooter = () => {
    const [top, setTop] = useState([]);
    const [air, setAir] = useState([]);
    const [pop, setPop] = useState([]);

    useEffect(() => {
        const topData = async () => {

            const options = {
                method: 'GET',
                url: 'https://myanimelist.p.rapidapi.com/anime/top/upcoming',
                headers: {
                  'X-RapidAPI-Key': 'a6f52ddfd0msha7e516472cb40f8p12d8cdjsnaf478de91b22',
                  'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  setTop(response.data);
              } catch (error) {
                  console.error(error);
              }
        }
        topData();
    },[])

    useEffect(()=>{
        const airData = async ()=>{
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
                  setAir(response.data);
              } catch (error) {
                  console.error(error);
              }
        }
        airData();
    },[]);

    useEffect(()=>{
        const popData = async ()=>{
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
                  setPop(response.data);
              } catch (error) {
                  console.error(error);
              }
        }
        popData();
    },[]);

    return (
        <div className="mainAboveFooter">
          <div className="topContainer">
          <span className="topHead">
            <h3>Top Anime</h3>
            <a href="#">More</a>
            </span>
            <ol>
                {
                    top.slice(0,5).map((item,index)=>(
                        <li className="topItem"><a href="#" key={index}>{item.title}</a></li>
                    ))
                }
            </ol>
          </div>

          <div className="topContainer">
          <span className="topHead">
            <h3>Top Airing Anime</h3>
            <a href="#">More</a>
            </span>
            <ol>
                {
                    air.slice(0,5).map((item,index)=>(
                        <li className="topItem"><a href="#" key={index}>{item.title}</a></li>
                    ))
                }
            </ol>
          </div>


          <div className="topContainer">
          <span className="topHead">
            <h3>Most Popular Anime</h3>
            <a href="#">More</a>
            </span>
            <ol>
                {
                    pop.slice(0,5).map((item,index)=>(
                        <li className="topItem"><a href="#" key={index}>{item.title}</a></li>
                    ))
                }
            </ol>
          </div>
        </div>
    );
}

export default AboveFooter;