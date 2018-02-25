import { combineReducers } from 'redux';

import score from './score.js';
import correctAnswerCount from './correctAnswerCount.js';
import currentCountry from './currentCountry.js';
import currentMap from './currentMap.js';
import loggedIn from './loggedIn.js';
import currentQuestion from './currentQuestion.js';
import previousQuestion from './previousQuestion.js';
import numberOfQuestionsAsked from './numberOfQuestionsAsked.js';
import mapJson from './mapJson.js';
import questions from './questions.js';
import selectedCountry from './selectedCountry.js';
import attemptCount from './attemptCount.js'

const rootReducer = combineReducers({
    score,
    correctAnswerCount,
    currentCountry,
    selectedCountry,
    currentMap,
    loggedIn,
    currentQuestion,
    numberOfQuestionsAsked,
    mapJson,
    questions,
    attemptCount,
    previousQuestion
});

export default rootReducer;
