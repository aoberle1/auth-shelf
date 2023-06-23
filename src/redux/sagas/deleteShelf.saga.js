import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { useSelector } from 'react-redux';

// {itemUserID:action.payload.user_id}

//saga will be fired on 'DELETE_SHELF_ITEM' action type
function* deleteShelfItem(action){
//   const user = useSelector(store=>store.user);
  try{
            yield axios.delete(`/api/shelf/${action.payload}`, {data: {user_id: action.payload.user_id} });
            yield put({type: 'FETCH_SHELF'});
        
    } catch (error) {
        console.log(action.payload)
        // console.log(action.payload.id, action.payload.user_id)
        console.log('deleteShelfItem does NOT work deleteShelf.saga.js =>', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_SHELF_ITEM', deleteShelfItem);
}

export default deleteSaga;