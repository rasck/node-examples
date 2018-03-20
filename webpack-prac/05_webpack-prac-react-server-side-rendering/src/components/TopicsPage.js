const React = require('react');
const Link = require('react-router-dom').Link;
//const TOPICS = require('../data');
const xhrClient = require('../xhrClient');

class TopicsPage extends React.Component {
    constructor() {
        super();
        this.state = { topic: {} };
    }

    componentDidMount() {
        xhrClient.get('topic/' + this.props.match.params.id)
            .then(response => {
                this.setState({ topic: response.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderTopics() {
         const topic = this.state.topic;
        if (topic.topics) {
            return (
            <ul>{
                topic.topics.map((topic, key) => {
                    return (
                        <li key={key} className='topic'>{topic}</li>
                    )
                })
            }</ul>
            )
        }
    }

    render() {
        const topic = this.state.topic;
        return (
            <div>
                <div>
                    <h2>{topic.name}</h2>
                    <h3>{topic.expert} is an expert within:</h3>
                     {this.renderTopics()}
                    <Link to='/'>Go back to index</Link>
                </div>
            </div>
        );
    }
}

module.exports = TopicsPage;

