import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/robot-computer.webp";
import Logo2 from "../../assets/images/logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/homepage.css";

import { Pagination, Navigation } from "swiper";
import axios from "axios";
function Homepage() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/jobs").then((res) => {
      console.log(res.data);
      setJobs(res.data.jobs);
    });
  }, []);

  return (
    <>
      {/* SEO */}
      <div className="container-fliud">
        <div className="search-job">
          <h1 style={{ marginBottom: 40, fontWeight: 600 }}>
            BrokerJob - Tìm việc làm
          </h1>
          <div className="searcDetail">
            <div className="input-group">
              <input
                type="text"
                style={{
                  border: "none",
                  borderRight: "1px solid#333",
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
        <div className="menu-job">
          <ul
            className="col-11 list-group list-group-horizontal d-flex justify-content-center"
            style={{ margin: "30px auto", textAlign: "center" }}
          >
            <li>
              <button
                style={{ padding: 8 }}
                type="button"
                className="list-group-item list-group-item-action align-items-center"
              >
                <i class="fa-solid fa-location-dot mr-2"></i>
                Việc tại Đà Nẵng
              </button>
            </li>
            <li>
              <button
                style={{ padding: 8 }}
                type="button"
                className="list-group-item list-group-item-action align-items-center"
              >
                <i class="fa-solid fa-microchip mr-2"></i>
                Công nghệ thông tin
              </button>
            </li>
            <li>
              <button
                style={{ padding: 8 }}
                type="button"
                className="list-group-item list-group-item-action align-items-center"
              >
                <i class="fa-solid fa-diamond mr-2"></i>
                Kỹ thuật
              </button>
            </li>
            <li>
              <button
                style={{ padding: 8 }}
                type="button"
                className="list-group-item list-group-item-action align-items-center"
              >
                <i class="fa-solid fa-sitemap mr-2"></i>
                Kỹ thuật mạng
              </button>
            </li>
            <li>
              <button
                style={{ padding: 8 }}
                type="button"
                className="list-group-item list-group-item-action align-items-center"
              >
                <i class="fa-solid fa-memory mr-2"></i>
                Lập Trình
              </button>
            </li>
          </ul>
        </div>

        <div
          className="row d-flex justify-content-around"
          style={{ margin: "50px auto", width: "60%" }}
        >
          <div
            className="card-border col-5 d-flex"
            style={{ padding: "10px 0" }}
          >
            <div className="col-8">
              <h6 style={{ fontWeight: 500, fontSize: 18 }}>
                Phân tích CV - BrokerAI
              </h6>
              <p>Bạn đã có sẵn CV? Tải lên để nhận phân tích CV.</p>
              <button className="btn btn-primary" type="button">
                <i className="fa-solid fa-file-arrow-up mr-3" />
                Tải lên CV
              </button>
            </div>
            <div className="col-4">
              <img
                src={Logo}
                alt=""
                style={{ height: "70%", width: "100%", marginTop: 20 }}
              />
            </div>
          </div>
          <div
            className="card-border col-5 d-flex"
            style={{ padding: "10px 0" }}
          >
            <div className="col-8">
              <h6 style={{ fontWeight: 500, fontSize: 18 }}>Tạo CV ấn tượng</h6>
              <p>Tạo CV online xin việc chuẩn, đẹp miễn phí.</p>
              <Link to="/createCV">
                <button className="btn btn-primary" type="button">
                  <i className="fa-sharp fa-regular fa-plus mr-3" />
                  Tạo CV ngay!
                </button>
              </Link>
            </div>
            <div className="col-4">
              <img
                src={Logo}
                alt=""
                style={{ height: "70%", width: "100%", marginTop: 20 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      {/* Urgent Hiring */}
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f8f9fa",
          paddingLeft: "124.5px",
          paddingBottom: 20,
        }}
      >
        <div className="job_urgent">
          <h3 style={{ paddingTop: 20, marginLeft: 33 }}>Việc tuyển gấp</h3>
          <div className="row d-flex " style={{ margin: "0 auto" }}>
            {/* List Job */}
            {jobs.length > 0 &&
              jobs.map((job) => {
                console.log(job);
                return (
                  <div
                    className="urgentHiring mr-3"
                    style={{ padding: "0", width: 400 }}
                  >
                    <Link
                      to={"/job/" + job.job_id}
                      style={{ display: "flex", textDecoration: "none" }}
                    >
                      <div className="col-3">
                        <img
                          src={Logo}
                          alt=""
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: " 25px auto",
                          }}
                        />
                      </div>
                      <div className="col-9 urgent">
                        <h5 style={{ wordWrap: "break-word" }}>
                          {job.job_name}
                        </h5>
                        <p>{job.company_name}</p>
                        <ul class="p-0">
                          <li class="list-group-item list-group-item-action">
                            <i class="fas fa-map-marker-alt mr-1"></i> Hà Nội...
                          </li>
                          <li class="list-group-item list-group-item-action">
                            <i class="fa-regular fa-clock"></i> 21/05/2023
                          </li>
                          <li class="list-group-item list-group-item-action">
                            <i class="fa-solid fa-sack-dollar"></i> 9 - 11 triệu
                            VNĐ
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* Typical Employers */}
      {/* infinite loop */}
      <div className="container">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={6}
          centeredSlides={false}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col" style={{ padding: "0 10px" }}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top img-thumbnail"
                  src={Logo2}
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h6 className="card-title">
                    Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam
                  </h6>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* infinite loop */}
    </>
  );
}
export default Homepage;
