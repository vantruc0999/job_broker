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
// import HeaderRe from "./components/common/Header";
import Showjob from "./components/recruiter/Showjob";
import Test from "./components/candidate/Test";
import ManageJob from "./components/recruiter/ManageJob";
import MyCV from "./components/candidate/MyCV";
import Test2 from "./components/candidate/Test2";
import ManageCan from "./components/recruiter/ManageCan";
// import AdminHome from "./components/admin/AdminHome";
import AdminIndex from "./components/admin/AdminIndex";
import Sidebar from "./components/recruiter/Sidebar";
import SidebarAdmin from "./components/admin/SidebarAdmin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider
      deferLoading={true}
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        intent: "capture",
      }}
    >
      <Router>
        <App>
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="/homeCandidate" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginCruiter" element={<LoginRecruiter />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerCruiter" element={<RegisterCruiter />} />
            <Route path="/createCV" element={<CreateCV />} />
            <Route path="/fileCV" element={<FileCV />} />
            <Route path="/allCV" element={<MyCV />} />
            <Route path="/allCV/fileCV/:id" element={<FileCV />} />
            <Route path="/handleCV" element={<HandleCV />} />
            <Route path="/uploadCV" element={<MyPdfReader />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/homeRecruiter" element={<HomeRe />} />
            <Route path="/manageJob" element={<ManageJob />} />
            <Route path="/job/:id" element={<Test />} />
            <Route path="/managecan" element={<ManageCan />} />
            {/* admin */}
            <Route path="/homeadmin" element={<SidebarAdmin />} />
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