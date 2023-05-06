import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import HeaderRe from "./components/common/HeaderRe";
import HomeRe from "./components/recruiter/HomeRe";
import ManageJob from "./components/recruiter/ManageJob";
import Navbar from "./components/admin/Navbar";

function App(props) {
  let param1 = useLocation();
  return (
    <>
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter") ? null : (
        <Header />
      )}
      {props.children}
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter") ? null : (
        <Footer />
      )}
    </>
  );
}

export default App;
