const React = require('react');
const Link = require('react-router-dom').Link;

const experts = [
    { id: 0, name: "Troelsen", tag: "tro" },
    { id: 2, name: "Brødrene Price", tag: "brp" },
    { id: 3, name: "Rasmus", tag: "ras" }
];

class Experts extends React.Component {
    render() {
        return (
            <div>
                <h1>List of experts</h1>
                <ul>{
                    experts.map((expert, index) => {
                        return <li key={expert.id}><Link
                            to={`/expert/${expert.tag}`}
                        >
                            {expert.name}
                        </Link></li>
                    })
                }</ul>
            </div>
        )
    }
}

module.exports = Experts;