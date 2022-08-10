import { useNavigate } from 'react-router';
import { Fragment,useState } from 'react';

import './task-creation.scss';
import {ImArrowLeft} from 'react-icons/im';

import { CreateTask } from '../../api/TasksAPI';

const TaskCreation = () => {

    const [msg,setMsg] = useState(null);
    const navigate = useNavigate();

    const TaskCreationHandler = async (event) => {
        event.preventDefault();
        const task = {importance: event.target[2].value,title: event.target[0].value,desc: event.target[1].value,status: event.target[3].value};
        await CreateTask({newTask: task});
        event.target.reset();
        setMsg('Successfully added a new task.');
        setTimeout(() => { setMsg(null); }, 5000);
    }

    const returnHomePageHandler = () => navigate('/');
 
    return (
        <Fragment>
            <div className='task-creation-container'>
                <h1>Create a new Task</h1>
                <form onSubmit={TaskCreationHandler}>
                    <input placeholder='Task Title' type='text'/>
                    <textarea placeholder='Task Description' type='text'/>
                    <input placeholder='Task Importance' type='number'/>
                    <select>
                        <option>OPEN</option>
                        <option>In Progress</option>
                    </select>
                    <button>Create Task</button>
                </form>
                {msg && <p className='new-task-msg'>{msg}</p>}
            </div>
            <div className='return-home-page-container'>
                <ImArrowLeft className='arrow-icon' onClick={returnHomePageHandler}/>
            </div>
        </Fragment>
    );
};

export default TaskCreation;