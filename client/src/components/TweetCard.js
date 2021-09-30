import React from 'react'
import heart from './heart.jpg'
import retweet from './retweet.jpg'
import comment from './comment.jpg'
import verified from './twitterverified.jpg'

export default function TweetCard(props) {

    let data = props.data;
//     let tweetText;
//     let tweetCreatedAt;
//    data.data.map((tweetData) => {
//        tweetText = tweetData.text;
//        tweetCreatedAt = tweetData.created_at
//    })



    console.log(data)

    return (
        //clicking the tweet will send you to tweet on twitter site 
        <div className="container">
            <div id="tweet-card" className="row" >
            {data.includes.users.length > 0
             ? data.includes.users.map((users) => (    
                <div className="col-1">
                    <img id="profile-photo" src={users.profile_image_url} alt={users.name} className="circle responsive-img" />
                </div>
                )) :null}
                <div id="tweet-body" className="col-11">
                    <div id="twitter-name" className="row">
                    {data.includes.users.length > 0
             ? data.includes.users.map((users) => (
                        <p>
                            
                            <span id="bold-name">{users.name} {users.verified === true ? <img src={verified}/> : null}</span>
                            <span> </span>
                            <span className="grey">{`@${users.username}`} </span>
                               
                            
                            <span className="grey">∙ {data.created_at}</span>
                            
                        </p>
                        )) :null}
                    </div> 
                    <div className="row">
                    {data.data.length > 0 ? data.data.map((data) => (    
                        <span>{data.text}</span>
                        )) :null}
                    </div>
                    <div className="row">
                        <p id="icon-bar">
                        <span className="icon"><img className="icon-image"src={comment}/> 0 </span>
                        <span className="icon"><img className="icon-image"src={retweet}/> 0 </span>
                        <span className="icon"><img className="icon-image"src={heart}/> 0 </span>
                        </p>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

// {data.public_metrics.reply_count}
// {data.public_metrics.retweet_count}
// {data.public_metrics.like_count}