const React = require('react');
const Link = require('react-router-dom').Link;

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>Ressource not found!</h1>
                <h3><Link to='/'>Go back to index</Link></h3>
            </div>
        )
    }
}

module.exports = NotFound;