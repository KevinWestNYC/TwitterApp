const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const axios = require("axios");
const config = require("dotenv").config();
const token = process.env.BEARER_TOKEN;
const app = express();

const tokenService = require("./token-service");
tokenService.getToken();

app.use(express.static(path.join(__dirname, "client", "build")));

const dadJokesEndpoint =
  "https://api.twitter.com/2/users/905028905026846720/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified";
const dadJokeBioEndpoint =
  "https://api.twitter.com/2/users/905028905026846720?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified";
const dogFeelingsEndpoint =
  "https://api.twitter.com/2/users/846137120209190912/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified";
const dogFeelingsBioEndpoint =
  "https://api.twitter.com/2/users/846137120209190912?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified";
const factRetrieverEndpoint =
  "https://api.twitter.com/2/users/55637356/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified";
const factRetrieverBioEndpoint =
  "https://api.twitter.com/2/users/55637356?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified";
const conanEndpoint =
  "https://api.twitter.com/2/users/115485051/tweets?max_results=25&expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url,verified";
const conanBioEndpoint =
  "https://api.twitter.com/2/users/115485051?user.fields=created_at,description,location,name,profile_image_url,public_metrics,url,username,verified";

app.get("/api/search", async (req, res) => {
  const data = [];
  await axios
    .get(
      `https://api.twitter.com/2/tweets/search/recent?query=-is%3Aretweet%20${req.query.text}&tweet.fields=public_metrics,created_at&expansions=author_id&user.fields=profile_image_url,verified`
    )
    .then((response) => {
      data.push(response.data);
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/api/dadJoke", async (req, res) => {
  const data = [];
  await axios
    .get(dadJokesEndpoint)
    .then((response) => {
      data.push(response.data);
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/api/dadJokeBio", async (req, res) => {
  const bioData = [];
  await axios
    .get(dadJokeBioEndpoint)
    .then((response) => {
      bioData.push(response.data);
      res.send(bioData);
    })
    .catch((error) => console.log(error));
});

app.get("/api/dogFeelings", async (req, res) => {
  const data = [];
  await axios
    .get(dogFeelingsEndpoint)
    .then((response) => {
      data.push(response.data);
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/api/dogFeelingsBio", async (req, res) => {
  const bioData = [];
  await axios
    .get(dogFeelingsBioEndpoint)
    .then((response) => {
      bioData.push(response.data);
      res.send(bioData);
    })
    .catch((error) => console.log(error));
});

app.get("/api/factRetriever", async (req, res) => {
  const data = [];
  await axios
    .get(factRetrieverEndpoint)
    .then((response) => {
      data.push(response.data);
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/api/factRetrieverBio", async (req, res) => {
  const bioData = [];
  await axios
    .get(factRetrieverBioEndpoint)
    .then((response) => {
      bioData.push(response.data);
      res.send(bioData);
    })
    .catch((error) => console.log(error));
});

app.get("/api/conan", async (req, res) => {
  const data = [];
  await axios
    .get(conanEndpoint)
    .then((response) => {
      data.push(response.data);
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/api/conanBio", async (req, res) => {
  const bioData = [];
  await axios
    .get(conanBioEndpoint)
    .then((response) => {
      bioData.push(response.data);
      res.send(bioData);
    })
    .catch((error) => console.log(error));
});

app.get("/*", (req, res) => 
res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

