import React from 'react';

export default (props) => {
    return (
        <React.Fragment>
            <div className="scoreRow">
				Score is {props.score} out of {props.attemptCount} tries.
                <br />
				Percentage correct is: {props.attemptCount > 0 ? (props.score / props.attemptCount * 100).toFixed(2) : 0}%
            </div>
            <style jsx>{`
				div.scoreRow {
					display: flex;
					justify-content: space-around;
					margin: 32px auto;
				}
			`}</style>
        </React.Fragment>
    );
};
