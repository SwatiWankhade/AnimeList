import React from "react";

const onLoginRight = ()=>{
    return (
        <>
<h1>My Statistics</h1>
<div className="statInfo">
    <div className="statInfoLeft">
        <p>Anime Entries</p>
        <p>Manga Entries</p>
        <p>AnimeList Views</p>
        <p>MangaList Views</p>
        <p>Profile Views</p>
        <p>Signature Clicks</p>
    </div>
    <div className="statInfoLeft">
        <div className="lef">
            <p>0</p>
            <a href="#">Add entries</a>
        </div>
        <div className="lef">
            <p>0</p>
            <a href="#">Add entries</a>
        </div>
        <div className="lef">
            <p>0</p>
            {/* <a href="#">Add entries</a> */}
        </div>
        <div className="lef">
            <p>0</p>
            {/* <a href="#">Add entries</a> */}
        </div>
        <div className="lef">
            <p>4</p>
            <a href="#">My Profile</a>
        </div>
        <div className="lef">
            <p>0</p>
        </div>

    </div>
</div>
        </>
    )
}

export default onLoginRight;