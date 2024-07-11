import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = (prors) => {
  return (
    <div className ='App-wrapper'>
          <Header/>
          <Navbar/>
          {/*<Profile/>*/}
          <div class='app-wrapper-content'>
            <Dialogs/>
          </div>
    </div>
  );
}

export default App;
