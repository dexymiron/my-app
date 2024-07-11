import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';


const App = (prors) => {
  return (
    <BrowserRouter>
      <div className ='App-wrapper'>
          <Header/>
          <Navbar/>
          
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/Dialogs' element={<Dialogs />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/News' element={<News />} />
              <Route path='/Music' element={<Music />} />
              <Route path='/Settings' element={<Settings />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
