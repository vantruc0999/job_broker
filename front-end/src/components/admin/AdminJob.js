import "../../assets/css/adminlte.min.css";
// import "../../assets/newcss/fontawesome-free/css/all.min.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalViewJob from "./ModalViewJob";
function AdminJob() {
  const [jobwait, setJobwait] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/admin/waiting-jobs`, config)
      .then((res) => {
        console.log(res.data);
        setJobwait(res.data.jobs);
      });
  }, []);
  // const handleDetailCV = (e) => {
  //   alert(e.target.id);
  //   setId(e.target.id);
  // };
  console.log(openModal);
  const renderJobWait = () => {
    if (Object.keys(jobwait).length > 0) {
      return jobwait.map((value, key) => {
        return (
          <>
            <tbody>
              <tr>
                <td>{value.company_name}</td>
                <td>
                  <a> {value.job_name} </a>
                  <br />
                  <small> Ngày tạo 01.01.2019 </small>
                </td>
                <td>00/00/0000</td>
                <td className="project_progress">00/00/0000</td>
                <td className="project-state">Hoạt động</td>
                <td className="project-actions text-right">
                  {openModal == false ? (
                    <>
                      <a
                        className="btn btn-primary btn-sm"
                        id={value.job_id}
                        onClick={(e) => {
                          setOpenModal(true);
                        }}
                      >
                        <i className="fas fa-folder"> </i>
                        Xem
                      </a>
                    </>
                  ) : (
                    <ModalViewJob id={value.job_id} />
                  )}
                </td>
              </tr>
            </tbody>
          </>
        );
      });
    }
  };
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
                  <li className="breadcrumb-item active">Công việc</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Công việc của các công ty</h3>
              <div className="card-tools">
                <div
                  className="input-group input-group-sm"
                  style={{ width: 150 }}
                >
                  <input
                    type="text"
                    name="table_search"
                    className="form-control float-right"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div
                id="example2_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6" />
                  <div className="col-sm-12 col-md-6" />
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      id="example2"
                      className="table table-bordered table-hover dataTable dtr-inline"
                      aria-describedby="example2_info"
                    >
                      <thead>
                        <tr>
                          <th>Tên công ty</th>
                          <th>Tên công việc</th>
                          <th>Ngày bắt đầu</th>
                          <th>Ngày kết thúc</th>
                          <th>Trạng thái</th>
                          <th>Tính năng</th>
                        </tr>
                      </thead>
                      {renderJobWait()}
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="example2_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="example2_previous"
                        >
                          <a
                            href="#"
                            aria-controls="example2"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            Sau
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="example2"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="example2"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li className="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="example2"
                            data-dt-idx={3}
                            tabIndex={0}
                            className="page-link"
                          >
                            3
                          </a>
                        </li>
                        <li className="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="example2"
                            data-dt-idx={4}
                            tabIndex={0}
                            className="page-link"
                          >
                            4
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="example2_next"
                        >
                          <a
                            href="#"
                            aria-controls="example2"
                            data-dt-idx={7}
                            tabIndex={0}
                            className="page-link"
                          >
                            Tiếp
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default AdminJob;
