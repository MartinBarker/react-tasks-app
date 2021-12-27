import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

function App() {
  //add state as false by default
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'task1 text',
        day: 'task1 day',
        reminder: true
    },
    {
        id: 2,
        text: 'task2 text',
        day: 'task2 day',
        reminder: true
    },
    {
        id: 3,
        text: 'task3 text',
        day: 'task3 day',
        reminder: false
    }
])

  const name = 'brad';
  const x = true;

  //delete task function
  const deleteTask = (id) => {
    console.log('deleteTask id=',id)
    setTasks(
      //for reach task, filter to only show where task.id !== id
      tasks.filter(
        (task) => task.id !== id
      )
    )
  }

  //toggle reminder
  const toggleReminder = (id) => {
    console.log('toggleReminder id=',id)
    //filter through each task, for task 
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //add task
  const addTask = (task) =>{
    console.log('addTask ', task)
    const id = Math.floor(Math.random() * 1000)+1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      /> 
      {showAddTask && <AddTask onAdd={addTask}/>}
         
      <h1>Hello { name }</h1>
      <h2>Hello { x ? 'Yes' : 'No'}</h2>
      {/* without empty tasks message
      <Tasks tasks={tasks} onDelete = {deleteTask}/>
      */}
      {/* with empty tasks message */}
      {tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete = {deleteTask}
          onToggle={toggleReminder}
        /> 
      : 'No Tasks To Show'}

    </div>
  );
}

export default App;
