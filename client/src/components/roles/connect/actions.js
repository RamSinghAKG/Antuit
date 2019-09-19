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
export const GET_PERMISSION_SUCCESS = "GET_PERMISSION_SUCCESS";
//Saga
export const GET_ROLES_SAGA = "GET_ROLES_SAGA";
export const UPDATE_ROLE_SAGA = "UPDATE_ROLE_SAGA";
export const CREATE_ROLE_SAGA = "CREATE_ROLE_SAGA";
export const GET_PERMISSION_SAGA = "GET_PERMISSION_SAGA";

export const setRoleEditMode = (isEdit) => {
    return {
        type: SET_ROLE_EDITMODE,
        payload: isEdit
    };
};
export const setRoleName = (name) => {
    return {
        type: SET_ROLE_NAME,
        payload: name
    };
};

export const setPermission = (role) => {
    return {
        type: SET_PERMISSION,
        payload: role
    };
};
export const resetRole = () => {
    return {
        type: RESET_ROLE
    };
};
export const setCurrentRole = (role) => {
    return {
        type: SET_CURRENT_ROLE,
        payload: role
    };
};
export  const createRole =  (roleInfo={}) => {
    return {
        type: CREATE_ROLE_SAGA,
        roleInfo: roleInfo
    }
};

export const createRoleSuccess = () => {
    return {
        type: CREATE_ROLE_SUCCESS
    };
}
export  const updateRole =  (roleInfo={}) => {
    return {
        type: UPDATE_ROLE_SAGA,
        roleInfo: roleInfo
    };
};
export const updateRoleSuccess = () => {
    return {
        type: UPDATE_ROLE_SUCCESS
    };
};
export  const getRoles =  () => {
    return {
        type: GET_ROLES_SAGA
    }
};

export const getRolesSuccess = (roles) => {
    console.log("roles: ", roles);
    
    return {
        type: GET_ROLE_INFO_SUCCESS,
        payload: roles.data
    };
}

export  const getPermissions =  () => {
    return {
        type: GET_PERMISSION_SAGA
    };
};

export const getPermissionSuccess = (permissions) => {
    return {
        type: GET_PERMISSION_SUCCESS,
        payload: permissions.data
    };
}



