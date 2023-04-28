import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import { Navigate, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
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
                <Link to="/fileCV">
                  <Link className="dropdown-item" href="#">
                    Cập nhập hồ sơ
                  </Link>
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

  return (
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
  );
}
export default Header;
