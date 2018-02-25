export default function questions(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_QUESTIONS':
            console.log('Question List was updated');
            return action.questions;
        default:
            return state;
    }
}
