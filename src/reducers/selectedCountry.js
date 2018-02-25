export default function selectedCountry(state = {}, action) {
    switch (action.type) {
        case 'SELECTED_COUNTRY':
            return action.country;
        default:
            return state;
    }
}