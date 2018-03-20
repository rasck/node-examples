const React = require('react');
const Link = require('react-router-dom').Link;
const xhrClient = require('../xhrClient');

class Experts extends React.Component {

    constructor() {
        super();
        this.state = { experts: undefined };
    }

    componentDidMount() {
       
        xhrClient.get('/expert')
            .then(response => {
                this.setState({ experts: response.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderExperts() {
        const experts = this.state.experts;
        if (experts) {
            return (
                <ul>{
                    this.state.experts.map((expert, index) => {
                        return <li key={expert.id}><Link
                            to={`/expert/${expert.tag}`}
                        >
                            {expert.name}
                        </Link></li>
                    })
                }</ul>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>List of experts</h1>
                {this.renderExperts()}
            </div>
        )
    }
}

module.exports = Experts;