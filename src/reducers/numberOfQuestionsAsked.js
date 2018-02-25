export default function numberOfQuestionsAsked(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_QUESTIONS_ASKED':
            return action.count + 1;
        default:
            return state;
    }
}
