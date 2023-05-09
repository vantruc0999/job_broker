import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap_min.css";
import Example from "../candidate/Example";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  let params = useParams();
  const [role, setRole] = useState("");
  const [detailJob, setJobDetail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      let config = {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      setRole(user.role);
      axios
        .get(`http://127.0.0.1:8000/api/job-detail/` + params.id, config)
        .then((res) => {
          console.log("1");
          setJobDetail(res.data.job_detail);
        });
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/job-detail/` + params.id)
        .then((res) => {
          console.log("2");
          setJobDetail(res.data.job_detail);
        });
    }
  }, []);

  
console.log(user);
  return (
    <div>
      <div className="container" style={{ margin: "0 auto", width: "1250px" }}>
        <section className="section">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card_body" style={{ padding: "10px" }}>
                  <h3 className="job_name" style={{ fontWeight: "bold" }}>
                    {detailJob.job_name}
                  </h3>
                  { user && role !== "recruiter"  ? (
                    <>
                      <div className="button" style={{ margin: "20px 0" }}>
                        {openModal == false ? (
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ marginRight: "20px" }}
                            onClick={() => {
                              setOpenModal(true);
                            }}
                          >
                            Ứng tuyển ngay
                          </button>
                        ) : (
                          <Example jobId={detailJob.job_id} />
                        )}
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{ marginRight: "20px" }}
                        >
                          Lưu lại
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ marginRight: "20px" }}
                        >
                          Chat với NTD
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          style={{ marginRight: "20px" }}
                        >
                          Chia sẻ
                        </button>
                      </div>
                    </>
                  ) : null}

                  <div className="row" style={{ fontSize: "14px" }}>
                    <div
                      className="col-sm-4 col-xs-6"
                      style={{ margin: "10px 0" }}
                    >
                      <p
                        className="h6 text-semibold"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Vị trí tuyển dụng
                      </p>
                      <div
                        className="content-detail"
                        title="Xem thêm các việc làm Full-time"
                      >
                        {detailJob.position_name}
                      </div>
                    </div>
                    <div
                      className="col-sm-4 col-xs-6"
                      style={{ margin: "10px 0" }}
                    >
                      <p
                        className="h6 text-semibold"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Ngày bắt đầu
                      </p>
                      <div
                        className="content-detail"
                        title="Xem thêm các việc làm Full-time"
                      >
                        {detailJob.job_start_date}
                      </div>
                    </div>
                    <div
                      className="col-sm-4 col-xs-6"
                      style={{ margin: "10px 0" }}
                    >
                      <p
                        className="h6 text-semibold"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Ngày kết thúc
                      </p>
                      <div
                        className="content-detail"
                        title="Xem thêm các việc làm Full-time"
                      >
                        {detailJob.job_end_date}
                      </div>
                    </div>
                    <div
                      className="col-sm-4 col-xs-6"
                      style={{ margin: "10px 0" }}
                    >
                      <p
                        className="h6 text-semibold"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Lương
                      </p>
                      <div
                        className="content-detail"
                        title="Xem thêm các việc làm Full-time"
                      >
                        {detailJob.salary}
                      </div>
                    </div>
                    <div
                      className="col-sm-4 col-xs-6"
                      style={{ margin: "10px 0" }}
                    >
                      <p
                        className="h6 text-semibold"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Ngôn ngữ
                      </p>
                      <div
                        className="content-detail"
                        title="Xem thêm các việc làm Full-time"
                      >
                        {detailJob.language}
                      </div>
                    </div>
                    <div
                      className="col-sm-4 col-xs-6"
                      style={{ margin: "10px 0" }}
                    >
                      <p
                        className="h6 text-semibold"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Kỹ năng
                      </p>
                      <div
                        className="content-detail"
                        title="Xem thêm các việc làm Full-time"
                      >
                        {detailJob.skills}
                        {/* {JSON.stringify(detailJob.skills)} */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="content-min"
                    style={{ margin: "15px 0", fontSize: "14px" }}
                  >
                    <p
                      className="h6 text-semibold"
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Địa điểm làm việc
                    </p>
                    <div className="content-detail">
                      <i class="fas fa-map-marker-alt mr-1"></i>
                      {detailJob.job_location}
                    </div>
                  </div>

                  <div
                    className="content-min"
                    style={{ margin: "15px 0", fontSize: "14px" }}
                  >
                    <p
                      className="h6 text-semibold"
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Yêu cầu công việc
                    </p>
                    <div className="content-detail">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: detailJob.job_requirement,
                        }}
                      ></div>
                      {/* {detailJob.job_requirement} */}
                    </div>
                  </div>

                  <div
                    className="content-min"
                    style={{ margin: "15px 0", fontSize: "14px" }}
                  >
                    <p
                      className="h6 text-semibold"
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Mô tả công việc
                    </p>
                    <div className="content-detail">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: detailJob.job_description,
                        }}
                      ></div>
                      {/* {detailJob.job_description} */}
                    </div>
                  </div>

                  <div
                    className="content-min"
                    style={{ margin: "15px 0", fontSize: "14px" }}
                  >
                    <p
                      className="h6 text-semibold"
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Lợi ích
                    </p>
                    <div className="content-detail">
                      <div
                        dangerouslySetInnerHTML={{ __html: detailJob.benefit }}
                      ></div>
                      {/* {detailJob.benefit} */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="related-job row"
                // style={{ border: "1px solid #000" }}
              >
                <h6
                  style={{
                    fontWeight: "bold",
                    margin: "0",
                    padding: "10px 15px",
                  }}
                >
                  VIỆC LÀM LIÊN QUAN
                </h6>
                <a
                  href="/"
                  style={{ textDecoration: "none" }}
                  className="col-lg-6"
                >
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "red",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  style={{ textDecoration: "none" }}
                  className="col-lg-6"
                >
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "red",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  style={{ textDecoration: "none" }}
                  className="col-lg-6"
                >
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "red",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  style={{ textDecoration: "none" }}
                  className="col-lg-6"
                >
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "red",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div
                    className="profile-company d-flex flex-column align-items-center"
                    style={{ margin: "0 auto" }}
                  >
                    <img
                      src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                      alt="Profile"
                      className="rounded-circle"
                      style={{ maxWidth: "120px" }}
                    />
                    <div className="introduce" style={{ margin: "10px 0" }}>
                      Mời bạn đến làm việc ở
                    </div>
                    <div
                      className="company_name"
                      style={{ fontWeight: "bold" }}
                    >
                      Tên công ty
                    </div>
                  </div>

                  <div
                    className="location"
                    style={{ float: "left", fontSize: "14px" }}
                  >
                    {/* <div className="h6 text-semibold">Địa chỉ công ty</div> */}
                    <p className="content-detail">
                      <i className="fas fa-map-marker-alt mr-1"></i> Đà Nẵng
                    </p>
                  </div>
                  <div className="social-links mt-2"></div>
                </div>
              </div>
              <div className="related-company row">
                <h6
                  style={{
                    fontWeight: "bold",
                    margin: "0",
                    padding: "10px 15px",
                  }}
                >
                  VIỆC LÀM KHÁC CÙNG CÔNG TY
                </h6>
                <a href="/" style={{ textDecoration: "none" }}>
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "black",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/" style={{ textDecoration: "none" }}>
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "black",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/" style={{ textDecoration: "none" }}>
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "black",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/" style={{ textDecoration: "none" }}>
                  <div className="card mb-0">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          style={{ padding: "8px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div
                          className="card_body"
                          style={{
                            display: "grid",
                            marginLeft: "-10px",
                            overflow: "hidden",
                            width: "100%",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h6
                            className="card_title"
                            style={{
                              paddingTop: "8px",
                              color: "black",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Card with an image onnnnnnnnnnnnnnnnnnn
                            ttttttttttttttttttttttttttttttttttttttttttttttttt
                          </h6>
                          <p className="card_text" style={{ fontSize: "12px" }}>
                            Tên công ty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Test;
