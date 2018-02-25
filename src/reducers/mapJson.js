export default function mapJson(state = {}, action) {
    switch (action.type) {
        case 'LOAD_MAP':
            return action.mapJson;
        default:
            return state;
    }
}
