const React = require('react');
const ReactDOM = require('react-dom');
const Topics = require('./components/ComputerScienceTopics');


window.onload = () => {
    ReactDOM.render(<Topics />,document.getElementById("app"))
};