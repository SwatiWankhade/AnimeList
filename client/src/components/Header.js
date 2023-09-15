import React, { useState } from "react";
import { Outlet,Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaEnvelope,FaBell } from "react-icons/fa";


const Header = ()=>{
    // const [styleAd,setStyleAd] = useState('showAdd');
    // const handleAdd =()=>{
    //   setStyleAd('hideAdd')
    // }
   
   const navigate = useNavigate();
  const hanldleLogin=()=>{
    navigate('/login');
  }
  const handleSignup=()=>{
    navigate('/signup');
  }


  let icoStyle = 
  {
    fontSize:'1.5rem',
    paddingRight: '.8rem',
    paddingLeft: '.8rem',
    borderRight: '#212121 1px solid',             
        
  }
    return(
        <section className="header">
           <a href="/" className="link-logo">MyAnimeList</a>
           <div className="logo">
            <img src="images/logo.png" alt="logo" />
           </div>
           <div className="right-head">
            <button className='hideAd' >Hide Ads</button>
            <button className="login" onClick={hanldleLogin} >
           Login
            </button>
            <button className="signUp" onClick={handleSignup}>Sign Up</button>

            {/* <FaBars style={icoStyle}/>
            <FaEnvelope style={icoStyle}/>
            <FaBell style={icoStyle}/>
            <select  className="dropdown-con">
              <option className="dropOpt">username</option>
              <option>Profile</option>
              <option>Friends</option>
              <option>Clubs</option>
              <option>Revies</option>
              <option>Recommendations</option>
              <option>Intereset Stacks</option>
              <option>Blog Posts</option>
              <option>Bookshelf</option>
              <option>Account Settings</option>
              <option>Preferences</option>
              <option>Logout</option>
            </select> */}
           </div>
        </section>
    );
}

export default Header;