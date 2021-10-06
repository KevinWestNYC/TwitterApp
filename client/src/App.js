import './style.css';
import React from 'react'
import { Route } from 'react-router';
import Home from "./Home"
import TwitterSearch from "./TwitterSearch"
import TweetGallery from "./TweetGallery"
import NavBar from "./components/NavBar"


export default function App() {
  return (
    <div className="App">
      <div id="app-header">
        <h1 id="main-title">Tweet Tweet</h1>
        <NavBar />
      </div>
      <div id="app-body">
        <Route exact path="/" component={Home} />
        <Route exact path="/TwitterSearch" component={TwitterSearch} />
        <Route exact path="/TweetGallery" component={TweetGallery} />
      </div>
    </div>
  )
}

