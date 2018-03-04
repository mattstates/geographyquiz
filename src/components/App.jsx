import React, { Component } from 'react';
import Header from './layout/Header.jsx';
import GameConsole from './gameConsole/GameConsole.jsx';
import Footer from './layout/Footer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                <h1>Geo Quizzed</h1>
                <GameConsole />
                <Footer />

                <style jsx>{`
					h1 {
						font-weight: 200;
						text-align: center;
					}
				`}</style>
            </React.Fragment>
        );
    }
}

export default App;
