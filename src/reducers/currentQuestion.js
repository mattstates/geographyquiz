export default function currentQuestion(state = {}, action) {
    // console.log('question was updated');
    switch (action.type) {
        case 'SET_CURRENT_QUESTION':
            console.log('Current Question set to: ', action)
            return action.question;
        default:
            return state;
    }
}
