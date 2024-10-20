import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';

import { HashRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

import SidebarContainer from './components/Friends/SidebarContainer';
import NavbarContainer from './components/Navbar/NavbarConteiner';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/LoginPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';
import { lazy, Suspense } from 'react';
import Footer from './components/Footer/Footer';
import "leaflet/dist/leaflet.css";



//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some Error Occured");
    //console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandlerejection", this.catchAllUnhandledErrors) 
  }
  componentWillUnmount() {
    window.removeEventListener("unhandlerejection", this.catchAllUnhandledErrors) 
  }
  render() {

    if (!this.props.initialized) {
      return (
      <div className="preloader-container">
        <Preloader />
      </div>
    )}

  return (
    <HashRouter>
      <div className={`main-wrapper ${this.props.initialized ? 'initialized' : ''}`}>
        <HeaderContainer />
        <div className='App-wrapper'>
          <NavbarContainer />
          <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path='/' element={<LoginPage />} /> {/* MAIN PAGE */}
                <Route path='/dialogs' element={<DialogsContainer />} />
                <Route path='/profile/:userId?' element={<ProfileContainer />} />
                <Route path="/profile" element={<ProfileContainer isMain={true}/>} /> 
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/friends' element={<SidebarContainer />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<div>404 NOT FOUND</div>} />
              </Routes>
            </Suspense>
          </div>
        </div>
        <Footer/>
      </div>
    </HashRouter>
  );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, { initializeApp }))(
  App
);