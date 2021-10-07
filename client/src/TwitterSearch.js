import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TweetCard from './components/TweetCard';

export default function TwitterSearch() {
    
    const [twitterData, setTwitterData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    
    function handleSearch(e) {
        e.preventDefault();
        axios
          .get(`/api/search?text=${searchText}`)
          .then((response) => {
            setTwitterData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        }   

        const onSearch = e => {
            setIsLoading(true)
            handleSearch(e, searchText)
            setSearchText('')
        }
    
        const handleChange = e => {
            setSearchText(e.target.value)
        }

    let itemsCards = <div>
      {twitterData.map((x, i) =>
        <TweetCard key={i} data={x} />
      )}
      </div>
    
    
    let loading = isLoading ? <div>
      <p className="flow-text">Loading...</p>
     </div> : null;

    return (
        <div className="container" >
            <h1 className="page-title">Search</h1>
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        
                        <form onSubmit={onSearch}>
                            <input 
                                type='text'
                                className="form-control"
                                placeholder="Search by keyword or username"
                                value={searchText}
                                onChange={handleChange}
                                autoFocus
                            />
                        </form>
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
