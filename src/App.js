import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Friends/SidebarContainer';
import NavbarContainer from './components/Navbar/NavbarConteiner';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<SidebarContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;