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
              <div class="row">
                <div class="col-lg-3 col-6">
                  <div class="small-box bg-info">
                    <div class="inner">
                      <h3>15</h3>

                      <p>Tin tuyển dụng</p>
                    </div>
                    <div class="icon">
                      <i class="fas fa-shopping-cart"></i>
                    </div>
                    <a href="/" class="small-box-footer">
                      Xem chi tiết <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="small-box bg-success">
                    <div class="inner">
                      <h3>
                        53<sup style={{ fontSize: "20%" }}>%</sup>
                      </h3>

                      <p>Ứng viên</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-stats-bars"></i>
                    </div>
                    <a href="/" class="small-box-footer">
                      Xem chi tiết <i class="fas fa-arrow-circle-right"></i>
                    </a>
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
