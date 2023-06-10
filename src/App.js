import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <div className='container'>
    <Navbar />
      <Routes>
        {AppRoutes.map((route, page) => {
          const {element, ...rest} = route;
          return <Route key={page} {...rest} element={element}/>
        })}
      </Routes>
    </div>
  );
}

export default App;
