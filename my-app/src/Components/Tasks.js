import React from 'react';
import TaskList from './TaskList';
import ThreeDComponent from './ThreeDComponent';

const Tasks = () => {
  return (
    <div>
      <h1>Welcome to the task page</h1>
      <TaskList />
      <ThreeDComponent />
    </div>
  );
};

export default Tasks;