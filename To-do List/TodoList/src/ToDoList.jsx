import react, { useState } from 'react';
import { FaEdit, FaArrowUp, FaArrowDown, FaTrash } from 'react-icons/fa';


const ToDoList = () => {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');


    function addTask() {
        if (newTask !== '' && !task.some(item => item.text === newTask)) {
            setTask(t => [...t, { text: newTask, completed: false }]);
            setNewTask('');
        }
        if (task.some(item => item.text === newTask)) {
            alert('Task already exists!');
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

    function toggleCompleted(index) {
        const updatedTask = [...task];
        updatedTask[index].completed = !updatedTask[index].completed;
        setTask(updatedTask);
    }

    function editTask(index) {
        const updatedTask = [...task];
        const newTask = prompt('Edit Task:', updatedTask[index].text);
        if (task.some(item => item.text === newTask)) {
            alert('Task already exists!');
            return;
        }
        if (newTask === null || newTask.trim() === '') {
            alert('Task cannot be empty!');
            return;
        }
        if (newTask !== null && newTask.trim() !== '') {
            updatedTask[index].text = newTask;
            setTask(updatedTask);
        }



    }

    return (
        <>
            <h1>To-Do List</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-container">
                    <input type="text" placeholder='Enter the Task to add...' value={newTask} onChange={(e) => setNewTask(e.currentTarget.value)} />
                    <button onClick={addTask}>Add Task</button>
                </div>
                <div className="task-list">
                    <ul>
                        {task.map((item, index) => (
                            <li key={index} className={item.completed ? 'completed' : ''}
                                onClick={() => toggleCompleted(index)}>
                                {item.text}

                                <div className='buttons'>
                                    <button className='edit' onClick={(e) => { e.stopPropagation(); editTask(index); }}><FaEdit /></button>
                                    <button className='delete' onClick={(e) => { e.stopPropagation(); deleteTask(index); }}><FaTrash /></button>
                                    <button className='move' onClick={(e) => { e.stopPropagation(); moveTaskUp(index); }}><FaArrowUp /></button>
                                    <button className='move' onClick={(e) => { e.stopPropagation(); moveTaskDown(index); }}><FaArrowDown /></button>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
        </>
    )
}

export default ToDoList