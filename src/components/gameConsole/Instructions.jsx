import React from 'react';

export default (props) => {
    const selectionType = props.mapType !== 'world' ? 'country' : 'state';
    return (
        <div className='instructions'>
            <p>INSTRUCTIONS: Find the {selectionType} in the map that matches the question. When you have selected
            a {selectionType} use the 'Submit Answer' button to submit your
            answer.</p>
            <style jsx>{`
                div.instructions {
                    text-align: center;
                }
                p {
                    margin: 1rem auto;
                    max-width: ${window.outerWidth > 1000 ? '70%' : '100%'};
                }
            `}
            </style>
        </div>
    );
};