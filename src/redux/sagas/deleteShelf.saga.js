import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { useSelector } from 'react-redux';



//saga will be fired on 'DELETE_SHELF_ITEM' action type
function* deleteShelfItem(action){
  const user = useSelector(store=>store.user);
  try{
            yield axios.delete(`/${action.item.id}`, {itemUserID:action.item.user_id});
            yield put({type: 'FETCH_SHELF'});
        
    } catch (error) {
        console.log('deleteShelfItem does NOT work deleteShelf.saga.js =>', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_SHELF_ITEM', deleteShelfItem);
}

export default deleteSaga;