const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const config = require("dotenv").config()
const token = process.env.BEARER_TOKEN;
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))


//const endpointUrl = "https://api.twitter.com/2/tweets/search/recent?query=${req.query.text}&tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url,verified";
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent?query=49ers&tweet.fields=public_metrics,created_at&expansions=author_id&user.fields=profile_image_url,verified";
//to search for specific user :'from%3Amattbarrows'
const barrowsEndpoint = "https://api.twitter.com/2/users/35246396/tweets?max_results=5&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"
const dogFeelingsEndpoint = "https://api.twitter.com/2/users/846137120209190912/tweets?max_results=5&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"
const factRetrieverEndpoint = "https://api.twitter.com/2/users/55637356/tweets?max_results=5&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"
const conanEndpoint = "https://api.twitter.com/2/users/115485051/tweets?max_results=5&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified"


app.get("/api/search", async (req, res) => {
  const data = [];  
  await axios
      .get(endpointUrl, {headers: { Authorization: ` Bearer ${token}`,}})
      .then((response) => {
        data.push(response.data);
        res.send(data);
      })
      .catch((error) => console.log(error));
  });

  app.get("/api/barrows", async (req, res) => {
    const data = [];  
    await axios
        .get(barrowsEndpoint, {headers: { Authorization: ` Bearer ${token}`,}})
        .then((response) => {
          data.push(response.data);
          res.send(data);
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