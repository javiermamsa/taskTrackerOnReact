import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Text 1',
        day: 'Feb 5 2021',
        reminder: true,
    },
    {
        id: 2,
        text: 'Text 2',
        day: 'Mar 3 2020',
        reminder: false,
    },
    {
        id: 3,
        text: 'Text 3',
        day: 'Dec 18 2013',
        reminder: true,
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== ))
  }

  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
