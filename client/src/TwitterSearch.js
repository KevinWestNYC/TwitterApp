import React, { useState, useEffect } from 'react';
import AccountSearchBar from './components/AccountSearchBar';
import axios from 'axios';
import TweetCard from './components/TweetCard';

export default function TwitterSearch() {
    
    const [twitterData, setTwitterData] = useState([]);
    
    function handleSearch(e, query) {
        e.preventDefault();
        setCurrentPageUrl(`https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url,verified`);
      }

      useEffect(() => {
        getData()
    },[])  

    async function getData() {
        await axios.get('/api/search')
        .then(response => setTwitterData(response.data))
        
    }

    let itemsCards = <div>
      {twitterData.map((x, i) =>
        <TweetCard key={i} data={x} />
      )}
      </div>
    
    
    let loading = <div>
      <p className="flow-text">Loading...</p>
     </div>
    
    // console.log({twitterData})

    return (
        <div className="container" >
            <h1 className="page-title">Search</h1>
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <AccountSearchBar handleSearch={handleSearch} />
                    </div>                 
                </div>
                <div className="col-9">
                   <div>
                   { twitterData.length > 0 ? 
                    <h2>Results</h2>
                    : null }
                    </div>
                    <div>
                    {
                        twitterData.length > 0 ? itemsCards : loading
                    }

                    </div>
                </div>
            </div>
        
        </div>
    )
}
