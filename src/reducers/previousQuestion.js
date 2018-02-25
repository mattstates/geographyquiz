export default function previousQuestion(state = {}, action) {
    switch (action.type) {
        case 'SET_PREVIOUS_QUESTION':
            return action.question;
        default:
            return state;    
    }
}