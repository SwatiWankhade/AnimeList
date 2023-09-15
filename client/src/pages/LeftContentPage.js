import React from 'react';
import ContentFirst from '../components/ContentFirst';
import ContentSecond from '../components/ContentSecond';
// import ContentThird from '../components/ContentThird';
// import ContentFourth from '../components/ContentFourth';
import Recommendation from '../components/Recommendation';

const LeftContent = ()=>{
    return(
        <div className='leftSideMain'>
           <ContentFirst/>
           <ContentSecond/>
           <Recommendation/> 
           <ContentFirst/>
           <Recommendation/> 
           <Recommendation/> 
        </div>
    );
}

export default LeftContent;