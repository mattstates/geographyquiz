import React, { Component } from 'react';
import Header from './layout/Header.jsx';
import GameConsole from './gameConsole/GameConsole.jsx';
import Privacypolicy from './PrivacyPolicy/PrivacyPolicy.jsx';
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
                    <Link to="/game">Game</Link> <Link to="/login">Login</Link> <Link to="/privacypolicy">Privacy</Link>
                </nav>
                <h1>Geo Quizzed</h1>
                <Route path="/game" component={GameConsole} /> {/* <GameConsole /> */}
                <Route path="/privacypolicy" component={Privacypolicy} />
                <Route path="/login" component={LoginTest} />
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
function LoginTest() {
    return (
        <div>
            <form action="createuser" method="post">
                <input name="firstName" placeholder="firstName" />
                <input name="lastName" placeholder="lastName" />
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <input type="submit" value="try it" />
            </form>

            <a href="/oauth/google">Login With Google</a>
        </div>
    );
}

export default App;
