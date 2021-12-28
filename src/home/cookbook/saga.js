import {call,put,takeEvery} from 'redux-saga/effects'
import { request } from '../../utils/request';
import {loadDataSync} from './actionCreator'



function* loadDataAsync(params) {
    try {
        const result = yield call(request, '/api/hotcate');
        yield put(loadDataSync(result.data));
     } catch (e) {
        console.error('异步请求失败',e);
     }
}

function* loadDataSaga() {
    yield takeEvery("LOAD_DATA_LIST", loadDataAsync);
}

export default loadDataSaga;
