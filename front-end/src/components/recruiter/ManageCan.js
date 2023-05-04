import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageCan = () => {
    const [job,setJob] = useState("")
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        let config = {
          headers: {
            Authorization: "Bearer " + user.token,
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        };
    
        axios
          .get(`http://127.0.0.1:8000/api/jobs`, config)
          .then((res) => {
            console.log(res.data);
            setJob(res.data)
          });
      }, []);
  return (
    <div>
        <Sidebar/>
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

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
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
                          className="bi bi-arrow-down-circle"
                          style={{ marginLeft: "10px" }}
                        ></i>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <form className="row g-12" style={{ display: "grid" }}>
                          <div className="form" style={{ display: "flex" }}>
                            <div className="col-md-3 margin">
                              <label className="form-label">
                                Ngành nghề chuyên môn
                              </label>
                              <select
                                className="form-select"
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
                            <div className="col-md-3 margin">
                              <label className="form-label">Kỹ năng mềm</label>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                              >
                                <option selected="">chọn kỹ năng mềm</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col-md-3 margin">
                              <label className="form-label">Ngôn ngữ</label>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                              >
                                <option selected="">Chọn ngôn ngữ</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col-md-3 margin">
                              <label className="form-label">Bằng cấp</label>
                              <select
                                className="form-select"
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
                            <div className="checkbox">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                              />
                              <label
                                className="form-check-label"
                                for="gridRadios1"
                              >
                                Tất cả ứng viên
                              </label>
                            </div>
                            <div className="checkbox">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                              />
                              <label
                                className="form-check-label"
                                for="gridRadios1"
                              >
                                Chỉ ứng viên đã xem
                              </label>
                            </div>
                            <div className="checkbox">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                              />
                              <label
                                className="form-check-label"
                                for="gridRadios1"
                              >
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
                      <i className="bi bi-file-earmark-person"></i>
                      Danh sách ứng viên được quyết định sau
                    </h5>
                    <table className="table table-bordered">
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