import {takeEvery, put, call} from 'redux-saga/effects'
import { changeTask, createTask, deleteTask } from './actions/toDo'

export function* updateToDoListWatcher() {
    yield takeEvery('TODO/UPDATE_LIST', updateToDoListWorker)
}

function* updateToDoListWorker({payload: {data, action}}) {
    try {
        switch (action) {
            case 'TODO/CREATE_TASK':
                //yield call(() => {fetchUpdateToDoList(data, 'http://localhost:3000/app/todo/create')})
                const { taskId } = yield call(() => {
                    return fetchUpdateToDoList(data, 'http://localhost:3000/app/todo/create')
                })
                console.log('task id in saga: ', taskId)
                //console.log('new task: ', newTask)
                console.log('receive data: ', data)
                const localStorageTasks = yield JSON.parse(localStorage.getItem('UserTasks'))
                const newLocalStorage = yield localStorageTasks.push({_id: taskId, ...data})
                yield localStorage.setItem('UserTasks', JSON.stringify(newLocalStorage))
                //yield put(createTask({...data, _id: taskId}))
                yield put(createTask({_id: taskId, ...data }))
                break;
            case 'TODO/DELETE_TASK':
                yield call(() => {fetchUpdateToDoList({taskId: data}, 'http://localhost:3000/app/todo/delete')})
                yield put(deleteTask(data))
                break;
            case 'TODO/CHANGE_TASK':
                //yield call(() => {fetchUpdateToDoList(data, 'http://localhost:3000/app/todo/change')})
                yield put(changeTask(data))
                break;
            default:
                break;
        }
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

    console.log('--- response ---')
    console.log(response)
    const data = await response.json()
    console.log('---data---')
    console.log(data)
    return data
}
