import React from 'react';
import heart from './heart.jpg';
import retweet from './retweet.jpg';
import comment from './comment.jpg';

export default function GalleryTweetCard({ data }) {
    const { data: tweet } = data;
    const { users } = data.includes;

    function mergeArrayObjects(arr1,arr2){
        return arr1.map((item, i) => {
            return { ...item, ...arr2[i]}
        });
      }
      
    const completeData =  mergeArrayObjects(tweet, users);
      
    function parseTwitterDate(tdate) {
        var system_date = new Date(Date.parse(tdate));
        var user_date = new Date();
        if (K.ie) {
            system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
        }
        var diff = Math.floor((user_date - system_date) / 1000);
        if (diff <= 1) {return "just now";}
        if (diff < 20) {return diff + " seconds ago";}
        if (diff < 40) {return "half a minute ago";}
        if (diff < 60) {return "less than a minute ago";}
        if (diff <= 90) {return "one minute ago";}
        if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
        if (diff <= 5400) {return "1 hour ago";}
        if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
        if (diff <= 129600) {return "1 day ago";}
        if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
        if (diff <= 777600) {return "1 week ago";}
        return "on " + system_date.toString().split(' ').splice(1,3).join(' ');
    }
    
    var K = function () {
        var a = navigator.userAgent;
        return {
            ie: a.match(/MSIE\s([^;]*)/)
        }
    }();

    const chooseRandom = (arr, num) => {
        const randomTweetArray = [];
        for(let i = 0; i < num; ){
           const random = Math.floor(Math.random() * arr.length);
           if(randomTweetArray.indexOf(arr[random]) !== -1){
              continue;
           };
           randomTweetArray.push(arr[random]);
           i++;
        };
        return randomTweetArray;
      };

    console.log(completeData);

    let randomTweets = chooseRandom(completeData, 3)

    const tweets = randomTweets.map((tweet, i) => {
    
    return (
        <div className="container " key ={i}>
            <div id="tweet-card" className="row" >
                <div id="tweet-body" className="col-12">
                    <div className="row">
                        <span>{tweet.text}</span>
                    </div>
                    <div className="row">
                        <p id="icon-bar">
                        <span className="icon"><img className="icon-image"src={comment}/> {tweet.public_metrics.reply_count} </span>
                        <span className="icon"><img className="icon-image"src={retweet}/> {tweet.public_metrics.retweet_count} </span>
                        <span className="icon"><img className="icon-image"src={heart}/> {tweet.public_metrics.like_count} </span>
                        <span className="grey">∙ {parseTwitterDate(tweet.created_at)}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )}
    )
return<div>{tweets}</div>
    
}
