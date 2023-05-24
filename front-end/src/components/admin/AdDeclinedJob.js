import "../../assets/css/adminlte.min.css";
// import "../../assets/newcss/fontawesome-free/css/all.min.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalViewJob from "./ModalViewJob";
function AdDeclinedJob() {
  const [jobwait, setJobwait] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");
  const [success, setSuccess] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  const config = {
    headers: {
      Authorization: "Bearer " + user.token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  const render = () => {
    axios
      .get(`http://127.0.0.1:8000/api/admin/view-declined-jobs`, config)
      .then((res) => {
        console.log(res.data);
        setJobwait(res.data.jobs);
      });
  };

  useEffect(() => {
    render();
  }, []);
  const handleDetailCV = async (e) => {
    let user = JSON.parse(localStorage.getItem("user"));
    const config2 = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    let id = e.target.id;
    let url = "http://127.0.0.1:8000/api/admin/accept-job/" + e.target.id;
    console.log(url, config2);
    await axios
      .post("http://127.0.0.1:8000/api/admin/accept-job/" + id, null, config2)
      .then((res) => {
        console.log(res.data.message);
        setSuccess(res.data);
        if (res.data.message.includes("approved")) {
          alert(res.data.message);
        }
      });
    render();
  };
  const handleDelete = async (e) => {
    let id = e.target.id;
    let url = "http://127.0.0.1:8000/api/admin/accept-job/" + e.target.id;
    console.log(url, config);
    console.log(id);
    await axios
      .post("http://127.0.0.1:8000/api/admin/decline-job/" + id, null, config)
      .then((res) => {
        console.log(res.data);
        if (res.data.message.includes("declined")) {
          alert(res.data.message);
        }
      });
    render();
  };

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
                </td>
                <td>{value.salary}</td>
                <td>{value.status}</td>
                <td className="project-actions text-right">
                  {openModal === false ? (
                    <>
                      <span
                        className="btn btn-primary btn-sm"
                        id={value.job_id}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenModal(true);
                        }}
                        style={{ margin: " 5px 0" }}
                      >
                        <i className="fas fa-folder"> </i>
                        Xem
                      </span>
                    </>
                  ) : (
                    <ModalViewJob setJobwait={setJobwait} id={value.job_id} />
                  )}
                  <button
                    id={value.job_id}
                    className="btn btn-success ml-2 btn-sm"
                    onClick={(e) => handleDetailCV(e)}
                  >
                    Duyệt
                  </button>
                  {/* <button
                    id={value.job_id}
                    className="btn btn-success ml-2"
                    onClick={(e) => handleDelete(e)}
                  >
                    Xóa
                  </button> */}
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
                          <th>Địa chỉ</th>
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
export default AdDeclinedJob;
