import * as actions from './actions';
const initialState = {
    isEdit: false,
    user: { userId: '', name: '', email: '', client: '', role: '' },
    users: [],
    userInfoResponded: false,
};
const reducer = (state = initialState, action) => {
    const resetUser = { userId: '', name: '', email: '', client: '', role: '' };
    switch (action.type) {
        case actions.SET_EDITMODE:
            return { ...state, isEdit: action.payload  };
        case actions.SET_NAME:
            return { ...state, user: { ...state.user, name: action.payload } };
        case actions.SET_ROLE:
            return { ...state, user: { ...state.user, role: action.payload } };
        case actions.SET_EMAIL:
            return { ...state, user: { ...state.user, email: action.payload } };
        case actions.SET_USERID:
            return { ...state, user: { ...state.user, userId: action.payload } };
        case actions.SET_CLIENT:
            return { ...state, user: { ...state.user, client: action.payload } };
        case actions.UPDATE_USER_SUCCESS:
            return state;
        case actions.UPDATE_USER_FAILED:
            return { ...state, error: action.payload };
        case actions.CREATE_USER_SUCCESS || actions.RESET_USER:
            return { ...state, user: resetUser, isEdit: false};
        case actions.RESET_USER:
            return { ...state, user: resetUser, isEdit: false};
        case actions.SET_CURRENT_USER:
                return { ...state, user: action.payload};
        case actions.CREATE_USER_FAILED:
            return { ...state, error: action.payload };
        case actions.GET_USER_INFO_SUCCESS:
            return { ...state, users: action.payload, userInfoResponded: true};
        case actions.GET_USER_INFO_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default reducer;