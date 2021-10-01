import React, { useState, useEffect } from 'react'
import tweet1 from './images/tweet1.jpg'
import tweet2 from './images/tweet2.jpg'
import tweet3 from './images/tweet3.jpg'
import ninersSched from './images/49ersSched.jpg'
import axios from 'axios';
import TweetCard from './components/TweetCard';
// import LiveTweetList from './components/LiveTweetList'


export default function TweetGallery() {

    const [barrowsData, setBarrowsData] = useState([])
    const [dogFeelingsData, setDogFeelingsData] = useState([])
    const [factRetrieverData, setFactRetrieverData] = useState([])
    const [conanData, setConanData] = useState([])

    useEffect(() => {
        getBarrowsData()
        getDogFeelingsData()
        getFactRetrieverData()
        getConanData()
    },[]) 
    
    async function getBarrowsData() {
        await axios.get('/api/barrows')
        .then(response => setBarrowsData(response.data))
        
    }

    async function getDogFeelingsData() {
        await axios.get('/api/dogFeelings')
        .then(response => setDogFeelingsData(response.data))
        
    }

    async function getFactRetrieverData() {
        await axios.get('/api/factRetriever')
        .then(response => setFactRetrieverData(response.data))
        
    }

    async function getConanData() {
        await axios.get('/api/conan')
        .then(response => setConanData(response.data))
        
    }

    let barrowsCards = <div>
      {barrowsData.map((x, i) =>
        <TweetCard key={i} data={x} />
      )}
      </div>

    let dogFeelingsCards = <div>
    {dogFeelingsData.map((x, i) =>
    <TweetCard key={i} data={x} />
    )}
    </div>

    let factRetrieverCards = <div>
    {factRetrieverData.map((x, i) =>
    <TweetCard key={i} data={x} />
    )}
    </div>

    let conanCards = <div>
    {conanData.map((x, i) =>
    <TweetCard key={i} data={x} />
    )}
    </div>

    let loading = <div>
    <p className="flow-text">Loading...</p>
    </div>

    return (
        <div className="container-fluid">
            <h1 className="page-title">Live</h1>
            <div className="row">
                <div id="tweet-column" className="tweet-column col-3">
                    <h2>Tweets</h2>
                    {
                        barrowsData.length > 0 ? barrowsCards : loading
                    }
                </div>
                <div id="tweet-column" className="tweet-column col-3">
                    <h2>Tweets</h2>
                    {
                        dogFeelingsData.length > 0 ? dogFeelingsCards : loading
                    }
                </div>
                <div id="tweet-column" className="tweet-column col-3">
                    <h2>Tweets</h2>
                    {
                        factRetrieverData.length > 0 ? factRetrieverCards : loading
                    }
                </div>
                <div id="tweet-column" className="tweet-column col-3">
                    <h2>Tweets</h2>
                    {
                        conanData.length > 0 ? conanCards : loading
                    }
                </div>
                
            </div>
        </div>
    )
}
