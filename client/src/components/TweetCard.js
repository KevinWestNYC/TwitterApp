import React from 'react'
import heart from './heart.jpg'
import retweet from './retweet.jpg'
import comment from './comment.jpg'
import verified from './twitterverified.jpg'

export default function TweetCard(props) {

    let data = props.data;
    console.log(data.includes);

    return (
        //clicking the tweet will send you to tweet on twitter site 
        <div className="container">
            <div id="tweet-card" className="row" >
                <div className="col-1">
                    <img id="profile-photo" src={data.includes.users.profile_image_url} alt={data.includes.users.name} className="circle responsive-img" />
                </div>
                <div id="tweet-body" className="col-11">
                    <div id="twitter-name" className="row">
                        <p>
                            <span id="bold-name">{data.includes.users.name} {data.verified = true ? <img src={verified}/> : null}</span>
                            <span> </span>
                            <span className="grey">{`@${data.includes.users.screen_name}`} </span>
                            <span className="grey">∙ {data.created_at}</span>
                        
                        </p>
                    </div>
                    <div className="row">
                        <span>{data.text}</span>
                    </div>
                    <div className="row">
                        <p id="icon-bar">
                        <span className="icon"><img className="icon-image"src={comment}/> 2 </span>
                        <span className="icon"><img className="icon-image"src={retweet}/> 3 </span>
                        <span className="icon"><img className="icon-image"src={heart}/> 4 </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
