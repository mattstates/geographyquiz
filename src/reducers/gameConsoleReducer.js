export default function gameConsoleReducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_ATTEMPT_COUNT':
            return { ...state, attemptCount: action.attemptCount + 1 };
        case 'SET_CURRENT_QUESTION':
            return { ...state, currentQuestion: action.question };
        case 'LOAD_MAP':
            return { ...state, mapJson: action.mapJson };
        case 'UPDATE_QUESTIONS_ASKED':
            return { ...state, numberOfQuestionsAsked: action.count + 1 };
        case 'SET_PREVIOUS_QUESTION':
            return { ...state, previousQuestion: action.question };
        case 'UPDATE_QUESTIONS':
            return { ...state, questions: action.questions };
        case 'UPDATE_SCORE':
            return { ...state, score: action.answeredCorrectly ? state.score + 1 : state.score };
        case 'SELECTED_COUNTRY':
            return { ...state, selectedCountry: action.country };
        default:
            return state;
    }
}
