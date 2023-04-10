import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Login from './components/authen/Login';
import Register from './components/authen/Register';
import RegisterCruiter from './components/authen/RegisterCruiter';
import Homepage from './components/candidate/Homepage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerCruiter" element={<RegisterCruiter />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
