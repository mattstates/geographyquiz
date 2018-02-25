export default function attemptCount(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_ATTEMPT_COUNT':
            return action.attemptCount + 1;
        default:
            return state;
    }
}
