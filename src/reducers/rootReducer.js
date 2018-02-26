import { combineReducers } from 'redux';

import applicationReducer from './applicationReducer.js';
import gameConsoleReducer from './gameConsoleReducer.js';

const rootReducer = combineReducers({
    applicationReducer,
    gameConsoleReducer
});

export default rootReducer;
