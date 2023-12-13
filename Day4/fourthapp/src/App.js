import './Assets/cssfilse/eco.css'

import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./Component/Login";
import Register from './Component/Register';
import Navbar from './Component/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
