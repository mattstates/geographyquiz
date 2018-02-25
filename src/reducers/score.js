export default function score(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_SCORE':
            const count = state;
            return action.answeredCorrectly ? count + 1 : count;
        default:
            return state;
    }
}
