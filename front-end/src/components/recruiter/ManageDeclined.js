import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";
import ModalCV from "./ModalCV";
function ManageDeClined() {
  const [id, setId] = useState("");
  const [job, setJob] = useState("");
  const [allJob, setAllJob] = useState("");
  const [candidate, setCandidate] = useState("");
  const [declined, setDeclined] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalId, setModalId] = useState(null);
  const handleOpenModal = (id) => {
    setModalId(id);
  };
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
      .get(`http://127.0.0.1:8000/api/recruiter/jobs`, config)
      .then((res) => {
        setAllJob(res.data);
      });
  }, []);
  useEffect(() => {}, [declined]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/jobs`, config).then((res) => {
      // console.log(res.data);
      setJob(res.data);
    });
  }, []);
  const handleGetID = async (e) => {
    let id = e.target.value;
    setId(id);
    await axios
      .get(
        `http://127.0.0.1:8000/api/recruiter/get-declined-candidates/` + id,
        config
      )
      .then((res) => {
        setDeclined(res.data);
      });
  };

  const renderJob = () => {
    if (Object.keys(allJob).length > 0) {
      return allJob.jobs.map((value, key) => {
        return (
          <>
            <option value={value.job_id}> {value.job_name}</option>
          </>
        );
      });
    }
  };

  const handleApply = (e) => {
    let id = e.currentTarget.id;
    // console.log(e.currentTarget.id);
    console.log(id);
    axios
      .post(`http://127.0.0.1:8000/api/recruiter/resume-accept/` + id, config)
      .then((res) => {
        if (res.data.message.includes("approved")) {
          alert("Duyệt ứng viên thành công");
        }
        const afterDelte = declined.filter((object) => {
          return object.application_id.toString() !== id;
        });
        console.log(afterDelte);
      });
  };
  const renderCanofJobID = () => {
    if (Object.keys(declined).length > 0) {
      return declined.map((value, key) => {
        return (
          <>
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
                <td>{value.fullname}</td>
                <td>{value.email}</td>
                <td>{value.skills}</td>
                <td>{value.status}</td>
                <td class="project-actions text-right">
                  <a
                    onClick={() => {
                      setOpenModal(true);
                      handleOpenModal(value.resume_id);
                    }}
                    id={value.resume_id}
                    class="btn btn-primary btn-sm"
                  >
                    <i class="fas fa-eye"></i>
                    Xem
                  </a>

                  <a
                    class="btn btn-info btn-sm"
                    id={value.application_id}
                    onClick={handleApply}
                    style={{ margin: "0 5px" }}
                  >
                    <i class="fas fa-check"></i>
                    Duyệt
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
      {openModal && <ModalCV closeModal={setOpenModal} modalId={modalId} />}
      <Sidebar />
      <main id="main" className="main" style={{ minHeight: "665px" }}>
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
                          className="fas fa-arrow-circle-right"
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
                              <label>Ngành nghề chuyên môn</label>

                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                                value=""
                                onChange={handleGetID}
                              >
                                <option selected="" value="">
                                  Chọn ngành nghề chuyên môn
                                </option>
                                {renderJob()}
                              </select>
                            </div>
                            <div className="col-md-3 margin">
                              <label>Chọn theo loại</label>

                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: "13px" }}
                              >
                                {renderJob()}
                              </select>
                            </div>
                            <div className="col-md-3 margin">
                              <label>Ngôn ngữ</label>
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
                              <label>Bằng cấp</label>
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
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "60%",
                              marginLeft: "10px",
                              marginTop: "10px",
                            }}
                          >
                            <label>Hiển thị: </label>
                            <div className="checkbox">
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
                                Ứng viên đã duyệt
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
                                Ứng viên bị từ chối
                              </label>
                            </div>
                          </div>

                          <button
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
                          <th scope="col">Email</th>
                          <th scope="col">Kỹ năng chuyên môn</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Chức năng</th>
                        </tr>
                      </thead>
                      {renderCanofJobID()}
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
}
export default ManageDeClined;
