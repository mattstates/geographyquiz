export default function selectedCountry(state = {}, action) {
    switch (action.type) {
        case 'SELECTED_COUNTRY':
            console.log('selectedCountry was updated to: ', action.country);
            return action.country;
        default:
            return state;
    }
}