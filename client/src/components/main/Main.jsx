
import './main.scss';

import TaskTip from "./task-tip/TaskTip";
import Tasks from './tasks/Tasks';

const Main = () => {
    return (
        <div className="main-page">
            <TaskTip />
            <Tasks />
        </div>
    );
};

export default Main;