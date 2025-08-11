import react, { use, useState } from 'react';
import { FaArrowUp, FaArrowDown, FaTrash } from 'react-icons/fa';


const ToDoList = () => {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');


    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask() {
        if(newTask !== ''){
            setTask(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
       const updatedTask = task.filter((element, i) => i !== index);
       setTask(updatedTask);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index - 1], updatedTask[index]] = [updatedTask[index], updatedTask[index - 1]];
            setTask(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index + 1], updatedTask[index]] = [updatedTask[index], updatedTask[index + 1]];
            setTask(updatedTask);
        }
    }


    return (
        <>
        <h1>To-Do List</h1>
        <div className="input-container">
            <input type="text" placeholder='Enter the Task to add...' value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="task-list">
            <ul>
                {task.map((item, index) => (
                    <li key={index}>
                        {item}
                        <div className='buttons'>
                            <button className='delete' onClick={() => deleteTask(index)}><FaTrash /></button>
                            <button className='move' onClick={() => moveTaskUp(index)}><FaArrowUp /></button>
                            <button className='move' onClick={() => moveTaskDown(index)}><FaArrowDown /></button>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )

}



export default ToDoList