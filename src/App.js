import React, { Fragment, useEffect, useState } from 'react'
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes,Route, Redirect, Navigate } from 'react-router-dom';
import Menu from './Menu'
import HeaderBlock from './HeaderBlock'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './features/userSlice'
import { logout, selectUser } from './features/userSlice'
import Signup from './Signup'
import TeslaAccount from './TeslaAccount'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth,(userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
      <Routes>
     <Route  path="/" exact  element={<Fragment><Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /><HeaderBlock/>{isMenuOpen && <Menu/>}</Fragment>}/>
     <Route  path="/login"  element={<>{user? <Navigate  to="/teslaaccount"/>:<Login/>} </>}/>
     <Route  path="/signup"  element={<Signup/>}/>
     <Route  path="/teslaaccount"  element={<>{!user? <Navigate  to="/login"/>: <TeslaAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}{isMenuOpen && <Menu/>}</>}/>
     </Routes>
    </div>
    </Router>
  
  );
}

export default App;
