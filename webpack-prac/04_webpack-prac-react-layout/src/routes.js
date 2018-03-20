const React = require('react');
const ReactRouter = require('react-router-dom');
const Route = ReactRouter.Route;
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;
const IndexRoute = ReactRouter.IndexRoute;

const ComputerScienceTopcis = require('./components/ComputerScienceTopics');
const RecipeTopics = require('./components/RecipeTopics');
const Experts = require('./components/Experts');
const NotFound = require('./components/NotFound');
const Layout = require('./components/Layout');

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Experts} />
                            <Route path="/expert/tro" component={ComputerScienceTopcis} />
                            <Route path="/expert/brp" component={RecipeTopics} />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </div>
            </Router>
        )
    }
}

module.exports = Routes;

