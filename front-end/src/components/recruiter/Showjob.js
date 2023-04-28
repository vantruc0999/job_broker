import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Showjob() {
  const [job, setJob] = useState("");
  useEffect(() => {
    axios.get();
  });
  return (
    <>
      <div>
        <div className="container" style={{ margin: "0 auto" }}>
          <div class="pagetitle">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="/">Library</a>
                </li>
                <li class="breadcrumb-item active">Default</li>
              </ol>
            </nav>
          </div>

          <section class="section">
            <div class="row">
              <div class="col-lg-8">
                <div class="card">
                  <div class="card-body">
                    <h3 class="job_name">Intern PHP1</h3>
                    <div className="button margin">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{ marginRight: "20px" }}
                      >
                        Ứng tuyển ngay
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        style={{ marginRight: "20px" }}
                      >
                        Lưu lại
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        style={{ marginRight: "20px" }}
                      >
                        Chat với NTD
                      </button>
                      <button
                        type="button"
                        class="btn btn-light"
                        style={{ marginRight: "20px" }}
                      >
                        Chia sẻ
                      </button>
                    </div>

                    <div className="row ">
                      <div class="col-sm-4 col-xs-6 margin">
                        <p class="h6 text-semibold">Vị trí tuyển dụng</p>
                        <div
                          className="content-detail"
                          title="Xem thêm các việc làm Full-time"
                        >
                          Intern
                        </div>
                      </div>
                      <div class="col-sm-4 col-xs-6 margin">
                        <p class="h6 text-semibold">Ngày bắt đầu</p>
                        <div
                          className="content-detail"
                          title="Xem thêm các việc làm Full-time"
                        >
                          00/00/0000
                        </div>
                      </div>
                      <div class="col-sm-4 col-xs-6 margin">
                        <p class="h6 text-semibold">Ngày kết thúc</p>
                        <div
                          className="content-detail"
                          title="Xem thêm các việc làm Full-time"
                        >
                          00/00/0000
                        </div>
                      </div>
                      <div class="col-sm-4 col-xs-6 margin">
                        <p class="h6 text-semibold">Lương</p>
                        <div
                          className="content-detail"
                          title="Xem thêm các việc làm Full-time"
                        >
                          10 triệu
                        </div>
                      </div>
                      <div class="col-sm-4 col-xs-6 margin">
                        <p class="h6 text-semibold">Ngôn ngữ</p>
                        <div
                          className="content-detail"
                          title="Xem thêm các việc làm Full-time"
                        >
                          JAVA
                        </div>
                      </div>
                      <div class="col-sm-4 col-xs-6 margin">
                        <p class="h6 text-semibold">Kỹ năng</p>
                        <div
                          className="content-detail"
                          title="Xem thêm các việc làm Full-time"
                        >
                          JAVA
                        </div>
                      </div>
                    </div>

                    <div className="content-min">
                      <p class="h6 text-semibold">Địa điểm làm việc</p>
                      <div className="content-detail">Đà Nẵng</div>
                    </div>

                    <div className="content-min">
                      <p class="h6 text-semibold">Yêu cầu công việc</p>
                      <div className="content-detail">
                        Teamwork, 4th student
                      </div>
                    </div>

                    <div className="content-min">
                      <p class="h6 text-semibold">Mô tả công việc</p>
                      <div className="content-detail">
                        Work with wordpress project,{" "}
                      </div>
                    </div>

                    <div className="content-min">
                      <p class="h6 text-semibold">Lợi ích</p>
                      <div className="content-detail">
                        allowance per month up to 1.000.000 VND
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div className="profile-company d-flex flex-column align-items-center">
                      <img
                        src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                        alt="Profile"
                        class="rounded-circle"
                      />
                      <div className="introduce">Mời bạn đến làm việc ở</div>
                      <div className="company_name">Tên công ty</div>
                    </div>

                    <div className="location">
                      <div class="h6 text-semibold">Địa chỉ công ty</div>
                      <span className="content-detail">Đà Nẵng</span>
                    </div>
                    <div class="social-links mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Showjob;
