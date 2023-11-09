import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';

import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Routes/Home';
import Mynetwork from './Components/Routes/Mynetwork';
import Jobs from './Components/Routes/Jobs';
import Messaging from './Components/Routes/Messaging';
import Notifications from './Components/Routes/Notifications';
import WholeProfile from './Components/Routes/WholeProfile';

function App() {

  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is loggedin
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.displayName,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        //user is loggedout
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">

      {
        !user ? <Login /> : (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/mynetwork' element={<Mynetwork />}></Route>
              <Route path='/jobs' element={<Jobs />}></Route>
              <Route path='/messaging' element={<Messaging />}></Route>
              <Route path='/notifications' element={<Notifications />}></Route>
              <Route path='/profile' element={<WholeProfile />}></Route>
            </Routes>
          </BrowserRouter>
        )
      }

    </div>
  );
}

export default App;
