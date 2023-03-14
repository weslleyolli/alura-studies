import React, { useState } from 'react';
import Forms from '../components/Forms';
import { List }   from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../components/types/task';
import  style  from './App.module.scss'

function App() {
  const [tasks, setTask] = useState<ITask[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Forms setTask={setTask} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
