import React from "react";
import LeftContent from "./LeftContentPage";
import RightContent from "./RightContentPage";
import '../css/contentPage.css';
import Upcomming from "./TopUpcomming";
import MostPopular from "./MostPopular";
import onLoginRight from "../components/onLoginRight";
// import Recommendation from "../components/Recommendation";

const Home = ()=>{
    return(
        <section>
           <div className="conatainer">
            <div className="mainHead">
                <h1>Welcome to MyAnimeList.net!</h1>
            </div>
            <div className="mainContent">
                <div className="leftSide">                   
                    <LeftContent/>
                </div>

              <div className="rightSide">
                   <onLoginRight/>
                   <RightContent/>  
                   <Upcomming/>     
                   <MostPopular/>   
                            
                   </div>
            </div>
           </div> 
        </section>
    );
}

export default Home;