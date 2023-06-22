import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

// Saga will be doing the rendering from our database

function* fetchShelf(){
    try {
        const shelfItem = yield axios.get('/api/shelf')
        console.log('This is GET for item table', shelfItem.data)
        yield put ({
            type: 'SET_SHELF',
            payload: shelfItem.data
        })
    } catch(err) {
        console.log('Oh No! our Shelf Fetch', err)
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf)


}

export default shelfSaga