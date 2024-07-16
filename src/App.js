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
import state, { addPost } from './redux/state';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs dialogsData={props.state.profilePage.dialogsData} messagesData={props.state.messagesPage.messagesData} />} />
            <Route path='/profile' element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/Friends' element={<Friends friendsData={props.state.sidebar.sidebarFriends}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;