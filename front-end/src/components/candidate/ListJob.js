import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap_min.css";

const ListJob = () => {
  const [suitable, setSuitable] = useState([]);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>.", suitable);
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
      .post(`http://127.0.0.1:8000/api/candidate/recommend-job`, null, config)
      .then((res) => {
        setSuitable(res.data);
      });
  }, []);
  console.log(suitable);

  const renderSuitable = () => {
    var suitableArr = [];
    if (Object.keys(suitable).length > 0) {
      if (suitable?.jobs) {
        suitableArr = suitable.jobs;
      } else {
        suitableArr = Array.from(Object.values(suitable));
      }
      // suitable && suitable.jobs &&
      console.log("aaaaaaaaaaaaaaaaaa", suitableArr);
      return suitableArr?.map((value, key) => {
        return (
          <>
            <Link
              to={"/listJob/job/" + value.job_id}
              style={{ textDecoration: "none", margin: "5px 0" }}
              className="col-lg-6"
            >
              <div className="card mb-0">
                <div className="row g-0">
                  <div className="col-3">
                    <img
                      src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ padding: "8px" }}
                    />
                  </div>
                  <div className="col-9 urgent">
                    <div
                      className="card_body "
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
                        {value.job_name}
                      </h6>
                      <p className="card_text" style={{ fontSize: "12px" }}>
                        {value.company_name}
                      </p>
                      <ul
                        class="p-0"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          overflow: "hidden",
                          width: "100%",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <li
                          class="list-group-item list-group-item-action"
                          style={{
                            width: "100px",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p style={{ fontSize: "10px" }}>
                            <i class="fas fa-map-marker-alt mr-1"></i>
                            {value.job_location}
                          </p>
                        </li>
                        {/* <li class="list-group-item list-group-item-action">
                                <i class="fas fa-clock"></i> 21/05/2023
                              </li> */}
                        <li
                          class="list-group-item list-group-item-action"
                          style={{
                            width: "100px",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p style={{ fontSize: "10px" }}>
                            <i class="fas fa-dollar-sign"></i>
                            {value.salary}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );
      });
    }
  };
  return (
    <div>
      <div className="container" style={{ margin: "0 auto", width: "1250px" }}>
        <section className="section">
          <div className="row">
            <div className="col-lg-9">
              <div className="search-job" style={{ padding: "0px" }}>
                <div className="searcDetail" style={{ width: "100%" }}>
                  <div className="input-group">
                    <input
                      type="text"
                      style={{
                        border: "none",
                        borderRight: "1px solid #333",
                        marginRight: "2px",
                      }}
                      className="form-control"
                      placeholder="Việc làm, công ty, nghề nghiệp..."
                    />
                    <input
                      type="text"
                      style={{ border: "none" }}
                      className="form-control"
                      placeholder="Tỉnh thành, quận..."
                    />
                  </div>
                  <div className="input-group-prepend">
                    <button
                      className="input-group-text"
                      id=""
                      style={{ borderRadius: "50px 50px 50px 50px" }}
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
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
                    VIỆC LÀM CÔNG NGHỆ THÔNG TIN TẠI ĐÀ NẴNG
                  </h6>
                  {renderSuitable()}
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class="blog-sidebar">
                <div
                  class="sidebar-widget padd-top-0 padd-bot-0 mrg-top-20"
                  style={{ color: "#333", marginTop: "20px" }}
                >
                  <h6
                    class="mrg-bot-5"
                    style={{
                      background: "#f1f6fb",
                      padding: "9px 15px",
                      color: "#1772bd",
                    }}
                  >
                    Ngành nghề liên quan
                  </h6>
                  <ul
                    class="sidebar-list expandible-bk"
                    style={{
                      fontSize: "13px",
                      padding: "5px 5px",
                      color: "#333",
                    }}
                  >
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Thực Tập Sinh Công Nghệ Thông Tin
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Chuyên Viên Công Nghệ Thông Tin
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Trưởng Phòng Công Nghệ Thông Tin
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Kỹ Sư Công Nghệ Thông Tin
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Giám Đốc Công Nghệ
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="sidebar-widget padd-top-0 padd-bot-0 mrg-top-20">
                  <h6
                    class="mrg-bot-5"
                    style={{
                      background: "#f1f6fb",
                      padding: "9px 15px",
                      color: "#1772bd",
                    }}
                  >
                    Tìm theo địa điểm
                  </h6>
                  <ul
                    class="sidebar-list expandible-bk"
                    style={{
                      fontSize: "13px",
                      padding: "5px 5px",
                      color: "#333",
                    }}
                  >
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">Quận Thanh Khê</div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">Quận Sơn Trà</div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">Quận Ngũ Hành Sơn</div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">Quận Liên Chiểu</div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">Quận Cẩm Lệ</div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="sidebar-widget padd-top-0 padd-bot-0 mrg-top-20">
                  <h6
                    class="mrg-bot-5"
                    style={{
                      background: "#f1f6fb",
                      padding: "9px 15px",
                      color: "#1772bd",
                    }}
                  >
                    TÌM THEO LOẠI HÌNH
                  </h6>
                  <ul
                    class="sidebar-list expandible-bk"
                    style={{
                      fontSize: "13px",
                      padding: "5px 5px",
                      color: "#333",
                    }}
                  >
                    <li>
                      <a
                        title="Thực Tập Sinh Công Nghệ Thông Tin"
                        href="/viec-lam-thuc-tap-sinh-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Công Nghệ Thông Tin Full-Time
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Chuyên Viên Công Nghệ Thông Tin"
                        href="/viec-lam-chuyen-vien-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Công Nghệ Thông Tin Part-Time
                        </div>{" "}
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Trưởng Phòng Công Nghệ Thông Tin"
                        href="/viec-lam-truong-phong-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Công Nghệ Thông Tin Thời Vụ
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        title="Kỹ Sư Công Nghệ Thông Tin"
                        href="/viec-lam-ky-su-cong-nghe-thong-tin.html"
                      >
                        <div class="txt text-capitalize">
                          Công Nghệ Thông Tin Remote
                        </div>
                        <span class="small text-muted padd-top-5"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListJob;
