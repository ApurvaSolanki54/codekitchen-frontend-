
import './App.css';
import Description from './components/Layout/Description.component.js';
import Edit from './components/Layout/Edit.component';
import Layout from './components/Layout/Layout.component';
import Question from './components/Questions/Question.component';
import Login from './components/User/Login.component';
import Profile from './components/User/Profile.component.js';
import Register from './components/User/Register.component';
import { BrowserRouter as Router, Route, Routes,redirect, Link, useNavigate, Navigate  } from 'react-router-dom';
import Demo from './components/User/Demo.js';
import LoadingLayout from './components/Loading/LoadingLayout.componenent.js';
import LoadingTable from './components/Loading/LoadingTable.js';
import UserSubmittedCode from './components/Layout/UserSubmittedCode.component.js';

import Navbar from './components/Navbar/Navbar.component.js';
import Protected from './components/Protected/Protected.component.js';
import {useAuth} from './components/Protected/AuthProvider.js';
import { useEffect } from 'react';

const ProtectedRoute = ({component, ...rest }) => {
    
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    console.log("login: ", isLoggedIn)
    return (
        
        isLoggedIn ? (
        <component />): (navigate('/login', {replace: true}))
    );
};

function Main() {
  return (
    <div className="App">
      <Navbar>
        {

          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Protected Component={Question}/>}/>
            </Routes>
          </Router>
        }
      </Navbar>
    </div>
  );
}

export default Main;
