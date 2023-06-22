import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* addItem (action) {

  try {
    console.log( 'action.payload is:', action.payload);
    yield axios.post('/api/shelf', action.payload);
    yield put ('FETCH_SHELF');
  } catch (error) {
    console.log('error in POST is:', error);
  };
};

function* addItemSaga() {
  yield takeLatest('ADD_ITEM', addItem)
}

export default addItemSaga;