import * as actions from './actions';
const initialState = {
    isLoading: false,
    error: { status: '', statusText: '' }
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOADING:
            return { ...state, isLoading: true };
        case actions.LOADED:
                return { ...state, isLoading: false };
        case actions.FAILED:
                return { ...state, isLoading: false, error: action.payload };
        case actions.CLEAR_ERROR:
                return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default reducer;