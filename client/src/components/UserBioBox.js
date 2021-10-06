import React from 'react'
import verified from './twitterverified.jpg'
import twitterPin from './twitter_pin.jpg'
import twitterCalendar from './twitter_calendar.jpg'

export default function UserBioBox({ bioData }) {
    // let userBioData = bioData;
    // console.log({userBioData});
    let tweet = bioData
    console.log(tweet);

    function parseTwitterDate(tdate) {
        let system_date = new Date(Date.parse(tdate));
        let dateArray = system_date.toString().split(' ')
        // console.log(system_date.toString().split(' '))
        return `${dateArray[1]} ${dateArray[3]}`
        //Thu Feb 18 2010 15:17:16 GMT-0500 (Eastern Standard Time)
    }

    const tweetBio = tweet.map((tweet) => {
    return (
        <div id="tweet-card" className="container ">
            <div  className="row" >
                <div className="col-3">
                    <img id="bio-profile-photo" src={tweet.data.profile_image_url} alt={tweet.data.name} className="circle responsive-img" />
                </div>
                <div id="bio-name-plate" className="col-9">
                    <div className="row">
                        <span id="bio-bold-name">{tweet.data.name} {tweet.data.verified === true ? <img src={verified}/> : null}</span>
                    </div>
                    <div className="row">
                        <span className="grey">{`@${tweet.data.username}`} </span>
                    </div>
                </div>
            </div> 
            <div className="row">
                <span id="bio-description">{tweet.data.description}</span>
            </div> 
            <div className="row">
                {tweet.data.location ? 
                <span id="bio-location-and-created-row"><span id="bio-location"><img className="icon-image"src={twitterPin}/>{tweet.data.location}</span> <img className="icon-image"src={twitterCalendar}/>Joined {parseTwitterDate(tweet.data.created_at)}</span>
                : <span id="bio-location-and-created-row"><img className="icon-image"src={twitterCalendar}/>Joined {parseTwitterDate(tweet.data.created_at)}</span> }
                {/* <span className="col-6"><img className="icon-image"src={twitterCalendar}/>{parseTwitterDate(tweet.data.created_at)}</span> */}
            </div>  
            <div className="row">
                    <span id="bio-follow-row"><span id="bio-following"> {tweet.data.public_metrics.following_count} Following</span> {tweet.data.public_metrics.followers_count} Followers</span>
                    {/* <span className="col-6 "> {tweet.data.public_metrics.followers_count} Followers</span> */}
            </div>
        </div>
    )
    });
    return <div>{tweetBio}</div>
}

{/* <img className="icon-image"src={twitterPin}/>
<img className="icon-image"src={twitterCalendar}/> */}
