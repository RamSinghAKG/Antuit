import * as actions from './actions';
const initialState = {
    isEdit: false,
    role: { name: '', permission: '' },
    roles: [],
    roleInfoResponded: false,
};
const reducer = (state = initialState, action) => {
    const resetRole = { name: '', permission: '' };
    switch (action.type) {
        case actions.SET_ROLE_EDITMODE:
            return { ...state, isEdit: action.payload  };
        case actions.SET_ROLE_NAME:
            return { ...state, role: { ...state.role, name: action.payload } };
        case actions.SET_PERMISSION:
            return { ...state, role: { ...state.role, permission: action.payload.toUpperCase() } };
        case actions.UPDATE_ROLE_SUCCESS:
            return state;
        case actions.UPDATE_ROLE_FAILED:
            return { ...state, error: action.payload };
        case actions.CREATE_ROLE_SUCCESS:
            return { ...state, role: resetRole, isEdit: false};
        case actions.RESET_ROLE:
            return { ...state, role: resetRole, isEdit: false};
        case actions.SET_CURRENT_ROLE:
                return { ...state, role: action.payload};
        case actions.CREATE_ROLE_FAILED:
            return { ...state, error: action.payload };
        case actions.GET_ROLE_INFO_SUCCESS:
            return { ...state, roles: action.payload, roleInfoResponded: true};
        case actions.GET_ROLE_INFO_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default reducer;