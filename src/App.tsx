import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import useTasks from './hooks/useTasks';

const App: React.FC = () => {
  const {addTask, tasks, toggleTask, deleteTask, completedTasks} = useTasks();

  return (
    <div className='app'>
      <h1>Task management</h1>
      <TaskCounter totalTasks={tasks.length} completedTasks={completedTasks} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
