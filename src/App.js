import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './Components/Calender/Calender';
import Completed from './Components/Completed/Completed';
import Home from './Components/Home/Home';
import Todo from './Components/Todo/Todo';
import Navbar from './Components/Navbar/Navbar';
import UpdateTodo from './Components/Todo/UpdateTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='todo' element={<Todo></Todo>}></Route>
        <Route path='todo/:id' element={<UpdateTodo></UpdateTodo>}></Route>
        <Route path='completed' element={<Completed></Completed>}></Route>
        <Route path='calender' element={<Calender></Calender>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
