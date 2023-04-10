import { useState } from "react";
import Logo from "../../assets/images/logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
function Homepage() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      {/* SEO */}
      <div className="container">
        <div className="search-job">
          <h2 style={{ marginTop: 20, marginBottom: 20 }}>
            BrokerJob - Tìm việc làm
          </h2>
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="input-group-text" id="">
                Tìm kiếm
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Việc làm, công ty, nghề nghiệp..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="Tỉnh thành, quận..."
            />
          </div>
        </div>
        <ul
          className="col-11 list-group list-group-horizontal d-flex justify-content-center"
          style={{ margin: "40px auto", textAlign: "center" }}
        >
          <button
            type="button"
            className="list-group-item list-group-item-action align-items-center"
          >
            Việc tại Đà Nẵng
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action align-items-center"
          >
            Công nghệ thông tin
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action align-items-center"
          >
            Kỹ thuật
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action align-items-center"
          >
            Kỹ thuật mạng
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action align-items-center"
          >
            Lập Trình
          </button>
        </ul>
        <div
          className="row d-flex justify-content"
          style={{ margin: "50px auto", width: "80%" }}
        >
          <div
            className="card-border col-5 d-flex"
            style={{ padding: "10px 0" }}
          >
            <div className="col-8">
              <h6>Phân tích CV - BrokerAI</h6>
              <p>Bạn đã có sẵn CV? Tải lên để nhận phân tích CV.</p>
              <button className="btn btn-primary" type="button">
                <i className="fa-solid fa-file-arrow-up" />
                Tải lên CV
              </button>
            </div>
            <div className="col-4">
              <img
                src="./assets/image/robot-computer.webp"
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
              <h6>Tạo CV ấn tượng</h6>
              <p>Tạo CV online xin việc chuẩn, đẹp miễn phí.</p>
              <button className="btn btn-primary" type="button">
                <i className="fa-sharp fa-regular fa-plus" />
                Tạo CV ngay!
              </button>
            </div>
            <div className="col-4">
              <img
                src="./assets/image/CV.png"
                alt=""
                style={{ height: "70%", width: "100%", marginTop: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* SEO */}
      {/* Urgent Hiring */}
      <div className="container-fluid" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h3 style={{ paddingTop: 20 }}>Việc tuyển gấp</h3>
          <div className="row justify-content-between">
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
            <div className="urgentHiring col d-flex" style={{ padding: 0 }}>
              <div className="col-3">
                <img
                  src="./assets/image/logo.jpg"
                  alt=""
                  style={{
                    width: "120%",
                    height: "80%",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div className="col-9" style={{ margin: "8px auto" }}>
                <h6>Account Manage</h6>
                <p style={{ fontSize: 14 }}>Công ty TNHH Kim Thắng</p>
                <ul className="d-flex justify-content-between">
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    Hà Nội
                  </li>
                  <li>
                    <i className="fa-regular fa-clock" />
                    26/12/1111
                  </li>
                  <li>
                    <i className="fa-solid fa-sack-dollar" />
                    salary
                  </li>
                </ul>
              </div>
            </div>
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
                <img className="card-img-top img-thumbnail" src={Logo} alt="" />
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
