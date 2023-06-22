import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { useSelector } from 'react-redux';


const user = useSelector(store=>store.userReducer);

//saga will be fired on 'DELETE_SHELF_ITEM' action type
function* deleteShelfItem(action){
    try{
        if(action.item.user_id === user.id){
            yield axios.delete(`/${action.item.id}`);
            yield put({type: 'FETCH_SHELF'});
        } else {
            console.log('user did not add this so they cant delete haha');
        }
        
    } catch (error) {
        console.log('deleteShelfItem does NOT work deleteShelf.saga.js =>', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_SHELF_ITEM', deleteShelfItem);
}

export default deleteSaga;