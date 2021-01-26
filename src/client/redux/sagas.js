import {takeEvery, put, call} from 'redux-saga/effects'
import { createTask } from './actions/toDo'

export function* updateToDoListWatcher() {
    yield takeEvery('TODO/UPDATE_LIST', updateToDoListWorker)
}

function* updateToDoListWorker({ payload }) {
    try {
        console.log('data in worker')
        console.log(payload)
        console.log('------')

        const data = yield call(fetchUpdateToDoList)
        console.log('data from jsonplaceholder')
        console.log(data)
        yield put({type: 'TODO/CREATE_TASK', payload})
    } catch (error) {
        console.log('Error: ', error)
        console.log('error message: ', error.message)
    }


}

const fetchUpdateToDoList = async () => {
    const response = await fetch('http://localhost:3000/app/todo/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    return await response.json()
}
