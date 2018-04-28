const axios = require("axios");
const router = require("express").Router();

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&";


router.get("/articles", (req, res) => {
  console.log(queryURLBase)
  axios
    .get(queryURLBase, { params: req.query })
    .then(({ data: { response } }) => res.json(response))
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data.response))
    // })
    .catch(err => res.status(422).json(err));
});

// router.post("/articles", (req, res) => {
//   axios
//     .post({queryURLBase}, { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// router.delete("/", (req, res) => {
//   axios
//     .post({queryURLBase}, { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

module.exports = router;