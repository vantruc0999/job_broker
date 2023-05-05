import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const ManageJob = () => {
  const [job, setJob] = useState("");
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
      .get(`http://127.0.0.1:8000/api/recruiter/jobs`, config)
      .then((res) => {
        // console.log(res);
        setJob(res.data);
      });
  }, []);
  // console.log(job.jobs[0].company_name);
  const renderAllJob = () => {
    if (Object.keys(job).length > 0) {
      console.log(job.jobs);
      return job.jobs.map((value, key) => {
        return (
          <>
            <tbody>
              <tr
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                <th scope="row">
                  <i
                    class="bi bi-briefcase"
                    style={{
                      fontSize: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></i>
                </th>
                <td>
                  <ul style={{ textAlign: "left" }}>
                    <a href="/" className="title-list">
                      {value.job_name}
                    </a>

                    {/* <li className="title-list">{job.jobs[0].company_name}</li> */}
                    <li className="title-list">Cập nhật lúc</li>
                    <li className="title-list">{value.job_location}</li>
                    <a href="/" className="title-list">
                      Xem danh sách phù hợp
                    </a>
                  </ul>
                </td>
                <td>00/00/0000</td>
                <td>00/00/0000</td>
                <td>Nguyễn Văn A</td>
                <td style={{ display: "grid" }}>
                  <a
                    href="/"
                    className="btn btn-outline-success"
                    style={{
                      margin: "2px",
                      fontSize: "13px",
                      padding: "2px 5px",
                    }}
                  >
                    Chỉnh Sửa
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-danger"
                    style={{
                      margin: "2px",
                      fontSize: "13px",
                      padding: "2px 5px",
                    }}
                  >
                    Xóa
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-info"
                    style={{
                      margin: "2px",
                      fontSize: "13px",
                      padding: "2px 5px",
                    }}
                  >
                    Chia sẻ
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-secondary"
                    style={{
                      margin: "2px",
                      fontSize: "13px",
                      padding: "2px 5px",
                    }}
                  >
                    Tạm dừng
                  </a>
                </td>
              </tr>
            </tbody>
          </>
        );
      });
    }
  };

  return (
    <div>
      <Sidebar />
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
                      Danh sách tin tuyển dụng
                    </h5>
                    <Link to="/addjob">
                      <a
                        href="/"
                        className="btn btn-warning"
                        style={{ fontSize: "14px" }}
                      >
                        Đăng tin tuyển dụng mới
                      </a>
                    </Link>
                  </div>

                  <table class="table table-bordered">
                    <thead>
                      <tr
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <th scope="col"></th>
                        <th scope="col">Tiêu đề việc làm</th>
                        <th scope="col">Ngày bắt đầu</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Người phụ trách</th>
                        <th scope="col">Hành động</th>
                      </tr>
                    </thead>
                    {renderAllJob()}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageJob;
