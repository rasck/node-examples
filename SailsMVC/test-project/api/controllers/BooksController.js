/**
 * BooksController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index2: function(req, res) {
    Books.find(function(err, books) {
      console.log("fetching them books!");
      res.view("books/index", {
        books: books
      });
    });
  }
};
