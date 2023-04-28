import React from "react";
import HeaderRe from "../common/HeaderRe";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";

const ManageCan = () => {
  return (
    <div>
      <HeaderRe></HeaderRe>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div
                    className="title"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5 className="card-title" style={{ fontSize: "25px" }}>
                      Quản lý ứng viên
                    </h5>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "20px",
                          padding: "20px 0",
                        }}
                      >
                        Bộ lọc ứng viên
                        <i
                          class="bi bi-arrow-down-circle"
                          style={{ marginLeft: "10px" }}
                        ></i>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <form class="row g-12" style={{ display: "grid" }}>
                          <div className="form" style={{ display: "flex" }}>
                            <div class="col-md-3 margin">
                              <label class="form-label">
                                Ngành nghề chuyên môn
                              </label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                              >
                                <option selected="">
                                  Chọn ngành nghề chuyên môn
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div class="col-md-3 margin">
                              <label class="form-label">Kỹ năng mềm</label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                              >
                                <option selected="">chọn kỹ năng mềm</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div class="col-md-3 margin">
                              <label class="form-label">Ngôn ngữ</label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                              >
                                <option selected="">Chọn ngôn ngữ</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div class="col-md-3 margin">
                              <label class="form-label">Bằng cấp</label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                              >
                                <option selected="">Chọn bằng cấp</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div
                            className="form-label"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "60%",
                              marginLeft: "10px",
                            }}
                          >
                            <label>Hiển thị: </label>
                            <div class="checkbox">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                              />
                              <label class="form-check-label" for="gridRadios1">
                                Tất cả ứng viên
                              </label>
                            </div>
                            <div class="checkbox">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                              />
                              <label class="form-check-label" for="gridRadios1">
                                Chỉ ứng viên đã xem
                              </label>
                            </div>
                            <div class="checkbox">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                              />
                              <label class="form-check-label" for="gridRadios1">
                                Chỉ ứng viên chưa xem
                              </label>
                            </div>
                          </div>

                          <button
                            href="/"
                            className="btn btn-primary"
                            style={{
                              fontSize: "14px",
                              width: "150px",
                              marginLeft: "20px",
                            }}
                          >
                            Lọc ứng viên
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="table-candidate">
                    <h5 className="card-title" style={{ fontSize: "18px" }}>
                      <i class="bi bi-file-earmark-person"></i>
                      Danh sách ứng viên được quyết định sau
                    </h5>
                    <table class="table table-bordered">
                      <thead>
                        <tr
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <th scope="col">Ảnh đại diện</th>
                          <th scope="col">Họ tên</th>
                          <th scope="col">Việc làm đã ứng tuyển</th>
                          <th scope="col">Kinh nghiệm làm việc</th>
                          <th scope="col">Kỹ năng chuyên môn</th>
                          <th scope="col">Học vấn</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <td>
                            <img
                              src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                              alt=""
                              style={{ maxWidth: "80px", borderRadius: "50%" }}
                            />
                          </td>
                          <a href="/">Nguyễn Văn A</a>
                          <td>Fresher</td>
                          <td>1 Năm</td>
                          <td>JAVA</td>
                          <td>Giỏi</td>
                        </tr>
                      </tbody>
                    </table>
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

export default ManageCan;
