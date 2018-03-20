const React = require('react');
const ReactRouter = require('react-router-dom');
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Topics = require('./TopicsPage');

const Experts = require('./Experts');
const NotFound = require('./NotFound');
const Layout = require('./Layout');

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Experts} />
                <Route path="/expert/:id" component={Topics} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    )
};

module.exports = App;