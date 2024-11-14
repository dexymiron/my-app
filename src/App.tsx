import React from 'react';
import './App.scss';

import HeaderContainer from './components/Header/HeaderContainer';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import SidebarContainer from './components/Friends/SidebarContainer';
import NavbarContainer from './components/Navbar/NavbarConteiner';
import {UsersPage} from './components/Users/UsersContainer';
import LoginPage from './components/Login/LoginPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
//@ts-ignore
import Preloader from './components/common/preloader/preloader';
//@ts-ignore
import notFoundPage from './assets/images/404.png';
import { lazy, Suspense } from 'react';
import Footer from './components/Footer/Footer';
import "leaflet/dist/leaflet.css";
import { AppStateType } from './redux/redux-store';


//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
//@ts-ignore
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = lazy(() => import('./pages/Chat/ChatPage'));


type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some Error Occured");
    //console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  render() {

    if (!this.props.initialized) {
      return (
      <div className="preloader-container">
        <Preloader />
      </div>
    )}

    const isAuth = this.props.isAuth;

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
                <Route path='/users' element={isAuth ? <UsersPage /> : <Navigate to="/login" replace />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/chatpage' element={isAuth ? <ChatPage /> : <Navigate to="/login" replace />} />
                <Route path='*' element={<div ><img src={notFoundPage} alt='error' className='notFound'></img></div>} />
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

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App);