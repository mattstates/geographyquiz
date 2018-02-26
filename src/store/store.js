import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer.js';

// TODO: Write some method to populate initial state?
// Initial state needs to get:
/*
    List of available maps
    if a default map is loaded, it also has to generate the questions for that map
*/
const defaultState = {
    applicationReducer: {
        loggedIn: false
    },
    gameConsoleReducer: {
        attemptCount: 0,
        correctAnswerCount: 0,
        currentCountry: '',
        currentMap: 'world',
        currentQuestion: '',
        loggedIn: false,
        mapJson: null,
        numberOfQuestionsAsked: 0,
        previousQuestion: '',
        questions: [],
        score: 0,
        selectedCountry: null
    }
};

const store = createStore(rootReducer, defaultState);

export default store;
