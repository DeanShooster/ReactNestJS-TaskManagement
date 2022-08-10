import { useState,useEffect, Fragment } from "react";


import Task from './task/Task';
import { GetAllTasks } from "../../../api/TasksAPI";
import Loader from "../../loader/Loader";

const Tasks = () => {

    const [tasks,setTasks] = useState(null);

    useEffect( ()=>{
        const fetchData = async () => {
            const result = await GetAllTasks();
            if( result ) setTasks(result);
        }
        setTimeout(() => {
            fetchData();
        }, 5000);
    },[]);

    const tasksChangeHandler = (taskTitle) => setTasks(tasks.filter(task => task.title !== taskTitle ));

    return (
        <section className="tasks-container">
            {tasks === null ? <Loader /> : 
                <Fragment>
                    {tasks.length === 0 && <h1 style={{textAlign: 'center', color: '#00a884',fontFamily: 'cursive'}}>No Tasks. Create a Task?</h1>}
                    {tasks.map( (task,index)=>{ 
                        return <Task task={task} key={task.id + index + task.title} 
                        tasksChangeHandler={tasksChangeHandler}/> })}
                </Fragment>}
        </section>
    );
};

export default Tasks;