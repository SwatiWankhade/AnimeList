import React from "react";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";
import AboveFooter from "./AboveFooter";


const Footer = () => {
    return (
            <section className="footer">
                <AboveFooter/> 
                <div className="footUpper">
                    <div className="footerupLeft">
                        <p className="follow">Follow Us</p>
                        <FaInstagramSquare className="ico" />
                        <BiLogoFacebookSquare className="ico" />
                        <FaTwitterSquare className="ico" />
                        <BsDiscord className="ico" />
                    </div>
                    <div className="footerupRight">
                        <p className="follow">Get the App</p>
                        <img src="/images/download-app.png" width="25%" />
                        <img src="/images/downG.png" width="25%" />
                    </div>

                </div>

                <div className="footerDown">
                    <div className="footIconList">
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Press Room
                            </li>
                            <li>
                                Support
                            </li>
                            <li>
                                Advertising
                            </li>
                            <li>
                                FAQ
                            </li>
                            <li>
                                Terms
                            </li>
                            <li>
                                Privacy
                            </li>
                            <li>
                                Cookie
                            </li>
                            <li>
                                Notice at Collection
                            </li>
                            <li>
                                Sitemap
                            </li>
                        </ul>
                        <button className="footBtn">Login</button>
                        <button className="footBtn">Sign Up</button>
                    </div>
                    <div className="end">
                        <p className="copyright">
                            MyAnimeList.net is a property of MyAnimeList Co.,Ltd. ©2023 All Rights Reserved.
                        </p>
                        <p className="terms">
                            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                        </p>
                    </div>
                </div>

            </section>
    );
}

export default Footer;
