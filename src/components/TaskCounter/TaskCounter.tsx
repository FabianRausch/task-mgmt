import React from 'react';

interface TaskCounterProps {
  totalTasks: number;
  completedTasks: number;
}

const TaskCounter: React.FC<TaskCounterProps> = React.memo(({ totalTasks, completedTasks }) => {
  return (
    <div className='task-counter'>
      <p className='task-counter__total'>Total: {totalTasks}</p>
      <p className='task-counter__completed'>Completed: {completedTasks}</p>
    </div>
  );
});

export default TaskCounter;