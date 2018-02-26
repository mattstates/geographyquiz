import React from 'react';

export default (props) => {
    return (
        <React.Fragment>
            <p>
				Question {props.questionCount}: Where is <strong>{props.currentQuestion}</strong>?
            </p>
            <style jsx>{`
				p {
					text-align: center;
				}
			`}</style>
        </React.Fragment>
    );
};
