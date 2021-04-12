import React, { useCallback, useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDoFilters from '../components/ToDo/ToDoFilters'
import ToDoInput from '../components/ToDo/ToDoInput'
import ToDoTasks from '../components/ToDo/ToDoTasks'
import Context from '../context/authContext'
import useHttp from '../hooks/http.hook'
import { loadTasks } from '../redux/actions/toDo'

const ToDo = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token} = useContext(Context)
    const tasks = useSelector(state => state.ToDoList.tasks)
    const activeFilter = useSelector(state => state.ToDoList.filter)
    //const [activeFilter, setActiveFilter] = useState('all') setActiveFilter={setActiveFilter}

    const fetchTasks = useCallback(async () => {
        try {
            const tasksStorage =  localStorage.getItem('UserTasks')
            if (tasksStorage) {
                //dispatch(createTask(JSON.parse(tasksStorage)))
                dispatch(loadTasks(JSON.parse(tasksStorage)))
            } else {
                const data = await request('http://localhost:3000/app/todo/tasks', 'GET', null, {
                    'authorization': token
                })
                //dispatch(createTask(data.tasks))
                dispatch(loadTasks(data.tasks))
                localStorage.setItem('UserTasks', JSON.stringify(data.tasks))
            }
            
        } catch (error) {
            console.log(error)
        }
    }, [token, request])

       useEffect(() => {
           fetchTasks()
       }, [fetchTasks])

    return (
        <div className="todo">
            <div className="todo-container">
                <ToDoInput />
                <ToDoFilters tasks={tasks} activeFilter={activeFilter} />
                <ToDoTasks tasks={tasks} activeFilter={activeFilter} />
                {/*<ToDoFooter tasks={tasks} activeFilter={activeFilter}  */}
            </div>
        </div>
    )
}

export default ToDo
