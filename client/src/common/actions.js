export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const FAILED = "FAILED";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const loadingInprogress = dispatch => {
    dispatch({
        type: LOADING
    });    
};

export const loadingCompleted = dispatch => {
    dispatch({
        type: LOADED
    });    
};

export const loadingFailed = (error) => async (dispatch) => {
    error.statusText =  'Error: '+ error.statusText;
    dispatch({
        type: FAILED,
        payload: error
    });    
};

export const setError = (msg) => async (dispatch) => {
    const error = {statusText:  'Error: '+ msg};
    dispatch({
        type: FAILED,
        payload: error
    });    
};

export const clearError = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERROR,
        payload: { status: '', statusText: '' }
    });    
};