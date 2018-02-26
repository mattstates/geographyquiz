export default function applicationReducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_LOGGED_IN_STATUS':
            return { ...state, loggedIn: action.loggedIn };
        default:
            return state;
    }
}
