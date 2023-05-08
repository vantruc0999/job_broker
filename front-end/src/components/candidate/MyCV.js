import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Logo2 from "../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
function MyCV() {
  let navigate = useNavigate();
  const [cv, setCv] = useState("");
  const [selectedCV, setSelectedCV] = useState(null);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    console.log(user.token);
    axios
      .get(`http://127.0.0.1:8000/api/candidate/show-all`, config)
      .then((res) => {
        console.log(res.data.resume);
        setCv(res.data.resume);
      });
  }, []);
  console.log("allCV",cv);
  const renderResume = () => {
    if (Object.keys(cv).length > 0) {
      return cv.map((value, key) => {
        return (
          <>
            <div
              className="allcv col d-flex"
              style={{ padding: "0", height: "140px", width: "32%" }}
            >
              <div className="col-3">
                <Link to={"/allCV/fileCV/" + value.resume_id}>
                  <img
                    src={Logo2}
                    alt=""
                    style={{
                      width: "90px",
                      height: "90px",
                      margin: " 25px auto",
                    }}
                  />
                </Link>
              </div>

              <div className="col-9 cv">
                <h5 style={{ wordWrap: "break-word" }}>{value.resume_name}</h5>
                <p>Tên CV:</p>
                <p>Trạng thái: {value.public_status}</p>
                <ul class="p-0">
                  <li class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-location-dot"></i> Chỉnh sửa
                  </li>
                  <li class="list-group-item list-group-item-action">
                    <i class="fa-regular fa-clock"></i> Tải xuống
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
      });
    }
  };
  return (
    <>
      <div className="container">
        <div
          className="btn-group mb-20 btn-links"
          style={{ width: "100%", textAlign: "center" }}
        >
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-dashboard" /> Bảng tin
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-upload" /> Tải lên CV có sẵn
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-list-alt" /> Hoàn thiện CV
            <div
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                fontSize: 9,
                color: "white",
                borderRadius: 9,
                width: 16,
                height: 16,
                lineHeight: 16,
              }}
            >
              20
            </div>
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-exclamation-triangle" /> Sửa lỗi CV
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-primary"
          >
            <i className="fa fa-line-chart" /> CV của bạn
          </a>
          <a
            href=""
            target="_blank"
            className="border-primary text-uppercase text-bold btn  btn-default"
          >
            <i className="fa fa-user" /> Chọn Mẫu CV
          </a>
        </div>
        {/* cv */}
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f8f9fa", paddingBottom: "20px" }}
        >
          <div className="job_cv">
            <h3 style={{ paddingTop: 20 }}>CV của bạn</h3>
            <div
              className="row justify-content-between"
              style={{ margin: "20px auto" }}
            >
              {renderResume()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyCV;
