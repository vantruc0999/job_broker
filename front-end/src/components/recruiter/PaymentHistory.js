import React from "react";
import Sidebar from "./Sidebar";

const PaymentHistory = () => {
  return (
    <div>
      <Sidebar />
      <main id="main" className="main" style={{ minHeight: "665px" }}>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Lịch sử gói dịch vụ đã thanh toán</h3>
                </div>
                <div class="card-body">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th style={{ width: "10px" }}>Thứ</th>
                        <th>Tên gói</th>
                        <th>Giá</th>
                        <th>Tạo ngày</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
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
      </main>
    </div>
  );
};

export default PaymentHistory;
