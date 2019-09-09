import * as commonActions from 'common/actions';
import * as service from 'common/service';
export const SET_EDITMODE = "SET_EDITMODE";
export const SET_NAME = "SET_NAME";
export const SET_ROLE = "SET_ROLE";
export const SET_EMAIL = "SET_EMAIL";
export const SET_USERID = "SET_USERID";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CLIENT = "SET_CLIENT";
export const RESET_USER = "RESET_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";
export const GET_USER_INFO_REQUESTED = "GET_USER_INFO_REQUESTED";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";

export const setEditMode = (isEdit) => (dispatch) => {
    return dispatch({
        type: SET_EDITMODE,
        payload: isEdit
    });
};
export const setName = (name) => (dispatch) => {
    return dispatch({
        type: SET_NAME,
        payload: name
    });
};
export const setUserId = (userId) => (dispatch) => {
    return dispatch({
        type: SET_USERID,
        payload: userId
    });
};
export const setClient = (client) => (dispatch) => {
    return dispatch({
        type: SET_CLIENT,
        payload: client.toUpperCase()
    });
};
export const setEmail = (email) => (dispatch) => {
    return dispatch({
        type: SET_EMAIL,
        payload: email
    });
};
export const setRole = (role) => (dispatch) => {
    return dispatch({
        type: SET_ROLE,
        payload: role
    });
};
export const resetUser = () => (dispatch) => {
    return dispatch({
        type: RESET_USER
    });
};
export const setCurrentUser = (user) => (dispatch) => {
    setEditMode(true);
    return dispatch({
        type: SET_CURRENT_USER,
        payload: user
    });
};
export  const createUser =  (userInfo={}) => async (dispatch) => {
    try {
        commonActions.loadingInprogress(dispatch);
        await service.postData(service.url.createUser, userInfo);
        commonActions.loadingCompleted(dispatch);
        return dispatch({
                    type: CREATE_USER_SUCCESS
                });
    }catch(error){
        return commonActions.loadingFailed({status: 'FAILED', statusText: error.message})(dispatch);
    }
};
export  const updateUser =  (userInfo={}) => async (dispatch) => {
    try {
        commonActions.loadingInprogress(dispatch);
        await service.updateData(service.url.updateUser, {user: userInfo});
        commonActions.loadingCompleted(dispatch);
        return dispatch({
                    type: UPDATE_USER_SUCCESS
                });
    } catch(error){
        return commonActions.loadingFailed({status: 'FAILED', statusText: error.message})(dispatch);
    }
};
export  const getUsers =  (offset=0) => async (dispatch) => {
    try {
        resetUser();        
        commonActions.loadingInprogress(dispatch);
        let url = service.url.getUsers + offset;
        const users = await service.getData(url);
        commonActions.loadingCompleted(dispatch);
        return dispatch({
            type: GET_USER_INFO_SUCCESS,
            payload: users.data
        });
    }catch(error){
         commonActions.loadingFailed({status: 'FAILED', statusText: error.message})(dispatch);
    }
};


