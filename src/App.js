import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Header />
        <Navbar sidebar={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends friendsData={props.state.sidebar.sidebarFriends}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;