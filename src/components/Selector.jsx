import React from 'react';

export default class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMap: 'world' // TODO: fix the state between available maps and active map.
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ activeMap: e.target.value });
    }

    render() {
        const mapsList = this.props.availableMaps.sort().map((mapName, index) => {
            return (
                <option key={index} value={mapName}>
                    {mapName}
                </option>
            );
        });

        return this.props.availableMaps.length > 1 ? (
            <React.Fragment>
                <select value={this.state.activeMap} onChange={this.onChange}>
                    {mapsList}
                </select>
                <style jsx>{`
					select {
						display: block;
						margin: 0 auto;
					}
				`}</style>
            </React.Fragment>
        ) : (
            <div />
        );
    }
}
