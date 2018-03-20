const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;

const MyApp = () => {
    return(
        <Router> 
            <App />
        </Router>
    );
}

window.onload = () => {
    ReactDOM.render(<MyApp />,document.getElementById("app"))
};