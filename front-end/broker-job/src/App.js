import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function App(props) {
  let param1 = useLocation();
console.log(param1);
  return (
    <>
      {param1["pathname"].includes("login") || param1["pathname"].includes("register")|| param1["pathname"].includes("registerCruiter") ? null : <Header />}
      {props.children}
      {param1["pathname"].includes("login") || param1["pathname"].includes("register")|| param1["pathname"].includes("registerCruiter") ? null : (
        <Footer />
      )}
    </>
  );
}

export default App;
