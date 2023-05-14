import React from "react";

const HistoryBuyPackage = () => {
  return (
    <>
      <div className="content-wrapper" style={{ minHeight: "665px" }}>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Lịch sử</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Main content */}
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">
                    Lịch sử mua gói dịch vụ của các nhà tuyển dụng
                  </h3>
                </div>
                <div class="card-body">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Tên công ty</th>
                        <th>Tên gói</th>
                        <th>Giá</th>
                        <th>Tạo ngày</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>FPT</td>
                        <td>VIPPRO</td>
                        <td>100 USD</td>
                        <td>00/00/000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer clearfix">
                  <ul class="pagination pagination-sm m-0 float-right">
                    <li class="page-item">
                      <a class="page-link" href="/">
                        «
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/">
                        »
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HistoryBuyPackage;
