import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './Components/Calender/Calender';
import Completed from './Components/Completed/Completed';
import Navbar from './Components/Navbar/Navbar';
import Todo from './Components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='todo' element={<Todo></Todo>}></Route>
        <Route path='completed' element={<Completed></Completed>}></Route>
        <Route path='calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
