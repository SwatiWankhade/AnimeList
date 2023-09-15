import React from "react";
// import { Link } from "react-router-dom";
import '../DropDwon.css';
import { FaSistrix } from "react-icons/fa6";


const Menu = () => {
    let icoStyle = {fontWeight: "bold" , backgroundColor: '#353535',
        border: '#121212 0 solid'
       }
    return (
        <section className="menu">
            <div >
                <ul className="navList">
                    <li>
                        <div className="dropdown">
                            <button className="dropdown-button">Anime</button>
                            <div className="dropdown-content">
                                <option>Anime Search</option>
                                <option>Top Anime</option>
                                <option >Seasonal Anime</option>
                                <option >Videos</option>
                                <option >Reviews</option>
                                <option >Recommendation</option>
                                <option >2023 Challenge</option>
                                <option >Fantancy Anime League</option>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="dropdown">
                            <button className="dropdown-button">Manga</button>
                            <div className="dropdown-content">
                                <option value="charecters">Manga Search</option>
                                <option value="people">Top Manga</option>
                                <option value="companies">Manga Store</option>
                                <option value="mangaStore">Reviews</option>
                                <option value="news">News</option>
                                <option value="featureArticle">Recommendation</option>
                                <option value="forum">2023 Challenge</option>
                                
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="dropdown">
                            <button className="dropdown-button">Community</button>
                            <div className="dropdown-content">
                                <option value="charecters">Interest Stack</option>
                                <option value="people">Forum</option>
                                <option value="companies">Clubs</option>
                                <option value="mangaStore">Blogs</option>
                                <option value="news">Users</option>
                                
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="dropdown">
                            <button className="dropdown-button">Industry</button>
                            <div className="dropdown-content">
                                <option value="charecters">News</option>
                                <option value="people">Featured Article</option>
                                <option value="companies">People</option>
                                <option value="mangaStore">Charecters</option>
                                <option value="news">Companies</option>
                                <option value="featureArticle">MAL X JAPAN</option>
                                
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="dropdown">
                            <button className="dropdown-button">Watch</button>
                            <div className="dropdown-content">
                                <option value="charecters">Episode Videos</option>
                                <option value="people">Anime Trailers</option>
                                
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="dropdown">
                            <button className="dropdown-button">Read</button>
                            <div className="dropdown-content">
                                <option value="charecters">Manga Store</option>
                                
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="dropdown">
                            <button className="dropdown-button">Help</button>
                            <div className="dropdown-content">
                                <option value="charecters">About</option>
                                <option value="people">Support</option>
                                <option value="companies">Advertising</option>
                                <option value="mangaStore">FAQ</option>
                                <option value="news">Report</option>
                                <option value="featureArticle">Staff</option>
                                <option value="forum">MAL Supporter</option>
                               
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="navDropSearch">
                <select className="navDrop">
                    <option value="all">All</option>
                    <option value="anime">Anime</option>
                    <option value="manga">Manga</option>
                    <option value="charecters">Charecters</option>
                    <option value="people">People</option>
                    <option value="companies">Companies</option>
                    <option value="mangaStore">MangaStore</option>
                    <option value="news">News</option>
                    <option value="featureArticle">Feature Article</option>
                    <option value="forum">Forum</option>
                    <option value="clubs">Clubs</option>
                    <option value="user">User</option>
                </select>
                <input type="text" placeholder="Search Anime ,Manga ,and more..." className="searchField" />
                
                <button className="searchbtn">
                <FaSistrix style={icoStyle} />
                </button>
            </div>

            {/* <h1>React Hover Dropdown Example</h1> */}
            {/* <Dropdown /> */}

        </section>
    );
}

export default Menu;