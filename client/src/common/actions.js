export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const FAILED = "FAILED";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const loadingInprogress = () => {
    return { type: LOADING };    
};

export const loadingCompleted = dispatch => {
    return { type: LOADED };    
};

export const loadingFailed = (error) => {
    error.statusText =  'Error: '+ error.statusText;
    return {
        type: FAILED,
        payload: error
    };
};

export const setError = (msg) => {
    const error = {statusText:  'Error: '+ msg};
    return {
        type: FAILED,
        payload: error
    };    
};

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
        payload: { status: '', statusText: '' }
    };    
};