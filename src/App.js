import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import state from './redux/state';
import Friends from './components/Friends/Friends';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs dialogsData={state.profilePage.dialogsData} messagesData={state.messagesPage.messagesData} />} />
            <Route path='/profile' element={<Profile posts={state.profilePage.posts} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/Friends' element={<Friends friendsData={state.sidebar.sidebarFriends}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;