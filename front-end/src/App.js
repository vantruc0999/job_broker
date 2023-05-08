import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import HeaderRe from "./components/common/HeaderRe";
import HomeRe from "./components/recruiter/HomeRe";
import ManageJob from "./components/recruiter/ManageJob";

function App(props) {
  let param1 = useLocation();
  return (
    <>
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter")||
      param1["pathname"].includes("loginadmin") ? null : (
        <Header />
      )}
      {props.children}
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter")||
      param1["pathname"].includes("loginadmin") ? null : (
        <Footer />
      )}
    </>
  );
}

export default App;
