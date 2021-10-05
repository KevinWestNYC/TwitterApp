import React, { useState, useEffect } from 'react'
import axios from 'axios';
import GalleryTweetCard from './components/GalleryTweetCard';
import UserBioBox from './components/UserBioBox';
// import LiveTweetList from './components/LiveTweetList'


export default function TweetGallery() {

    const [sulkData, setSulkData] = useState([])
    const [sulkBioData, setSulkBioData] = useState([])
    const [dogFeelingsData, setDogFeelingsData] = useState([])
    const [dogFeelingsBioData, setDogFeelingsBioData] = useState([])
    const [factRetrieverData, setFactRetrieverData] = useState([])
    const [factRetrieverBioData, setFactRetrieverBioData] = useState([])
    const [conanData, setConanData] = useState([])
    const [conanBioData, setConanBioData] = useState([])

    useEffect(() => {
        getAllData()
    },[]) 

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
    
    async function getSulkData() {
        await axios.get('/api/sulk')
        .then(response => setSulkData(response.data))
   }

    async function getSulkBioData() {
        await axios.get('/api/sulkBio')
        .then(response => setSulkBioData(response.data))
    }

    async function getDogFeelingsData() {
        await axios.get('/api/dogFeelings')
        .then(response => setDogFeelingsData(response.data))
    }

    async function getDogFeelingsBioData() {
        await axios.get('/api/dogFeelingsBio')
        .then(response => setDogFeelingsBioData(response.data))
    }

    async function getFactRetrieverData() {
        await axios.get('/api/factRetriever')
        .then(response => setFactRetrieverData(response.data))
    }

    async function getFactRetrieverDataBioData() {
        await axios.get('/api/factRetrieverBio')
        .then(response => setFactRetrieverBioData(response.data))
    }

    async function getConanData() {
        await axios.get('/api/conan')
        .then(response => setConanData(response.data))
    }

    async function getConanBioData() {
        await axios.get('/api/conanBio')
        .then(response => setConanBioData(response.data))
    }

    let sulkBio = <div>
        <UserBioBox bioData={sulkBioData} />
    </div>
    
    let sulkCards = <div>
      {sulkData.map((x, i) =>
        <GalleryTweetCard key={i} data={x} />
      )}
      </div>

    let dogFeelingsCards = <div>
    {dogFeelingsData.map((x, i) =>
    <GalleryTweetCard key={i} data={x} />
    )}
    </div>

    let dogFeelingsBio = <div>
    <UserBioBox bioData={dogFeelingsBioData} />
    </div>

    let factRetrieverCards = <div>
    {factRetrieverData.map((x, i) =>
    <GalleryTweetCard key={i} data={x} />
    )}
    </div>

    let factRetrieverBio = <div>
    <UserBioBox bioData={factRetrieverBioData} />
    </div>

    let conanCards = <div>
    {conanData.map((x, i) =>
    <GalleryTweetCard key={i} data={x} />
    )}
    </div>

    let conanBio = <div>
    <UserBioBox bioData={conanBioData} />
    </div>

    let loading = <div>
    <p className="flow-text">Loading...</p>
    </div>

    let getAllData = () => {
        getSulkData()
        getSulkBioData()
        getDogFeelingsData()
        getDogFeelingsBioData()
        getFactRetrieverData()
        getFactRetrieverDataBioData()
        getConanData()
        getConanBioData()
    }

    return (
        <div className="container-fluid">
            <h1 className="page-title">Twitter Gallery</h1>
            <div className="row">
                <div id="tweet-column" className="tweet-column col-3">
                    {sulkBio}
                    {
                        sulkData.length > 0 ? sulkCards : loading
                    }
                </div>
                <div id="tweet-column" className="tweet-column col-3">
                    {dogFeelingsBio}
                    {
                        dogFeelingsData.length > 0 ? dogFeelingsCards : loading
                    }
                </div>
                <div id="tweet-column" className="tweet-column col-3">
                    {factRetrieverBio}
                    {
                        factRetrieverData.length > 0 ? factRetrieverCards : loading
                    }
                </div>
                <div id="tweet-column" className="tweet-column col-3">
                    {conanBio}
                    {
                        conanData.length > 0 ? conanCards : loading
                    }
                </div>
                
            </div>
        </div>
    )
}
