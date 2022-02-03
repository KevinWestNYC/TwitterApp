import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
      <div id="nav-bar" className="container-fluid">
        <div className="row">
          <div className=" col-xs-12 col-md-8">
            <h1 className="nav-bar-item" id="main-title">
              Tweet Tweet
            </h1>
          </div>
          <div className="nav-bar-div col-xs-12 col-md-4" >
            <div className="nav-bar-item " id="link-list">
              <ul>
                <li className="nav-bar-links">
                  <Link
                    className="nav-bar-link-text"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-bar-links">
                  <Link
                    className="nav-bar-link-text "
                    style={{ textDecoration: "none" }}
                    to="/TweetGallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-bar-links">
                  <Link
                    className="nav-bar-link-text"
                    style={{ textDecoration: "none" }}
                    to="/TwitterSearch"
                  >
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
