const React = require('react');
const Link = require('react-router-dom').Link;

 class Layout extends React.Component {
    render() {
        return(
        <div className="app-container">
            <header>
                <Link to="/">
                    <img className="logo" src="img/react-logo.png" style={{ height: 50 }}/>
                </Link>
            </header>
            <div className="app-content">{this.props.children}</div>
            <footer>
                <p>
                    This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
                </p>
            </footer>
        </div>
      );
    }
}

module.exports = Layout;