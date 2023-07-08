import React from 'react';
import './App.css';

import TaskPage from './pages/tasks/TaskPage';
import RegisterPage from './pages/auth/RegisterPage';


const App = () => { 
    return (
    <div className="App">
      
      {/* <TaskPage></TaskPage> */}
      <RegisterPage></RegisterPage>

      
    </div>
  );
}

export default App;