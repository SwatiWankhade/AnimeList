// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Recommendation = ()=>{
     
//     const [data,setData] = useState([]);
//     useEffect(()=>{
//         const dataFetch = async ()=>{
//             const options = {
//                 method: 'GET',
//                 url: 'https://myanimelist.p.rapidapi.com/anime/recommendations/1',
//                 headers: {
//                   'X-RapidAPI-Key': 'a3b16e9fbamsh3fd4c897e293129p173c1ajsnaf9e91b839a7',
//                   'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
//                 }
//               };
              
//               try {
//                   const response = await axios.request(options);
//                 //   console.log(response.data.recommendations);
//                 setData(response.data.recommendations);

//               } catch (error) {
//                   console.error(error);
//               }
//         }
//         dataFetch();
//     },[]);
//     // console.log(data);
//     return(
//         <div className="recom">
//            <div className='headCF'>
//         <h3>Latest Anime Recommendations</h3>   
//         <span className='viewMoreCF'>     
//         <a href='#' >
//             view more
//         </a>
//         </span>
//         </div>
//         <div className="recContent">
//             <div className="recItem">
//                 <table style={{width:"100%"}}>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     <div className="recPic"></div>
//                                     <h3 className="recH3"></h3>
//                                     <div className="recLink"></div>
//                                 </td>
//                             </tr>
//                         </tbody>
//                 </table>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Recommendation;

import React from "react";

const AnimeRecommendations = () => {
  // Sample data for anime recommendations
  const recommendations = [
    {
        img:'images/rec1.webp',
        img2:'images/rec2.webp',
        animeTitle1: "Plastic Memories",
        animeTitle2:"Angel Beats!",
        description: "Both are sweet, emotional and funny dramas with some action elements. They have a similar vibe and characters. ",
      author: "MermaidTsundere",
      timeAgo: "4 hours ago",
    },
    {
      img:'images/rec3.webp',
      img2:'images/rec4.webp',
      animeTitle1: "Plastic Memories",
      animeTitle2:"Angel Beats!",
      description: "Both are sweet, emotional and funny dramas with some action elements. They have a similar vibe and characters. ",
    author: "MermaidTsundere",
    timeAgo: "4 hours ago",
  },
  {
    img:'images/rec5.webp',
    img2:'images/rec6.webp',
    animeTitle1: "Plastic Memories",
    animeTitle2:"Angel Beats!",
    description: "Both are sweet, emotional and funny dramas with some action elements. They have a similar vibe and characters. ",
  author: "MermaidTsundere",
  timeAgo: "4 hours ago",
},
{
  img:'images/rec7.webp',
  img2:'images/rec8.webp',
  animeTitle1: "Plastic Memories",
  animeTitle2:"Angel Beats!",
  description: "Both are sweet, emotional and funny dramas with some action elements. They have a similar vibe and characters. ",
author: "MermaidTsundere",
timeAgo: "4 hours ago",
},
  ];

  return (
    <div className="recommendations-container"  style={{width:"50rem"}}>
      <h1>Anime Recommendations</h1>
      <div className="recommendations">
        {recommendations.map((rec, index) => (
         
          <div className="recommendation" key={index} >
              <div className="leftright">
              <div className="recleft">
              <img src={rec.img} style={{height:"auto", width:"20%", border:"1px solid black"}} />
              <div className="recInfo">
              <p className="recConP">If you liked</p>
              <p className="title"> {rec.animeTitle1}</p>
              <button className="recBtn">Add</button>
              </div>
              </div>
              <div className="recright">     
                  
              <img src={rec.img2} style={{height:"auto", width:"20%", border:"1px solid black"}} />
              <div className="recInfo">
              <p className="recConP">...then you might like</p>
              <p className="title"> {rec.animeTitle2}</p>
              <button className="recBtn">Add</button>
              </div>
              </div>
             
              </div>       
              <p className="desc">{rec.description}</p>
              <p className="auth">
              {rec.author} - {rec.timeAgo}
            </p>            
          </div>          
          
        ))}
      </div>
    </div>
  );
};

export default AnimeRecommendations;
