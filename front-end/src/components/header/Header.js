import Logo from "../../assets/images/logo.jpg";
function Header() {
  const renderLog = () => {
    return (
      <>
        <li>
          <a href="/" className="btn  btn-outline-primary mr-2">
            Đăng ký
          </a>
          <a href="/" className="btn btn-primary">
            Đăng nhập
          </a>
        </li>
      </>
    );
  };

  const renderToggle = () => {
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
          <a
            className="nav-link dropdown-toggle text-dark"
            data-toggle="dropdown"
            href="/"
          >
            Thắng Nguyễn
          </a>
          <div className="dropdown-menu">
            <div style={{ borderBottom: "1px solid /e7e9eb" }}>
              <a className="dropdown-item" href="/">
                Cập nhập hồ sơ
              </a>
              <a className="dropdown-item" href="/">
                Giới thiệu bản thân
              </a>
              <a className="dropdown-item" href="/">
                Đổi mật khẩu
              </a>
            </div>
            <div style={{ borderBottom: "1px solid /e7e9eb" }}>
              <a className="dropdown-item" href="/">
                Việc làm đã ứng tuyển
              </a>
              <a className="dropdown-item" href="/">
                Việc làm đã lưu
              </a>
            </div>
            <div>
              <a className="dropdown-item" href="/">
                Đăng xuất
              </a>
            </div>
          </div>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid" style={{ background: "#fff" }}>
        {/* NAVBAR HEADER */}
        <div className="container" style={{ background: "#fff" }}>
          <div
            className="row p-2"
            // style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="navbar">
              <ul className="nav" style={{ textAlign: "center" }}>
                <img className="navbar-brand" src={Logo} alt="" />
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="/"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Việc làm
                  </a>
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
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="/"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Công ty
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Công ty tiêu biểu
                    </a>
                    <a className="dropdown-item" href="/">
                      Tất cả công ty
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    data-toggle="dropdown"
                    href="/"
                  >
                    CV / Hồ sơ
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Tạo CV
                    </a>
                    <a className="dropdown-item" href="/">
                      Check CV
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    data-toggle="dropdown"
                    href="/"
                  >
                    Phát triển sự nghiệp
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Tra cứu
                    </a>
                    <a className="dropdown-item" href="/">
                      Kiến thức
                    </a>
                    <a className="dropdown-item" href="/">
                      Tra cứu lương
                    </a>
                  </div>
                </li>

                {/* <li className="nav-item ml-3">
                <a className="nav-link recruiter text-dark" href="/">
                  Nhà tuyển dụng
                </a>
              </li> */}
              </ul>
              <div className="account" style={{ float: "right" }}>
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
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    data-toggle="dropdown"
                    href="/"
                  >
                    Thắng Nguyễn
                  </a>
                  <div className="dropdown-menu">
                    <div style={{ borderBottom: "1px solid /e7e9eb" }}>
                      <a className="dropdown-item" href="/">
                        Cập nhập hồ sơ
                      </a>
                      <a className="dropdown-item" href="/">
                        Giới thiệu bản thân
                      </a>
                      <a className="dropdown-item" href="/">
                        Đổi mật khẩu
                      </a>
                    </div>
                    <div style={{ borderBottom: "1px solid /e7e9eb" }}>
                      <a className="dropdown-item" href="/">
                        Việc làm đã ứng tuyển
                      </a>
                      <a className="dropdown-item" href="/">
                        Việc làm đã lưu
                      </a>
                    </div>
                    <div>
                      <a className="dropdown-item" href="/">
                        Đăng xuất
                      </a>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
