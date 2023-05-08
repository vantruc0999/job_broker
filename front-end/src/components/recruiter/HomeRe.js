import React from "react";
import HeaderRe from "../common/HeaderRe";
import Sidebar from "../common/Sidebar";

const HomeRe = () => {
  return (
    <div>
      {/* <Sidebar></Sidebar> */}
      <main id="main" className="main" style={{ minHeight: "665px" }}>
        <div className="pagetitle">
          <h1>Hello các bạn</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Trang chính</a>
              </li>
              <li className="breadcrumb-item active">Chi tiết</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xxl-4 col-md-4">
                  <div className="card info-card sales-card">
                    {/* <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Lọc</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Ngày
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Tháng
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Năm
                          </a>
                        </li>
                      </ul>
                    </div> */}

                    <div className="card-body">
                      <h5 className="card-title">
                        Tin tuyển dụng
                        {/* <span>| Ngày</span> */}
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-newspaper"></i>
                        </div>
                        <div className="ps-3">
                          <h6>12</h6>
                          <span className="text-success small pt-1 fw-bold">
                            12%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            tăng trưởng
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-md-4">
                  <div className="card info-card revenue-card">
                    {/* <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Lọc</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Ngày
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Tháng
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Năm
                          </a>
                        </li>
                      </ul>
                    </div> */}

                    <div className="card-body">
                      <h5 className="card-title">
                        Tin nhắn
                        {/* <span>| Ngày</span> */}
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-messenger"></i>
                        </div>
                        <div className="ps-3">
                          <h6>5</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-md-4">
                  <div className="card info-card customers-card">
                    {/* <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Lọc</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Ngày
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Tháng
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Năm
                          </a>
                        </li>
                      </ul>
                    </div> */}

                    <div className="card-body">
                      <h5 className="card-title">
                        Hồ sơ ứng tuyển
                        {/* <span>| Ngày</span> */}
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>12</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            tăng trưởng
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeRe;
