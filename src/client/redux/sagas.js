import {takeEvery, put, call} from 'redux-saga/effects'
import { changeTask, createTask, deleteTask } from './actions/toDo'

export function* updateToDoListWatcher() {
    yield takeEvery('TODO/UPDATE_LIST', updateToDoListWorker)
}

function* updateToDoListWorker({payload: {data, action}}) {
    try {
        switch (action) {
            case 'TODO/CREATE_TASK':
                const { taskId } = yield call(() => {
                    return fetchUpdateToDoList(data, 'http://localhost:3000/app/todo/create')
                })

                yield updateLocalStorage('add', {_id: taskId, ...data})
               
                yield put(createTask({_id: taskId, ...data }))
                break;
            case 'TODO/DELETE_TASK':
                yield call(() => {fetchUpdateToDoList({taskId: data}, 'http://localhost:3000/app/todo/delete')})

                yield updateLocalStorage('delete', data)
                
                yield put(deleteTask(data))
                break;
            case 'TODO/CHANGE_TASK':
                yield call(() => {fetchUpdateToDoList(data, 'http://localhost:3000/app/todo/change')})

                yield updateLocalStorage('updateTask', data)
                
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

    const data = await response.json()
   
    return data
}

const updateLocalStorage = (action, data) => {
    let localStorageTasks = JSON.parse(localStorage.getItem('UserTasks'))
    let newLocalStorageTasks
    switch (action) {
        case 'add':
            localStorageTasks.push(data)
            localStorage.setItem('UserTasks', JSON.stringify(localStorageTasks))
            break;
        case 'delete':
            newLocalStorageTasks = localStorageTasks.filter(task => data != task._id)
            localStorage.setItem('UserTasks', JSON.stringify(newLocalStorageTasks))
            break;
        case 'updateTask':
            newLocalStorageTasks = localStorageTasks.map((task) => {
                if (task._id !== data._id) {
                    return task
                }

                return {...task, completed: data.completed}
            })
            localStorage.setItem('UserTasks', JSON.stringify(newLocalStorageTasks))
            break;
        default:
            break;
    }
}
