import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Theory from './Components/Theory';
import Tasks from './Components/Tasks';
import Account from './Components/Account';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/theory' element={<Theory />}></Route>
        <Route path='/tasks' element={<Tasks />}></Route>
        <Route path='/account' element={<Account />}></Route>
      </Routes>
    </div>
  );
}

export default App;
