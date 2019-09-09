import * as commonActions from 'common/actions';
import * as service from 'common/service';
export const SET_ROLE_EDITMODE = "SET_ROLE_EDITMODE";
export const SET_ROLE_NAME = "SET_ROLE_NAME";
export const SET_PERMISSION = "SET_PERMISSION";
export const SET_CURRENT_ROLE = "SET_CURRENT_ROLE";
export const RESET_ROLE = "RESET_ROLE";
export const CREATE_ROLE_SUCCESS = "CREATE_ROLE_SUCCESS";
export const CREATE_ROLE_FAILED = "CREATE_ROLE_FAILED";
export const UPDATE_ROLE_SUCCESS = "UPDATE_ROLE_SUCCESS";
export const UPDATE_ROLE_FAILED = "UPDATE_ROLE_FAILED";
export const GET_ROLE_INFO_REQUESTED = "GET_ROLE_INFO_REQUESTED";
export const GET_ROLE_INFO_SUCCESS = "GET_ROLE_INFO_SUCCESS";
export const GET_ROLE_INFO_FAILED = "GET_ROLE_INFO_FAILED";

export const setRoleEditMode = (isEdit) => (dispatch) => {
    return dispatch({
        type: SET_ROLE_EDITMODE,
        payload: isEdit
    });
};
export const setName = (name) => (dispatch) => {
    return dispatch({
        type: SET_ROLE_NAME,
        payload: name
    });
};

export const setPermission = (role) => (dispatch) => {
    return dispatch({
        type: SET_PERMISSION,
        payload: role
    });
};
export const resetRole = () => (dispatch) => {
    return dispatch({
        type: RESET_ROLE
    });
};
export const setCurrentRole = (role) => (dispatch) => {
    return dispatch({
        type: SET_CURRENT_ROLE,
        payload: role
    });
};
export  const createRole =  (roleInfo={}) => async (dispatch) => {
    try {
        commonActions.loadingInprogress(dispatch);
        await service.postData(service.url.createRole, roleInfo);
        commonActions.loadingCompleted(dispatch);
        return dispatch({
                    type: CREATE_ROLE_SUCCESS
                });
    }catch(error){
        return commonActions.loadingFailed({status: 'FAILED', statusText: error.message})(dispatch);
    }
};
export  const updateRole =  (roleInfo={}) => async (dispatch) => {
    try {
        commonActions.loadingInprogress(dispatch);
        await service.updateData(service.url.updateRole, {role: roleInfo});
        commonActions.loadingCompleted(dispatch);
        return dispatch({
                    type: UPDATE_ROLE_SUCCESS
                });
    } catch(error){
        return commonActions.loadingFailed({status: 'FAILED', statusText: error.message})(dispatch);
    }
};
export  const getRoles =  (offset=0) => async (dispatch) => {
    try {
        commonActions.loadingInprogress(dispatch);
        let url = service.url.getRoles + offset;
        const roles = await service.getData(url);
        commonActions.loadingCompleted(dispatch);
        return dispatch({
            type: GET_ROLE_INFO_SUCCESS,
            payload: roles.data
        });
    }catch(error){
         commonActions.loadingFailed({status: 'FAILED', statusText: error.message})(dispatch);
    }
};


