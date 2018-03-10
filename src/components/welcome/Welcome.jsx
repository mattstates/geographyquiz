import React from 'react';

export default (props) => {
    return (
        <React.Fragment>
            <h2>Welcome to GeoQuizzed</h2>
            <p>GeoQuizzed is a geography learning quiz game.</p>
            <style jsx>{`
                h2,
                p {
                    text-align: center;
                }
            `}</style>
        </React.Fragment>
    );
};
