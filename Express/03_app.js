const express = require('express');

var app = express(); 

// If PORT exist use that, otherwise use 3000
var port = process.env.PORT || 3000;

app.listen(port);

// could also leave out the '/' route
app.use((req, res, next) => {
    console.log(`Request url is '${req.url}'`);
    // call the next middleware (get will be the next middleware)
    next();
});

app.use('/assets', express
.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // express will see that it is html
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', (req,res) => {
    // note: this is not json, it is a javascript object
    // that express will convert to json!
    res.json({ firstname : 'Gert', lastname : 'Hansen' });
});

// Pattern matching on id using :id
app.get('/book/:id', (req, res) => {
    // express will see that it is html
    res.send(`<html><head></head><body><h1>Book: ${req.params.id}</h1></body></html>`);
});

// Pattern matching on author using authorId and on book id using :id
app.get('/books/author/:authorId/book/:id', (req, res) => {
    // express will see that it is html
    res.send(`<html><head></head><body><h1>Author: ${req.params.authorId}</h1><h3>Book: ${req.params.id}</h3></body></html>`);
});