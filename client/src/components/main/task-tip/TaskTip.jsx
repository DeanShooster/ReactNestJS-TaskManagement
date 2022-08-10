import {NavLink} from 'react-router-dom';

import {AiOutlinePlus} from 'react-icons/ai';

const TaskTip = () => {
    return (
        <section className='task-tip-container'>
            <h1>Get things done.</h1>
            <NavLink to='/create'><span><AiOutlinePlus/></span>Create Task</NavLink>
        </section>
    );
};

export default TaskTip;