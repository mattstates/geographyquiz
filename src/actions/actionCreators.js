export function UPDATE_SCORE(answeredCorrectly) {
    return {
        type: 'UPDATE_SCORE',
        answeredCorrectly
    };
}

export function LOAD_MAP(mapJson) {
    return {
        type: 'LOAD_MAP',
        mapJson
    };
}

export function UPDATE_MAP(selectedMap) {
    return {
        type: 'UPDATE_MAP',
        selectedMap
    };
}

export function UPDATE_QUESTIONS_ASKED(count) {
    return {
        type: 'UPDATE_QUESTIONS_ASKED',
        count
    };
}

export function SET_CURRENT_QUESTION(question) {
    return {
        type: 'SET_CURRENT_QUESTION',
        question
    };
}

export function SET_PREVIOUS_QUESTION(question) {
    return {
        type: 'SET_PREVIOUS_QUESTION',
        question
    };
}

export function UPDATE_QUESTIONS(questions) {
    return {
        type: 'UPDATE_QUESTIONS',
        questions: [...questions]
    };
}

export function SELECTED_COUNTRY(country) {
    return {
        type: 'SELECTED_COUNTRY',
        country
    };
}

export function UPDATE_ATTEMPT_COUNT(attemptCount) {
    return {
        type: 'UPDATE_ATTEMPT_COUNT',
        attemptCount
    }
}