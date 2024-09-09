import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Friends/SidebarContainer';
import NavbarContainer from './components/Navbar/NavbarConteiner';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/LoginPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer isMain={true}/>} /> 
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<SidebarContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, { initializeApp }))(
  App
);