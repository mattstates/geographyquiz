import React from 'react';

export default (props) => {
    return (
        <React.Fragment>
            <div className="scoreRow">
                <div className="score">
                    Score is {props.score} out of {props.attemptCount} tries.
                </div>
                <div className="stats">Percentage correct is: {props.attemptCount > 0 ? (props.score / props.attemptCount * 100).toFixed(2) : 0}%</div>
            </div>
            <style jsx>{`
                div.scoreRow {
                    display: flex;
                    justify-content: space-around;
                    margin: 8px auto;
                }
                .stats, .score {
                    display: inline-block;
                }
            `}</style>
        </React.Fragment>
    );
};
