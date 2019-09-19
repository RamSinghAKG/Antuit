import createSagaMiddleware from "redux-saga";
import {watchUserSaga} from 'components/users/connect/saga';
import {watchRoleSaga} from 'components/roles/connect/saga';
const sagaMiddleware = createSagaMiddleware();

export const runSaga = () => {
    sagaMiddleware.run(watchUserSaga);
    sagaMiddleware.run(watchRoleSaga);
};
export default sagaMiddleware;