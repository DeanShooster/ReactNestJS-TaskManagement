import { Fragment } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import './App.scss';

import Main from './components/main/Main';
import TaskCreation from './components/task-creation/TaskCreation';

function App() {
  return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/create' element={<TaskCreation />}/>
          </Routes>
        </Fragment>
      </BrowserRouter>
  );
}

export default App;
