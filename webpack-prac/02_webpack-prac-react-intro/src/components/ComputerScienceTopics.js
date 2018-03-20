const React = require('react');

const topics = [
    'C#',
    'Angular',
    'React',
    'SQL',
    'Java'
]

class ComputerScienceTopics extends React.Component {
    render() {
        return (
            <div>
                <h2>Computer science topics</h2>
                <ul className="topics">{
                    topics.map((topic,index) => {
                       return <li className="topic" key={index}>{topic}</li>
                    })   
                }</ul>
            </div>
        );
    }
}

module.exports = ComputerScienceTopics;
