export default function currentQuestion(state = {}, action) {
    switch (action.type) {
        case 'SET_CURRENT_QUESTION':
            return action.question;
        default:
            return state;
    }
}
