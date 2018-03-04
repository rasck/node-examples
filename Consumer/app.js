const Request = require("request");

Request.get(
  "https://www.goodreads.com/book/review_counts.json?isbns=9781484230176",
  (err, result) => {
    if (err) return console.log(err);
    const books = JSON.parse(result.body).books;
    console.log(books[0]);
  }
);
