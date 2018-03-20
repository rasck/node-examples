const Express = require('express');
const app = Express();
const path = require('path');

app.use(Express.static(path.join(__dirname, 'public')));

app.listen(5000);