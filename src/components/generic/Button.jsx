import React from 'react';
import { colors } from '../globalStyles.js';
export default (props) => {
    return (
        <React.Fragment>
            <button disabled={props.disabled} className={props.classes.join(' ')} onClick={props.clickFunc}>
                {props.buttonText}
            </button>
            <style jsx>{`
					button {
                        background-color: ${colors.red};
                        border-radius: 6px;
                        border: none;
                        color: ${colors.gray};
                        font-size: inherit;
                        font-weight: bold;
                        outline: none;
                        padding: 8px 16px;
                        position: relative;
                        text-align: center;
                        text-decoration: none;
                        text-transform: uppercase;
                    }
                    button.submitAnswer {
                        background-color: ${colors.green};
                        color: ${colors.black};
                    }
                    button:hover {
                        cursor: pointer;
                    }
                    button.disabled {
                        background-color: ${colors.yellow};
                        color: ${colors.black};
                        cursor: default;
                        pointer-events: none;
                    }
                    @media (max-width: 450px) {
                        button { max-width: 30%; }
                    }
				`}</style>
        </React.Fragment>
    );
};
