import React from 'react'
import heart from './heart.jpg'
import retweet from './retweet.jpg'
import comment from './comment.jpg'
import verified from './twitterverified.jpg'

export default function TweetCard(props) {

    let data = props.data;

    let tweetData = data.data;
    let userData = data.includes.users;

    function mergeArrayObjects(arr1,arr2){
        for(let i = 0; i < arr1.length; i++){
           for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[i]){
                //merging two objects
              return Object.assign({},arr1,arr2[i])
            }
           }
        }
      }
      console.log(mergeArrayObjects(tweetData, userData));
console.log({tweetData});

    //     let tweetText;
//     let tweetCreatedAt;
//    data.data.map((tweetData) => {
//        tweetText = tweetData.text;
//        tweetCreatedAt = tweetData.created_at
//    })



    // console.log(data)

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
                               
                           <span> 
                           
                            <span className="grey">∙ {data.created_at}</span>
                            
                            </span>
                        </p>
                        )) :null} 
                    </div> 
                    <div className="row">
                    {data.data.length > 0 ? data.data.map((data) => (    
                        <span>{data.text}</span>
                        )) :null}
                    </div>
                    <div className="row">
                    {data.data.length > 0 ? data.data.map((data) => (
                        <p id="icon-bar">
                        <span className="icon"><img className="icon-image"src={comment}/> {data.public_metrics.reply_count} </span>
                        <span className="icon"><img className="icon-image"src={retweet}/> {data.public_metrics.retweet_count} </span>
                        <span className="icon"><img className="icon-image"src={heart}/> {data.public_metrics.like_count} </span>
                        </p>
                       )) :null}    
                    </div>
                </div>
            </div>
        </div>
    )
}

// {data.public_metrics.reply_count}
// {data.public_metrics.retweet_count}
// {data.public_metrics.like_count}