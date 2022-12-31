import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Post from './components/Post/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Login />} />
        <Route path='/post/:id' element={<Single />} />

        {/* <Topbar /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Settings /> */}
        {/* <Write /> */}
        {/* <Single /> */}
        {/* <Home /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
