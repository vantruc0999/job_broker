import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/Header";
import Login from "./components/authen/Login";
import Register from "./components/authen/Register";
import RegisterCruiter from "./components/authen/RegisterCruiter";
import Homepage from "./components/candidate/Homepage";
import CreateCV from "./components/candidate/CreateCV";
import FileCV from "./components/candidate/FileCV";
import HandleCV from "./components/candidate/HandleCV";
import MyPdfReader from "./components/candidate/MyPdfReader";
import Checkout from "./components/payment/Checkout";
import AddJob from "./components/recruiter/AddJob";
import LoginRecruiter from "./components/authen/LoginCruiter";
import HomeRe from "./components/recruiter/HomeRecruiter";
import HeaderRe from "./components/common/Header";
import Test from "./components/candidate/Test";
import Showjob from "./components/recruiter/Showjob";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <Router>
        <App>
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route index path="/login" element={<Login />} />
            <Route index path="/loginCruiter" element={<LoginRecruiter />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerCruiter" element={<RegisterCruiter />} />
            <Route path="/createCV" element={<CreateCV />} />
            <Route path="/fileCV" element={<FileCV />} />
            <Route path="/handleCV" element={<HandleCV />} />
            <Route path="/uploadCV" element={<MyPdfReader />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/homeRecruiter" element={<HomeRe />} />
            <Route path="/headerRe" element={<HeaderRe />} />
            <Route path="/test" element={<Test />} />
            <Route path="/job" element={<Showjob />} />

          </Routes>
        </App>
      </Router>
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
