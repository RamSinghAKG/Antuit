export const SET_EDITMODE = "SET_EDITMODE";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_ROLE = "SET_ROLE";
export const SET_EMAIL = "SET_EMAIL";
export const SET_USERID = "SET_USERID";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CLIENT = "SET_CLIENT";
export const SET_SELECTED_PAGE = "SET_SELECTED_PAGE";
export const RESET_USER = "RESET_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";
export const GET_USER_INFO_REQUESTED = "GET_USER_INFO_REQUESTED";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";
//Sagas
export const GET_USER_INFO_SAGA = "GET_USER_INFO_SAGA";
export const CREATE_USER_SAGA = "CREATE_USER_SAGA";
export const UPDATE_USER_SAGA = "UPDATE_USER_SAGA";

export const resetUser = () => {
    return { type: RESET_USER };
};

export const setEditMode = (isEdit) => {
    return {
        type: SET_EDITMODE,
        payload: isEdit
    };
};
export const setName = (name) => {
    console.log('name: ', name);
    
    return {
        type: SET_USER_NAME,
        payload: name
    };
};
export const setUserId = (userId) => {
    return {
        type: SET_USERID,
        payload: userId
    };
};
export const setClient = (client) => {
    return {
        type: SET_CLIENT,
        payload: client.toUpperCase()
    };
};
export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        payload: email
    };
};
export const setRole = (role) => {
    return {
        type: SET_ROLE,
        payload: role
    };
};

export const setCurrentUser = (user) => {
    setEditMode(true);
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};
export  const createUser =  (userInfo={}) => {
    return {
        type: CREATE_USER_SAGA,
        userInfo: userInfo
    }
};

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS
    };
}

export  const updateUser =  (userInfo={}) => {
    return {
        type: UPDATE_USER_SAGA,
        userInfo: userInfo
    }
};

export const updateUserSuccess = () => {
    return {
        type: UPDATE_USER_SUCCESS
    };
}

export const setSelectedPage = (pagenum) => {
    return { type: SET_SELECTED_PAGE, payload: pagenum};
};

export  const getUsers =  (offset=0) => {
    return {
        type: GET_USER_INFO_SAGA,
        offset: offset
    }
};

export const recievedUsers = (users) => {
    return {
        type: GET_USER_INFO_SUCCESS,
        payload: {users: users.data, totalRecord: users.totalRecord}
    };
};


