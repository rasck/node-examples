const React = require('react');
const ReactDOM = require('react-dom');
const Topics = require('./components/ComputerScienceTopics');
const Routes = require('./routes');

window.onload = () => {
    ReactDOM.render(<Routes />,document.getElementById("app"))
};