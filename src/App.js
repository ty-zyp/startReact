import React, { Component } from 'react';
// import Todo from './components/Todo'
// import A from './components/A'
import './App.css'
import { Route,Routes,Navigate } from 'react-router-dom'

import Home from './views/home'
import About from './views/about'
import MyNavLink from './components/MyNavLink';

// const DATA = [
//   { id: "todo-0", name: "Eat", completed: true },
//   { id: "todo-1", name: "Sleep", completed: false },
//   { id: "todo-2", name: "Repeat", completed: false },
// ]

export default class App extends Component{
  render () {
    return <div className='container'>
      <div className='header'>
        页面标题
      </div>
      <div className='bottom'>
        <div className='left'>
          <MyNavLink to="/about">About</MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
         
        </div>
        <div className='right'>
          <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/home/*" element={<Home />} />
            {/* <Route path="/" element={<About />} />  */}
             {/* 兜底路由 */}
            <Route path="/" element={<Navigate to="/home"/>}></Route>
          </Routes>
   
        </div>
      </div>
    </div>
  }
}






















// import Form from './components/Todo/Form'
// import FilterButton from './components/Todo/FilterButton'
// import { useState } from 'react';
// import { nanoid } from 'nanoid';


// function App (props) {
//   const [tasks, setTasks] = useState(props.tasks);
//   const [filter, setFilter] = useState('All');
//   const FILTER_MAP = {
//     All: () => true,
//     Active: (task) => !task.completed,
//     Completed: (task) => task.completed,
//   };
//   const FILTER_NAMES = Object.keys(FILTER_MAP);
//   const filterList = FILTER_NAMES.map(name => (
//     <FilterButton
//       name={name}
//       key={name}
//       isPressed={name === filter}
//       setFilter={setFilter}
//     />
//   ))
//   function addTask (name) {
//     const newTask = { id: `todo-${nanoid()}`, name, completed: false };
//     setTasks([...tasks, newTask]);
//   }
//   function toggleTaskCompleted (id) {
//     const updatedTasks = tasks.map((task) => {
//       if (id === task.id) {
//         return { ...task, completed: !task.completed }
//       }
//       return task;
//     });
//     setTasks(updatedTasks)
//   }
//   function deleteTask (id) {
//     console.log(id)
//     const arr = tasks.filter(item => id !== item.id);
//     setTasks(arr)
//   }

//   function editTask (id, newName) {
//     const editTaskList = tasks.map(task => {
//       if (id === task.id) {
//         return {...task,name:newName}
//       }
//       return task
//     })
//     setTasks(editTaskList)
//   }

//   const taskList = tasks?.filter(FILTER_MAP[filter]).map((task) =>
//     <Todo
//       id={task.id}
//       name={task.name}
//       completed={task.completed}
//       key={task.id}
//       toggleTaskCompleted={toggleTaskCompleted}
//       deleteTask={deleteTask}
//       editTask={editTask}
//     />
//   );


//   let len = taskList.length;
//   const handingText = `${len} ${len<2?'task':'tasks'} remaining`;

//   return (
//     <div className="todoapp stack-large">
//       <h1>TodoMatic</h1>
//       <Form onSubmit={addTask} />
//       <div className="filters btn-group stack-exception">
//         {filterList}
//       </div>
//       <h2 id="list-heading">{ handingText}</h2>
//       <ul
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading">
//         {taskList}
//       </ul>
//     </div>
//   );
// }


// export default App;
