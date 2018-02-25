export default function attemptCount(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_ATTEMPT_COUNT':
            console.log('attempt count updated');
            return action.attemptCount + 1;
        default:
            return state;
    }
}
