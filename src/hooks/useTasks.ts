import { useMemo, useState } from 'react'
import { Task } from '../types';

interface UseTasks {
    tasks: Task[]
    completedTasks: number
    addTask: (title: string) => void
    toggleTask: (id: number) => void
    deleteTask: (id: number) => void
}

const useTasks = (): UseTasks => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    };
  
    const toggleTask = (id: number) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    const deleteTask = (id: number) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    const completedTasks = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  

  return {tasks , completedTasks, addTask, toggleTask, deleteTask }
}

export default useTasks;
