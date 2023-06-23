import axios from "axios";
import { useSelector } from "react-redux";
import { put, takeLatest } from 'redux-saga/effects';

function* editItem (action) {

    // const user = useSelector(store => store.user)

  try {
    console.log( 'action.payload is:', action.payload);
    console.log( 'action.payload is:', action.payload.item_id);

    yield axios.put(`/api/shelf/${action.payload.item_id}`, action.payload);
    yield put ({type:'FETCH_SHELF'});
  } catch (error) {
    console.log('error in POST is:', error);
  };
};

function* editItemSaga() {
  yield takeLatest('EDIT_ITEM', editItem)
}

export default editItemSaga;