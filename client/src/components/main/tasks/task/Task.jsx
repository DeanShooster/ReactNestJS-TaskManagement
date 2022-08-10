import { useState } from 'react';

import {RiDeleteBin6Fill} from 'react-icons/ri';

import { DeleteTask, UpdateStatus } from '../../../../api/TasksAPI';

const Task = ( {task,tasksChangeHandler} ) => {

    const [msg,setMsg] = useState(null);

    const deleteTaskHandler = async () => {
        const result = await DeleteTask(task.title);
        if(result.title)
            tasksChangeHandler(result.title);
    }

    const statusChangeHandler = async (event) => {
        const result = await UpdateStatus(task.title,event.target.value);
        if( result.title ) setMsg('Status was updated successfully.');
        setTimeout(() => {
            setMsg(null);
        }, 4000);
    }

    return (
        <li className="task-container">
            <div className='rank_and_date_container'>
                <div className='rank'>{task.importance}</div>
                <div className='date'>{new Date(task.created).toDateString()}</div>
            </div>
            <h2>{task.title}</h2>
            <p>{task.desc}</p>
            <div className='task-status_and_delete-container'>
                <select onChange={statusChangeHandler} selected>
                    <option selected={task.status==='OPEN'}>OPEN</option>
                    <option selected={task.status==='In Progress'}>In Progress</option>
                    <option selected={task.status==='DONE'}>DONE</option>
                </select>
                <span><RiDeleteBin6Fill className='delete' onClick={deleteTaskHandler}/></span>
            </div>
            {msg && <p className='status-message'>{msg}</p>}
        </li>
    );
};

export default Task;