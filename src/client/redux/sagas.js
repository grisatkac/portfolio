import {takeEvery, put, call} from 'redux-saga/effects'
import { changeTask, createTask, deleteTask } from './actions/toDo'

export function* updateToDoListWatcher() {
    yield takeEvery('TODO/UPDATE_LIST', updateToDoListWorker)
}

function* updateToDoListWorker({payload: {data, action}}) {
    try {
        console.log('---data---')
        console.log(data)
        console.log('---action---')
        console.log(action)
        switch (action) {
            case 'TODO/CREATE_TASK':
                //const data = yield call(() => fetchUpdateToDoList(payload))
                yield call(() => {fetchUpdateToDoList(data, 'http://localhost:3000/app/todo/create')})
                yield put(createTask(data))
                break;
            case 'TODO/DELETE_TASK':
                console.log(data)
                //yield call(() => {fetchUpdateToDoList({taskId: data}, 'http://localhost:3000/app/todo/delete')})
                yield put(deleteTask(data))
                break;
            case 'TODO/CHANGE_TASK':
                //yield call(() => {fetchUpdateToDoList(data, 'http://localhost:3000/app/todo/change')})
                yield put(changeTask(data))
                break;
            default:
                break;
        }
        /*const data = yield call(() => fetchUpdateToDoList(payload))
        console.log(data)*/
        //yield put({type: 'TODO/CREATE_TASK', payload})
        /*console.log('---data---')
        console.log(data)
        console.log('---action---')
        console.log(action)
 
        yield put(createTask(data))*/
    } catch (error) {
        console.log('Error: ', error)
    }
}

const fetchUpdateToDoList = async (body, url) => {
    //const response = await fetch('http://localhost:3000/app/todo/update', {
    const response = await fetch( url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'authorization':  localStorage.getItem('userData')
        }
    })
    return await response.json()
}
