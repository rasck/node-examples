const express = require("express");

var app = express();

app.use("/assets", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/book/:id", (req, res) => {
  res.render("book", { id: req.params.id });
});

app.get("/api/book/:id", (req, res) => {
  res.json({ id: 0, title: "C#" });
});

app.listen(3000, "127.0.0.1", () => {
  console.log(`listens on port 3000`);
});
