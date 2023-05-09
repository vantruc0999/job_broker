import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
// import { Routes, Route, Link, useLocation } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import HeaderRe from "./components/common/HeaderRe";
// import HomeRe from "./components/recruiter/HomeRe";
import ManageJob from "./components/recruiter/ManageJob";
// import Header from "./components/header/Header";
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
// import HomeRe from "./components/recruiter/HomeRecruiter";
// import HeaderRe from "./components/common/Header";
import Showjob from "./components/recruiter/Showjob";
import Test from "./components/candidate/Test";
// import ManageJob from "./components/recruiter/ManageJob";
import MyCV from "./components/candidate/MyCV";
import Test2 from "./components/candidate/Test2";
import ManageCan from "./components/recruiter/ManageCan";
// import AdminHome from "./components/admin/AdminHome";
import AdminIndex from "./components/admin/AdminJob";
// import Sidebar from "./components/recruiter/Sidebar";
import SidebarAdmin from "./components/admin/SidebarAdmin";
import LoginAdmin from "./components/authen/LoginAdmin";
import AdminHome from "./components/admin/AdminHome";
import AdminJob from "./components/admin/AdminJob";
import AdminCV from "./components/admin/AdminCV";
import Package from "./components/admin/Package";
import PrivateRoutesAdmin from "./components/authen/PrivateRoutesAdmin";
import PrivateRoutesCandidate from "./components/authen/PrivateRoutesCandidate";
import PrivateRoutesRecruiter from "./components/authen/PrivateRoutesRecruiter";
import HomeRecruiter from "./components/recruiter/HomeRecruiter";
import PackageRe from "./components/recruiter/PackageRe";
import PaymentHistory from "./components/recruiter/PaymentHistory";
import ListJob from "./components/candidate/ListJob";
function App(props) {
  let param1 = useLocation();
  return (
    <>
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter") ||
      param1["pathname"].includes("loginadmin") ? null : (
        <Header />
      )}
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/homeCandidate" element={<Homepage />} />
        <Route path="/homeRecruiter" element={<HomeRecruiter />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Candidate */}
        <Route element={<PrivateRoutesCandidate />}>
          <Route path="/createCV" element={<CreateCV />} />
          <Route path="/fileCV" element={<FileCV />} />
          <Route path="/allCV" element={<MyCV />} />
          <Route path="/allCV/fileCV/:id" element={<FileCV />} />
          <Route path="/handleCV" element={<HandleCV />} />
          <Route path="/uploadCV" element={<MyPdfReader />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/listJob" element={<ListJob />} />
        </Route>
        {/* ---------- */}

        {/* Recruiter */}
        <Route path="/loginCruiter" element={<LoginRecruiter />} />
        <Route path="/registerCruiter" element={<RegisterCruiter />} />
        <Route path="/job/:id" element={<Test />} />

        <Route element={<PrivateRoutesRecruiter />}>
          <Route path="/addJob" element={<AddJob />} />
          <Route path="/manageJob" element={<ManageJob />} />
          <Route path="/managecan" element={<ManageCan />} />
          <Route path="/packageRecruiter" element={<PackageRe />} />
          <Route path="/paymentHistory" element={<PaymentHistory />} />
        </Route>

        {/* ------------ */}
        {/* admin */}
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route element={<PrivateRoutesAdmin />}>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminjob" element={<AdminJob />} />
          <Route path="/adminjob/job/:id" element={<Test />} />
          <Route path="/admincv" element={<AdminCV />} />
          <Route path="/admincv/fileCV/:id" element={<FileCV />} />
          <Route path="/package" element={<Package />} />
        </Route>
      </Routes>
      {/* {props.children} */}
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter") ||
      param1["pathname"].includes("loginadmin") ? null : (
        <Footer />
      )}
    </>
  );
}

export default App;
