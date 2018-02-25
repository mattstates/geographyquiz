export default function numberOfQuestionsAsked(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_QUESTIONS_ASKED':
            console.log('numberOfQuestionsAsked was updated');
    
            return action.count + 1;
        default:
            return state;
    }
}
