export default function mapJson(state = {}, action) {
    switch (action.type) {
        case 'LOAD_MAP':
            console.log('mapJSON was updated');

            return action.mapJson;
        default:
            return state;
    }
}
