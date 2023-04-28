import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/Header";
import Login from "./components/authen/Login";
import Register from "./components/authen/Register";
import RegisterCruiter from "./components/authen/RegisterCruiter";
import Homepage from "./components/candidate/Homepage";
import HomeRe from "./components/recruiter/HomeRe";
import ManageJob from "./components/recruiter/ManageJob";
import AddJob from "./components/recruiter/AddJob";
import LoginRecruiter from "./components/recruiter/account/LoginRecruiter";
import RegisterRecruiter from "./components/recruiter/account/RegisterRecruiter";
import Profile from "./components/recruiter/Profile";
import JobDetail from "./components/candidate/JobDetail";
import ManageCan from "./components/recruiter/ManageCan";
import Package from "./components/recruiter/Package";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerCruiter" element={<RegisterCruiter />} />
          <Route path="/jobdetail" element={<JobDetail />} />
          <Route path="/recruiter" element={<HomeRe />} />
          <Route path="/recruiter/job" element={<ManageJob />} />
          <Route path="/recruiter/addjob" element={<AddJob />} />
          <Route path="/recruiter/login" element={<LoginRecruiter />} />
          <Route path="/recruiter/register" element={<RegisterRecruiter />} />
          <Route path="/recruiter/profile" element={<Profile />} />
          <Route path="/recruiter/managecan" element={<ManageCan />} />
          <Route path="/recruiter/package" element={<Package />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
