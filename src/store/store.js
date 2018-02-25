import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer.js';

// TODO: Write some method to populate initial state?
// Initial state needs to get:
/*
    List of available maps
    if a default map is loaded, it also has to generate the questions for that map
*/
const defaultState = {
    score: 0,
    correctAnswerCount: 0,
    numberOfQuestionsAsked: 0,
    currentQuestion: '',
    previousQuestion: '',
    currentCountry: '',
    loggedIn: false,
    currentMap: 'world',
    mapJson: null,
    questions: [],
    selectedCountry: null,
    attemptCount: 0
};

const store = createStore(rootReducer, defaultState);

export default store;
