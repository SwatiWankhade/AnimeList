import React from 'react';

const ContentFirst = ()=>{
    return(
        <div className='contentFirst'>
        <div className='headCF'>
        <h3>MALxJapan -More than just anime-</h3>   
        <span className='viewMoreCF'>     
        <a href='https://mxj.myanimelist.net/?_gl=1*1f3r9qt*_ga*MzA3MzQ4MjAzLjE2OTQ0NDEyMjk.*_ga_26FEP9527K*MTY5NDcxMDM2Ni4yMC4xLjE2OTQ3MTIxODIuNTEuMC4w' >
            view more
        </a>
        </span>
        </div>
       
        <div className='itemsInCF'>
        <div className='itemCF'>
        <a href='https://mxj.myanimelist.net/bgdm?utm_source=MAL&utm_medium=top_mxj_bgdm&utm_campaign=bgdm&_gl=1*1oubr3q*_ga*MzA3MzQ4MjAzLjE2OTQ0NDEyMjk.*_ga_26FEP9527K*MTY5NDcxMDM2Ni4yMC4xLjE2OTQ3MTMyNzcuNTAuMC4w'>
           
              <img src='images/img1.jpg'/>              
              <div className="infoCF">BanG Dream! It’s My GO!!!!! Trivia Giveaway</div>              
           
         </a>
         </div>

         <div className='itemCF'>
         <a href='https://mxj.myanimelist.net/otsukai?utm_source=MAL&utm_medium=top_mxj_otsukai2306-2&utm_campaign=otsukai2306&_gl=1*olpugb*_ga*MzA3MzQ4MjAzLjE2OTQ0NDEyMjk.*_ga_26FEP9527K*MTY5NDcxMDM2Ni4yMC4xLjE2OTQ3MTMyNzcuNTAuMC4w'>
          
              <img src='images/img2.png' />              
              <div className="infoCF">Request the item you’ve been looking for on Otsukai - get 10% off</div>              
         
         </a>
         </div>
         <div className='itemCF'>
         <a href='https://mxj.myanimelist.net/animeartacademy/?utm_source=MAL&utm_medium=top_mxj_animeartacademy&_gl=1*olpugb*_ga*MzA3MzQ4MjAzLjE2OTQ0NDEyMjk.*_ga_26FEP9527K*MTY5NDcxMDM2Ni4yMC4xLjE2OTQ3MTMyNzcuNTAuMC4w'>
           
              <img src='images/img3.png' />              
              <div className="infoCF">Learn how to draw anime & manga from Japanese pros🎨</div>              
          
          
         </a>
         </div>
         </div>

        </div>
    );
}

export default ContentFirst;