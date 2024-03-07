import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AppContext from './context/AppContext';
import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import Home from './components/Home';

function GuestRoutes(){
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}
function App() {
  const [users, setUsers] = useState([])
  const {auth} = useAuth()

  return (
    <div className="App">
      <AppContext.Provider value={{users, setUsers}}>
        <BrowserRouter>
          <GuestRoutes />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
