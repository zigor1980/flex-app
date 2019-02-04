function appReducer() {
    return function customReducer(state, action) {
        if (!state) {
            return {
                worker: null,
            };
        }

        switch (action.type) {
        case 'IMAGES_FETCH_PENDING':
            return {
                ...state,
                worker: { name: '1' },
            };
        default:
            return state;
        }
    };
}

export default appReducer;
