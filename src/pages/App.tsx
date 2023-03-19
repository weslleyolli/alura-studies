import React, { useState } from 'react';
import Forms from '../components/Forms';
import { List }   from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../components/types/task';
import  style  from './App.module.scss'

function App() {
  const [tasks, setTask] = useState<ITask[] | []>([])
  const [selected, setSelected] = useState<ITask>()

  const selectedTask = (taskSelected: ITask) => {
    setSelected(taskSelected)
    setTask(tasksOlds => tasksOlds.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function closeTask() {
    if(selected) {
      setSelected(undefined)
      setTask(tasksOlds =>
         tasksOlds.map(task => {
          if(task.id ===selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task
         })) 
    }
  }
  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTask} />
      <List 
        tasks={tasks} 
        selectedTask = {selectedTask}
      />
      <Stopwatch
        selected={selected}
        closeTask={closeTask} 
      />
    </div>
  );
}

export default App;
