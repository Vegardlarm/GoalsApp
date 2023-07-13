import React, { useState, useEffect } from 'react';
import '../Css/TaskList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const capitalizedTaskName =
      taskInput.charAt(0).toUpperCase() + taskInput.slice(1);
      setTasks([...tasks, { name: capitalizedTaskName, done: false }]);
      setTaskInput('');
    }
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTask();
    }
  };

  const calculateProgress = () => {
    if (tasks.length === 0) {
      setProgress(0);
    } else {
      const completedTasks = tasks.filter((task) => task.done);
      const calculatedProgress = (completedTasks.length / tasks.length) * 100;
      setProgress(calculatedProgress);
    }
  };

  useEffect(() => {
    calculateProgress();
  }, [tasks]);

  return (
    <div className="task-container">
      <h1>Task Manager</h1>
      <div className="task-input-container">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a task"
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-task-btn">
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className={task.done ? 'task-name task-done' : 'task-name'}>
              {task.name}
            </span>
            <div
              className={`task-checkbox ${task.done ? 'checked' : ''}`}
              onClick={() => handleTaskToggle(index)}
            >
              {task.done && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
            </div>
            <button
              onClick={() => handleDeleteTask(index)}
              className="delete-task-btn"
            >
              <span className="delete-icon">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <h3>{`${progress.toFixed(1)}%`}</h3>
    </div>
  );
};

export default TaskList;







