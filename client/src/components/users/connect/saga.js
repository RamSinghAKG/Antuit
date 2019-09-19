import { takeEvery, put, all } from "redux-saga/effects";
import * as actions from "./actions";
import * as commonActions from 'common/actions';
import * as service from 'common/service';
export function* watchUserSaga() {
    yield all([
        takeEvery(actions.GET_USER_INFO_SAGA, getUsersSaga),
        takeEvery(actions.CREATE_USER_SAGA, createUserSaga),
        takeEvery(actions.UPDATE_USER_SAGA, updateUserSaga)
    ]);
}

function* getUsersSaga(action) {
    try {
        actions.resetUser();        
        yield put(commonActions.loadingInprogress());
        let url = service.url.getUsers + action.offset;
        const users = yield service.getData(url);
        yield put(commonActions.loadingCompleted());
        yield put(actions.recievedUsers(users));
    } catch(error){
        yield put(commonActions.loadingFailed({status: 'FAILED', statusText: error.message}));
    }
}

function* createUserSaga(action) {
    try {
        yield put(commonActions.loadingInprogress());
        yield service.postData(service.url.createUser, action.userInfo);
        yield put(commonActions.loadingCompleted());
        yield put(actions.createUserSuccess());
    } catch(error) {
        yield put(commonActions.loadingFailed({status: 'FAILED', statusText: error.message}));
    }
}

function* updateUserSaga(action) {
    try {
        yield put(commonActions.loadingInprogress());
        yield service.updateData(service.url.updateUser, {user: action.userInfo});
        yield put(commonActions.loadingCompleted());
        yield put(actions.updateUserSuccess())
    } catch(error){
        yield put(commonActions.loadingFailed({status: 'FAILED', statusText: error.message}));
    }
}
