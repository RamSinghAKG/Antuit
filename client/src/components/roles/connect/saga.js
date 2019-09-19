import { takeEvery, all, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as commonActions from 'common/actions';
import * as service from 'common/service';
export function* watchRoleSaga() {
    yield all([
        takeEvery(actions.GET_ROLES_SAGA, getRolesSaga),
        takeEvery(actions.CREATE_ROLE_SAGA, createRoleSaga),
        takeEvery(actions.UPDATE_ROLE_SAGA, updateRoleSaga),
        takeEvery(actions.GET_PERMISSION_SAGA, getPermissionSaga)
    ]);
   
}

function* getRolesSaga() {
    try {
        commonActions.loadingInprogress();
        let url = service.url.getRoles;
        const roles = yield service.getData(url);
        commonActions.loadingCompleted();
        yield put(actions.getRolesSuccess(roles));
    }catch(error){
        yield put(commonActions.loadingFailed({status: 'FAILED', statusText: error.message}));
    }
}

function* createRoleSaga(action) {
    try {
        yield put(commonActions.loadingInprogress());
        yield service.postData(service.url.createRole, action.roleInfo);
        yield put(commonActions.loadingCompleted());
        yield put(actions.createRoleSuccess());
    }catch(error){
        yield put(commonActions.loadingFailed({status: 'FAILED', statusText: error.message}));
    }
}

function* updateRoleSaga(action) {
    try {
        yield put(commonActions.loadingInprogress());
        yield service.updateData(service.url.updateRole, {role: action.roleInfo});
        yield put(commonActions.loadingCompleted());
        yield put(actions.updateRoleSuccess());
    } catch(error){
        yield put(commonActions.loadingFailed({status: 'FAILED', statusText: error.message}));
    }
}

function* getPermissionSaga() {
    try {
        yield put(commonActions.loadingInprogress());
        let url = service.url.getPermissions;
        const permissions = yield service.getData(url);
        yield put(commonActions.loadingCompleted());
        yield put(actions.getPermissionSuccess(permissions));
    } catch(error){
        yield put(commonActions.loadingFailed({status: 'FAILED', statusText: error.message}));
    }
}