const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const config = require("dotenv").config()
const token = process.env.BEARER_TOKEN;
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))


//to search for specific user :'from%3Amattbarrows'
const theSulkEndpoint = "https://api.twitter.com/2/users/24008967/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"
const sulkBioEndpoint = "https://api.twitter.com/2/users/24008967?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified"
const dogFeelingsEndpoint = "https://api.twitter.com/2/users/846137120209190912/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"
const dogFeelingsBioEndpoint = "https://api.twitter.com/2/users/846137120209190912?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified"
const factRetrieverEndpoint = "https://api.twitter.com/2/users/55637356/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"
const factRetrieverBioEndpoint = "https://api.twitter.com/2/users/55637356?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified"
const conanEndpoint = "https://api.twitter.com/2/users/115485051/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"
const conanBioEndpoint = "https://api.twitter.com/2/users/115485051?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified"

app.get("/api/search", async (req, res) => {
  const data = [];  
  await axios
      .get(`https://api.twitter.com/2/tweets/search/recent?query=-is%3Aretweet%20${req.query.text}&tweet.fields=public_metrics,created_at&expansions=author_id&user.fields=profile_image_url,verified`, {headers: { Authorization: ` Bearer ${token}`,}})
      .then((response) => {
        data.push(response.data);
        res.send(data);
      })
      .catch((error) => console.log(error));
  });

  app.get("/api/sulk", async (req, res) => {
    const data = [];  
    await axios
        .get(theSulkEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
        .then((response) => {
          data.push(response.data);
          res.send(data);
        })
        .catch((error) => console.log(error));
    });

    app.get("/api/sulkBio", async (req, res) => {
      const bioData = [];  
      await axios
          .get(sulkBioEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
          .then((response) => {
            bioData.push(response.data);
            res.send(bioData);
          })
          .catch((error) => console.log(error));
      });  
    
    app.get("/api/dogFeelings", async (req, res) => {
      const data = [];  
      await axios
          .get(dogFeelingsEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
          .then((response) => {
            data.push(response.data);
            res.send(data);
          })
          .catch((error) => console.log(error));
      });

      app.get("/api/dogFeelingsBio", async (req, res) => {
        const bioData = [];  
        await axios
            .get(dogFeelingsBioEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
            .then((response) => {
              bioData.push(response.data);
              res.send(bioData);
            })
            .catch((error) => console.log(error));
        });

      app.get("/api/factRetriever", async (req, res) => {
        const data = [];  
        await axios
            .get(factRetrieverEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
            .then((response) => {
              data.push(response.data);
              res.send(data);
            })
            .catch((error) => console.log(error));
        });

        app.get("/api/factRetrieverBio", async (req, res) => {
          const bioData = [];  
          await axios
              .get(factRetrieverBioEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
              .then((response) => {
                bioData.push(response.data);
                res.send(bioData);
              })
              .catch((error) => console.log(error));
          });

        app.get("/api/conan", async (req, res) => {
          const data = [];  
          await axios
              .get(conanEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
              .then((response) => {
                data.push(response.data);
                res.send(data);
              })
              .catch((error) => console.log(error));
          });

          app.get("/api/conanBio", async (req, res) => {
            const bioData = [];  
            await axios
                .get(conanBioEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
                .then((response) => {
                  bioData.push(response.data);
                  res.send(bioData);
                })
                .catch((error) => console.log(error));
            });