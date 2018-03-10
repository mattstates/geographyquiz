import React, { Component } from 'react';
import Header from './layout/Header.jsx';
import GameConsole from './gameConsole/GameConsole.jsx';
import Privacypolicy from './PrivacyPolicy/PrivacyPolicy.jsx';
import Welcome from './welcome/Welcome.jsx';
import Login from './login/Login.jsx';
import Footer from './layout/Footer.jsx';
import { Route, Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                <nav>
                    <Link to="/">Home</Link> <Link to="/game">Game</Link> <Link to="/login">Login</Link>
                </nav>
                <h1>Geo Quizzed</h1>
                <Route exact path="/" component={Welcome} />
                <Route path="/game" component={GameConsole} /> {/* <GameConsole /> */}
                <Route path="/privacypolicy" component={Privacypolicy} />
                <Route path="/login" component={Login} />
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
