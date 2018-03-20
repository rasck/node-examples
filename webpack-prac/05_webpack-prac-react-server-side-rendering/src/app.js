const Express = require('express');
const app = Express();
const path = require('path');
const React = require('react');
const bodyParser = require('body-parser');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('./components/App');


const proxy = require('express-http-proxy');

const apiProxy = proxy('http://localhost:3001/api', {
    proxyReqPathResolver: function (req) {
        // not sure why i should use baseUrl
        var p = require('url').parse(req.baseUrl).path;
        return p;
        // localhost:3000/api/expert --> expert
    }
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(Express.static(path.join(__dirname, '../public')));

// proxy all api request to our rest api
app.use('/api/*', apiProxy);

// universal routing and rendering
app.get('*', (req, res) => {
    console.log('server side render trigger!');
    let markup = '';
    let status = 200;

    const context = {};
    // We could also load react components asynchronous
    // https://www.npmjs.com/package/react-async-render
    // require us to be using redux though


    // Also renderToString is synchronous which make this really really slow
    // https://medium.com/@markuretsky/asynchronous-react-server-side-rendering-813a934a1ad1
    markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    if(context.url) {
        console.log('redirect!');
        return res.redirect(302, context.url);
    }

    if(context.is404) {
        status = 404;
    }

    return res.status(status).render('index', { markup });
})

app.listen(3000, () => {
    console.log('listens on port 3000');
});