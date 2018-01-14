import React from 'react';
import GameConsole from './GameConsole.jsx';
import Selector from './Selector.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableMaps: ['world'],
            questions: []
        };
    }
    render() {
        return (
            <React.Fragment>
                <h1>Geo Quizzed</h1>
                <Selector availableMaps={this.state.availableMaps} />
                <GameConsole questions={this.state.questions} />
                <style jsx>{`
                    h1 {
                        font-weight: 200;
                        text-align: center;
                    }
                `}</style>
            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch('/getMaps')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ availableMaps: json.mapsList });
            });
    }
}