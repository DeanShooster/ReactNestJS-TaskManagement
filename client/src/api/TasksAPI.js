
const URL = 'http://localhost:5000';

/**
 * Sends a GET request for all existing tasks.
 * @returns Array of tasks
 */
async function GetAllTasks()
{
    const res = await fetch(`${URL}/tasks`,{ method: 'GET',});
    return await res.json();
}

/**
 * Sends a DELETE request for a task deletion.
 * @param {Task Object} task 
 * @returns Deleted task.
 */
async function DeleteTask(taskTitle)
{
    const res = await  fetch(`${URL}/tasks/${taskTitle}`,{ method: 'DELETE' });
    return await res.json();
}

/**
 * Sends a POST request for a new task.
 * @param {Task Object} newTask 
 * @returns New Task
 */
async function CreateTask( newTask )
{
    console.log(newTask);
    const res = await fetch(`${URL}/tasks`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
    });
    return await res.json();
}

/**
 * Sends a PATCH request for a status task update.
 * @param {Task Title} taskTitle 
 * @returns Updated task
 */
async function UpdateStatus( taskTitle,taskStatus )
{
    const res = await fetch(`${URL}/tasks/${taskTitle}`,{ 
        method: 'PATCH', 
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify({taskStatus})
    });
    return await res.json();
}

module.exports = {GetAllTasks,DeleteTask,CreateTask,UpdateStatus};