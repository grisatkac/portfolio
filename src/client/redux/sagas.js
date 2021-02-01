import {takeEvery, put, call} from 'redux-saga/effects'
import { createTask } from './actions/toDo'

export function* updateToDoListWatcher() {
    yield takeEvery('TODO/UPDATE_LIST', updateToDoListWorker)
}

function* updateToDoListWorker({payload}) {
    try {
        const data = yield call(fetchUpdateToDoList)
        console.log(data)
        yield put({type: 'TODO/CREATE_TASK', payload})
    } catch (error) {
        console.log('Error: ', error)
    }
}

const fetchUpdateToDoList = async () => {
    const response = await fetch('http://localhost:3000/app/todo/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'authorization':  localStorage.getItem('userData')
        }
    })
    return await response.json()
}
