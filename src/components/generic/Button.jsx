import React from 'react';

export default (props) => {
    return (
        <React.Fragment>
            <button disabled={props.disabled} className={props.classes.join(' ')} onClick={props.clickFunc}>
                {props.buttonText}
            </button>
            <style jsx>{`
					button {
                        background-color: ${globalColors.red};
                        border: none;
                        border-radius: 6px;
                        color: #eee;
                        font-weight: bold;
                        outline: none;
                        padding: 8px 16px;
                        position: relative;
                        text-align: center;
                        text-decoration: none;
                        text-transform: uppercase;
                    }
                    button.submitAnswer {
                        background-color: ${globalColors.green};
                        color: ${globalColors.black};
                    }
                    button:hover {
                        cursor: pointer;
                    }
                    button.disabled {
                        color: ${globalColors.black};
                        cursor: default;
                        pointer-events; none;
                        background-color: ${globalColors.yellow};
                    }
				`}</style>
        </React.Fragment>
    );
};
