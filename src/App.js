import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Friends/SidebarContainer';
import NavbarContainer from './components/Navbar/NavbarConteiner';

debugger;
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<SidebarContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;