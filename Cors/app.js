const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app = express();

app.use(jsonParser);
// https://www.html5rocks.com/en/tutorials/cors/
// Try comment out this middleware and run some of the Ajax request from the index.html page
app.use(function(req, res, next) {
  // you should state what domains are allowed instead of just every domain - *
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // Try comment out Access-Control-Allow-Methods and do PUT and DELETE requst from the index.html page.
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

let heroList = [{ id: 0, name: "Superman" }];

app.get("/:id", (req, res) => {
  res.json(heroList[req.params.id]);
});

app.post("/", (req, res) => {
  heroList.push(req.body);
  res.json(req.body.id);
});

app.put("/", (req, res) => {
  const index = heroList.findIndex(h => h.id === Number(req.body.id));
  if (index >= 0) {
    heroList[index] = req.body;
    res.status(200);
    return res.send();
  } else {
    res.status(500).send();
  }
});

app.delete("/:id", (req, res) => {
  const index = heroList.findIndex(h => h.id === Number(req.params.id));
  if (index >= 0) {
    heroList = heroList.filter(
      hero => Number(hero.id) !== Number(req.params.id)
    );
    res.status(200).send();
  } else {
    res.status(500).send();
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
