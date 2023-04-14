import React from "react";

const HomeRe = () => {
  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Hello các bạn</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Trang chính</a>
              </li>
              <li class="breadcrumb-item active">Chi tiết</li>
            </ol>
          </nav>
        </div>

        <section class="section dashboard">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-xxl-4 col-md-4">
                  <div class="card info-card sales-card">
                    <div class="filter">
                      <a class="icon" href="/" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Lọc</h6>
                        </li>

                        <li>
                          <a class="dropdown-item" href="/">
                            Ngày
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Tháng
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Năm
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">
                        Tin tuyển dụng <span>| Ngày</span>
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-newspaper"></i>
                        </div>
                        <div class="ps-3">
                          <h6>12</h6>
                          <span class="text-success small pt-1 fw-bold">
                            12%
                          </span>
                          <span class="text-muted small pt-2 ps-1">
                            tăng trưởng
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-md-4">
                  <div class="card info-card revenue-card">
                    <div class="filter">
                      <a class="icon" href="/" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Lọc</h6>
                        </li>

                        <li>
                          <a class="dropdown-item" href="/">
                            Ngày
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Tháng
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Năm
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">
                        Tin nhắn <span>| Ngày</span>
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-messenger"></i>
                        </div>
                        <div class="ps-3">
                          <h6>5</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-md-4">
                  <div class="card info-card customers-card">
                    <div class="filter">
                      <a class="icon" href="/" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Lọc</h6>
                        </li>

                        <li>
                          <a class="dropdown-item" href="/">
                            Ngày
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Tháng
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Năm
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">
                        Hồ sơ ứng tuyển <span>| Ngày</span>
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-people"></i>
                        </div>
                        <div class="ps-3">
                          <h6>12</h6>
                          <span class="text-danger small pt-1 fw-bold">
                            12%
                          </span>
                          <span class="text-muted small pt-2 ps-1">
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
