import { useState } from 'react';
import TaskList from './assets/components/taskList/TaskList';
import NewTask from './assets/components/newTask/NewTask';
import './app.css';

const App =() =>{
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const markAsCompleted = (taskText) => {
    setTasks(
      tasks.map((task) =>
        task.text === taskText ? { ...task, completed: true } : task
      )
    );
  };

  const removeTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  return (
    <div>
      <h1>LAB3 practica obligatoria 4</h1>
      <p>Lista de tareas</p>
      <NewTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        markAsCompleted={markAsCompleted}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;