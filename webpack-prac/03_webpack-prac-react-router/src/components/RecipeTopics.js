const React = require('react');
const Link = require('react-router-dom').Link;

const topics = [
    'Benløse fugle',
    'Brændende kærlighed',
    'Bøf sandwich',
    'Forloren hare'
]

class RecipeTopics extends React.Component {

    render() {
        return (
            <div>
                <h2>Delicous danish recipies</h2>
                <ul>{
                    topics.map((topic, key) => {
                        return (
                            <li key={key} className='topic'>{topic}</li>
                        )
                    })
                }</ul>
                <Link to='/'>Go back to index</Link>
            </div>
        );
    }
}

module.exports = RecipeTopics;