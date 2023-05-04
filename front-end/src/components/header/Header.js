import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import { Navigate, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const renderLog = () => {
    var user = localStorage.getItem("user");
    user = JSON.parse(user);
    console.log(user);
    if (user) {
      return (
        <>
          <li className="nav-item d-flex divide dropdown">
            <img
              className="navbar-brand"
              src={Logo}
              alt=""
              style={{
                width: "15%",
                height: 30,
                padding: 0,
                margin: 0,
                marginTop: 6,
              }}
            />
            <Link
              className="nav-link dropdown-toggle text-dark"
              data-toggle="dropdown"
              href="#"
            >
              {user.role === "candidate" ? user.full_name : user.recruiter_name}
            </Link>
            <div className="dropdown-menu">
              <div style={{ borderBottom: "1px solid #e7e9eb" }}>
                  <Link to="/fileCV" className="dropdown-item" href="#">
                    Cập nhập hồ sơ
                  </Link>
                <Link className="dropdown-item" href="#">
                  Giới thiệu bản thân
                </Link>
                <Link className="dropdown-item" href="#">
                  Đổi mật khẩu
                </Link>
              </div>
              <div style={{ borderBottom: "1px solid #e7e9eb" }}>
                <Link className="dropdown-item" href="#">
                  Việc làm đã ứng tuyển
                </Link>
                <Link className="dropdown-item" href="#">
                  Việc làm đã lưu
                </Link>
              </div>
              <div onClick={logout}>
                <Link className="dropdown-item" href="#">
                  Đăng xuất
                </Link>
              </div>
            </div>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/register">
              <a href="" className="btn  btn-outline-primary mr-2">
                Đăng ký
              </a>
            </Link>
            <Link to="/login">
              <a href="" className="btn btn-primary">
                Đăng nhập
              </a>
            </Link>
          </li>
        </>
      );
    }
  };
  const HeaderCan = ()=>{
    return(
      <>
         <div className="container-fluid" style={{ padding: 0 }}>
        {/* NAVBAR HEADER */}
        <div className="container">
          <div className="row justify-content-between p-2">
            <ul className="nav justify-content-start align-items-center">
              <img className="navbar-brand" src={Logo} alt="" />
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Việc làm
                </Link>
                <div className="dropdown-menu">
                  <table className="dropdown-item" id="menu-listjob">
                    <tbody>
                      <tr>
                        <th>Việc làm theo chuyên ngành ngành</th>
                        <th>Việc làm theo địa điểm</th>
                        <th>Việc làm theo nhu cầu</th>
                      </tr>
                      <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Công ty
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="#">
                    Công ty tiêu biểu
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Tất cả công ty
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  data-toggle="dropdown"
                  href="#"
                >
                  CV / Hồ sơ
                </a>
                <div className="dropdown-menu">
                  <Link to="/createCV">
                  <a className="dropdown-item" href="#">
                    Tạo CV
                  </a>
                  </Link>
                  <a className="dropdown-item" href="#">
                    Check CV
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  data-toggle="dropdown"
                  href="#"
                >
                  Phát triển sự nghiệp
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="#">
                    Tra cứu
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Kiến thức
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Tra cứu lương
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="nav justify-content-end align-items-center">
              {renderLog()}
              <li className="nav-item ml-3">
                <Link
                  className="nav-link recruiter text-dark"
                  to="/loginCruiter"
                >
                  Nhà tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>
    )
  }
  const HeaderRe = () => {
    return (
      <div>
        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/recruiter">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="d-none d-lg-block">JobBroker</span>
              </a>
            </Link>
          </div>
  
          <div className="search-bar">
            <form
              className="search-form d-flex align-items-center"
              method="POST"
              action="#"
            >
              <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
              />
              <button type="submit" title="Search">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
  
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="/">
                  <i className="bi bi-search"></i>
                </a>
              </li>
  
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-bell"></i>
                  <span className="badge bg-primary badge-number">4</span>
                </a>
  
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    Bạn có 4 cái thông báo
                    <a href="/">
                      <span className="badge rounded-pill bg-primary p-2 ms-2">
                        Xem tất cả
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>
  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
  
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-chat-left-text"></i>
                  <span className="badge bg-success badge-number">3</span>
                </a>
  
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li className="dropdown-header">
                    Bạn có 3 tin nhắn
                    <a href="/">
                      <span className="badge rounded-pill bg-primary p-2 ms-2">
                        Xem tất cả
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li className="message-item">
                    <a href="/">
                      <img
                        src="assets/img/messages-1.jpg"
                        alt=""
                        className="rounded-circle"
                      />
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                 
                </ul>
              </li>
  
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                    alt="Profile"
                    className="rounded-circle"
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      maxWidth: "100px",
                    }}
                  />
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    Recruiter_Name
                  </span>
                </a>
  
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Recruiter_name</h6>
                    <span>Company_name</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li>
                    <Link to="/recruiter/profile">
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="/"
                      >
                        <i className="bi bi-person"></i>
                        <span>Trang hồ sơ</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
  
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/"
                    >
                      <i className="bi bi-box-arrow-right"></i>
                      <span onClick={logout}>Đăng xuất</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  };
  const renderHeader = ()=>{
    var user = localStorage.getItem("user");
    user = JSON.parse(user);
    // console.log(user.role);
    if((user && user.role == "candidate") || user== null){
      // console.log(user.role);
      return(
        <>
          {HeaderCan()}
        </>
      )
    }else if(user && user.role == "recruiter"){
      // console.log(user.role);
      return(
        <>
          {HeaderRe()}
        </>
      )
    }
  }
  return (
    <>
      {renderHeader()}
    </>
  );
}
export default Header;
