import React from 'react';
import Instructions from './Instructions.jsx';
import Map from './Map.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Instructions />
                <Map />
            </div>
        );
    }
}