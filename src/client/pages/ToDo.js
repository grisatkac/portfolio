import React, { useCallback, useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDoFooter from '../components/ToDo/ToDoFooter'
import ToDoInput from '../components/ToDo/ToDoInput'
import ToDoTasks from '../components/ToDo/ToDoTasks'
import Context from '../context/authContext'
import useHttp from '../hooks/http.hook'
import { createTask } from '../redux/actions/toDo'


const ToDo = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token} = useContext(Context)
    const tasks = useSelector(state => state.ToDoList.tasks)
    const activeFilter = useSelector(state => state.ToDoList.filter)
    //const [activeFilter, setActiveFilter] = useState('all') setActiveFilter={setActiveFilter}
    console.log('tasks tood', tasks)

    const fetchTasks = useCallback(async () => {
        try {
            const data = await request('http://localhost:3000/app/todo/tasks', 'GET', null, {
                'authorization': token
            })
            console.log(data)
            dispatch(createTask(data.tasks))

        } catch (error) {
            console.log(error)
        }
    }, [token, request])

    if (tasks) {
       useEffect(() => {
           console.log('tasks length')
           fetchTasks()
       }, [fetchTasks])
    }

    return (
        <>
            <ToDoInput />
            <ToDoTasks tasks={tasks} activeFilter={activeFilter}/>
            <ToDoFooter tasks={tasks} activeFilter={activeFilter}  />
        </>
    )
}

export default ToDo
