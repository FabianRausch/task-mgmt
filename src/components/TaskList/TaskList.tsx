import React from 'react';
import { Task } from '../../types';
import { RiDeleteBin6Line } from "react-icons/ri";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}
const TaskList: React.FC<TaskListProps> = React.memo(({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <li className='task-list__item' key={task.id}>
          <input
            className='task-list__item-checkbox'
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <p title={task.title} className={`task-list__item-title ${task.completed ? 'task-list__item-completed' : ''}`}>
             {task.title}
          </p>
          <button title='Delete task' className='task-list__item-btn'onClick={() => deleteTask(task.id)}><RiDeleteBin6Line color='white' size={16}/></button>
        </li>
      ))}
    </ul>
  );
});

export default TaskList