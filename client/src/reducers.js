/* eslint-disable no-labels */
import {combineReducers} from 'redux';
import roleReducer from 'components/roles/connect/reducer';
import userReducer from 'components/users/connect/reducer';
import commonReducer from 'common/reducers';
export const reducers = combineReducers({
    roleReducer,
    userReducer,
    commonReducer
});