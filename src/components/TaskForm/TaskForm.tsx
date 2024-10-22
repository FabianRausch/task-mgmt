import React, { useState } from 'react';
import { IoAdd } from "react-icons/io5";

interface TaskFormProps {
  addTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTask(title);
    setTitle('');
  };

  return (
    <form  onSubmit={handleSubmit}>
      <div className='task-form'>

      
      <input
      className='task-form__input'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button title='Add task' className='task-form__btn' type="submit" disabled={!title}>
        <IoAdd size={16} color='white'/> 
      </button>
      </div>
    </form>
  );
};

export default TaskForm;