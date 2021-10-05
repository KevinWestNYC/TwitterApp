import React from 'react'
import verified from './twitterverified.jpg'

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

    const tweetBio = tweet.map((tweet, i) => {
    return (
        <div id="tweet-card" className="container ">
            <div  className="row" >
                <div className="col-2">
                    <img id="profile-photo" src={tweet.data.profile_image_url} alt={tweet.data.name} className="circle responsive-img" />
                </div>
                <div className="col-10">
                    <div className="row">
                        <span id="bold-name">{tweet.data.name} {tweet.data.verified === true ? <img src={verified}/> : null}</span>
                    </div>
                    <div className="row">
                        <span className="grey">{`@${tweet.data.username}`} </span>
                    </div>
                </div>
            </div> 
            <div className="row">
                <span>{tweet.data.description}</span>
            </div> 
            <div className="row">
                <span>{tweet.data.location}</span>
                <span>{parseTwitterDate(tweet.data.created_at)}</span>
            </div>  
            <div className="row">
                    <span className="icon"> {tweet.data.public_metrics.following_count} </span>
                    <span className="icon"> {tweet.data.public_metrics.followers_count} </span>
            </div>
        </div>
    )
    });
    return <div>{tweetBio}</div>
}

{/* <img className="icon-image"src={comment}/>
<img className="icon-image"src={retweet}/> */}
