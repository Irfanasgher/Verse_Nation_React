import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <main>
                <div className="first-column">
                       <div className="all"><br/><br/>
                        <div className="poeple">
                            <input type="text" placeholder="&nbsp;&nbsp;Search poeple" />
                            <img className="question-mark" src='/photos/.png' style={{position: "relative", left: "260px", bottom: "27px"}}/>
                            <div className="nav">
                                <div className="nav-link">
                                     <img className="question-mark" src='/photos/.png' />
                                    <a>Nation Timeline</a>
                                </div>
                               
                                <div className="nav-link">
                                    <img className="question-mark" src='/photos/.png' />
                                    <a>Our Member</a>
                                </div>
                                
                                <div className="nav-link">
                                    <img className="question-mark" src='/photos/.png' />
                                    <a>Entrepreneurship</a>
                                </div>
                                
                                <div className="nav-link">
                                    <img className="question-mark" src='/photos/.png' />
                                    <a>Store</a>
                                </div>
                                
                            </div>
                        </div>
                    </div><br/>
                    <h1 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "Open Sans, sans-serif", marginLeft: "25px"}}>Trending Artist</h1>
                    <br/>
                    <div className="artists">
                        <a style={{color: "#FFA50A", fontSize: "14px", float: "right", marginTop: "12px", marginRight: "8px"}}>See all</a>
                        <div className="artist" style={{marginTop: "40px"}}>
                            <div style={{display: "flex", flexDirection: "row"}}> 
                                <img className="question-mark" style={{width: "73px", height: "64px", marginTop: "8px", marginLeft: "8px"}} src='/photos/Rectangle 15.png' />
                                <p>
                                    <div style={{marginLeft: "9px"}}>
                                        <h2>Full name</h2>
                                        <h2 style={{fontSize: "12px", color: "#B1B1B1"}}>100k followers</h2>
                                    </div>
                                        
                                    <button className="ignore-btn">Ignore</button>
                                    <button className="follow-btn">Follow</button>
                                </p>
                            </div>
                        </div>
                        <div className="artist">
                            <div style={{display: "flex", flexDirection: "row"}}> 
                                <img className="question-mark" style={{width: "73px", height: "64px", marginTop: "8px", marginLeft: "8px"}} src='/photos/Rectangle 15.png' />
                                <p>
                                    <div style={{marginLeft: "9px"}}>
                                        <h2>Full name</h2>
                                        <h2 style={{fontSize: "12px", color: "#B1B1B1"}}>100k followers</h2>
                                    </div>
                                        
                                    <button className="ignore-btn">Ignore</button>
                                    <button className="follow-btn">Follow</button>
                                </p>
                            </div>
                        </div>
                        <div className="artist">
                            <div style={{display: "flex", flexDirection: "row"}}> 
                                <img className="question-mark" style={{width: "73px", height: "64px", marginTop: "8px", marginLeft: "8px"}} src='/photos/Rectangle 15.png' />
                                <p>
                                    <div style={{marginLeft: "9px"}}>
                                        <h2>Full name</h2>
                                        <h2 style={{fontSize: "12px", color: "#B1B1B1"}}>100k followers</h2>
                                    </div>
                                        
                                    <button className="ignore-btn">Ignore</button>
                                    <button className="follow-btn">Follow</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="post">
                        <div className="info">
                            <div className="person-info">
                                <img className="avatar" style={{width: "44px", height: "44px", marginTop: "8px", marginLeft: "8px"}} src='/photos/Ellipse 1.png' />
                                <p>
                                    <h2>Full name</h2>
                                    <h2 style={{fontSize: "12px", color: "#B1B1B1"}}>12-Aug-2020 , 05:00pm</h2>
                                </p>
                            </div>
                            <div className="more"> 
                                <img className="more" style={{marginTop: "24px", marginRight: "23px"}} src='/photos/more.png' />
                            </div>
                        </div>
                        <p className="paragraph"> 
                            sed99y made this, also he built this huge tower in the image below using only sticks and a sand box.
                            sed99y made this, also he built this huge tower in the image below using only sticks and a sand box.
                        </p>
                        <br/>
                        <img className="post-image" style={{width: "572px", height: "252px", marginTop: "8px", marginLeft: "25px"}} src='/photos/Rectangle 31.png' />
                        <div className="reactions-controls">
                            <div className="reactions">
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "13px"}} src='/photos/fire.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/poop.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/fist.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/dislike.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/sad.png' />
                            </div>
                            <div className="controls">
                                <button className="repost">Repost</button>
                                <button className="follow">Follow</button>
                            </div>
                        </div>
                    </div>
                    <div className="music-post">
                        <div className="info">
                            <div className="person-info">
                                <img className="avatar" style={{width: "44px", height: "44px", marginTop: "8px", marginLeft: "8px"}} src='/photos/Ellipse 1.png' />
                                <p>
                                    <h2>Full name</h2>
                                    <h2 style={{fontSize: "12px", color: "#B1B1B1"}}>12-Aug-2020 , 05:00pm</h2>
                                </p>
                            </div>
                            <div className="more"> 
                                <img className="more" style={{marginTop: "24px", marginRight: "23px"}} src='/photos/more.png' />
                            </div>
                        </div>
                        <p className="paragraph" style={{display: "flex", flexDirection: "row", position: "relative"}}> 
                            <div className="doing-info">
                                <img className="musical-notes-sticker" style={{width: "10.24px", height: "13.31px", marginTop: "7px", marginRight: "7px"}} src='/photos/Icon ionic-ios-musical-notes.png' />
                                <p  style={{marginTop: "5px"}}>Currently listening to All about that ASS</p>
                            </div>
                            
                            <div className="library">
                                <button className="add-library-btn">Add to Library</button>
                            </div>
                        </p>
                        <br/>
                        <div className="song-poster">
                            <div>
                                <div className="song-info">
                                    <div className="song-details">
                                        <div className="play-btn">
                                            <a><img className="post-image" style={{marginTop: "8px", marginLeft: "16px"}} src='/photos/Icon ionic-ios-play-circle.png' /></a>
                                            <h1 style={{marginTop: "9px", marginLeft: "6px"}}>All about that bass</h1>
                                        </div>
                                        <div className="date-info">
                                            <h2 style={{fontSize: "12px", color: "#B1B1B1", marginRight: "11px", marginTop: "9px"}}>12-Aug-2020, 05:00pm</h2>
                                        </div>
                                    </div>
                                    <div className="player-details">
                                        <img className="post-image" style={{marginTop: "12px", marginLeft: "25px"}} src='/photos/Mask Group 3.png' />
                                    </div>
                                </div>
                            </div>
                            <div className="music-thumbnail">
                                <img className="post-image" style={{width: "188px", height: "143px", marginLeft: "25px"}} src='/photos/Rectangle 225.png' />
                            </div>
                        </div>
                        <div className="reactions-controls">
                            <div className="reactions">
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "13px"}} src='/photos/fire.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/poop.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/fist.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/dislike.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/sad.png' />
                            </div>
                            <div className="controls">
                                <button className="repost">Repost</button>
                                <button className="follow">Follow</button>
                            </div>
                        </div>
                    </div>

                    <div className="music-post" style={{width: "624px", height: "501px"}}>
                        <div className="info">
                            <div className="person-info">
                                <img className="avatar" style={{width: "44px", height: "44px", marginTop: "8px", marginLeft: "8px"}} src='/photos/Ellipse 1.png' />
                                <p>
                                    <h2>Full name</h2>
                                    <h2 style={{fontSize: "12px", color: "#B1B1B1"}}>12-Aug-2020 , 05:00pm</h2>
                                </p>
                            </div>
                            <div className="more"> 
                                <img className="more" style={{marginTop: "24px", marginRight: "23px"}} src='/photos/more.png' />
                            </div>
                        </div>
                        <p className="paragraph" style={{display: "flex", flexDirection: "row", position: "relative"}}> 
                            <div className="doing-info">
                                <img className="musical-notes-sticker" style={{width: "15.02px", height: "13.66px", marginTop: "7px", marginRight: "7px"}} src='photos/Icon material-live-tv.png' />
                                <p  style={{marginTop: "5px"}}>Currently watching All about that ASS</p>
                            </div>
                            
                            <div className="library">
                                <button className="add-library-btn">Add to Library</button>
                            </div>
                        </p>
                        <br/>
                        <div className="video-poster" style={{width: "576px", height: "290px"}}>
                            <div>
                                <img className="post-video" style={{width: "576px", height: "252px", marginTop: "12px", marginLeft: "25px"}} src='/photos/Rectangle 241.png' />
                            </div>
                            <div className="yt-url">
                                <img className="post-image" style={{marginLeft: "7px"}} src='/photos/Icon awesome-globe-asia.png' />
                                <p style={{marginLeft: "7px"}}>https://www.youtube.com/watch?v=ewDSeyWve8M</p>
                            </div>
                        </div>
                        <div className="reactions-controls">
                            <div className="reactions">
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "13px"}} src='/photos/fire.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/poop.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/fist.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/dislike.png' />
                                <img className="post-image" style={{width: "", height: "", marginTop: "8px", marginLeft: "25px"}} src='/photos/sad.png' />
                            </div>
                            <div className="controls">
                                <button className="repost">Repost</button>
                                <button className="follow">Follow</button>
                            </div>
                        </div>
                    </div>

                    <div className="followers-post" style={{}}>
                        <div className="follow-slider" style={{marginLeft: "16px"}}>
                            <img src="/photos/Rectangle 246.png"/>
                            <div className="lower-part">
                                <p>
                                    <h1 style={{fontSize: "16px",fontWeight: "bold"}}>Another Sed</h1>
                                    <h2 style={{fontSize: "12px", color: "#7A7979"}}>200k Followers</h2>
                                </p>
                                <button>Follow</button>
                            </div>
                        </div>

                        <div className="follow-slider">
                            <img src="/photos/Rectangle 249.png"/>
                            <div className="lower-part">
                                <p>
                                    <h1 style={{fontSize: "16px",fontWeight: "bold"}}>This Sed</h1>
                                    <h2 style={{fontSize: "12px", color: "#7A7979"}}>200k Followers</h2>
                                </p>
                                <button>Follow</button>
                            </div>
                            
                        </div>

                        <div className="follow-slider">
                            <img src="/photos/Rectangle 251.png"/>
                            <div className="lower-part">
                                <p>
                                    <h1 style={{fontSize: "16px",fontWeight: "bold"}}>Sed Again</h1>
                                    <h2 style={{fontSize: "12px", color: "#7A7979"}}>200k Followers</h2>
                                </p>
                                <button>Follow</button>
                            </div>
                        </div>

                        <a><img src="/photos/Icon ionic-ios-arrow-forward.png"/></a>
                    </div>
                </div>

                <div className="ads-col">
                    <div className="col-title">
                        <p>ADVERTISING</p>
                    </div>
                    <div className="one-ad">
                            <img src="/photos/Rectangle 69.png" style={{width: "249px", height: "158px"}}/>
                            <h2>Dell Laptop</h2>
                            <h2 className="price">$500</h2>
                    </div>
                    <div className="one-ad">
                            <img src="/photos/Rectangle 72.png" style={{width: "249px", height: "158px"}}/>
                            <h2>Golden Duck</h2>
                            <h2 className="price">$1</h2>
                    </div>
                    <div className="one-ad">
                            <img src="/photos/Rectangle 74.png" style={{width: "249px", height: "158px"}}/>
                            <h2>Some Water</h2>
                            <h2 className="price">$9000</h2>
                    </div>
                </div>
            </main>
         
        );
    }
}

export default Home