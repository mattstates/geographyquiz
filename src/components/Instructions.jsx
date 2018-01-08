import React from 'react';

export default function Instructions(props) {
    const selectionType = props.mapType !== 'world' ? 'country' : 'state';
    return (
        <div className='instructions'>
            <p>INSTRUCTIONS: Click on the {selectionType} in the map that matches the question. When you have selected a {selectionType} press the 'Enter' key on the keyboard or click the 'Submit Answer' button to submit your answer.</p>
        </div>
    );
}