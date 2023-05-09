import Logo2 from "../../assets/images/logo.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Example(props) {
  console.log(props.jobId);
  const [show, setShow] = useState(false);
  const [cv, setCv] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      let config = {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      axios
        .get(`http://127.0.0.1:8000/api/candidate/show-all`, config)
        .then((res) => {
          console.log(res.data.resume);
          setCv(res.data.resume);
        });
    } 
  }, []);
  const handleClick = (e) => {
    let jobId = props.jobId;
    let job_id = jobId.toString();
    let id = {
      resume_id: e.currentTarget.id,
      job_id: job_id,
    };
    console.log(user);
    if (user) {
      let config = {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      axios
        .post("http://127.0.0.1:8000/api/candidate/apply-cv", id, config)
        .then((res) => {
          console.log(res.data);
        });
    }
  };
  const renderResume = () => {
    if (Object.keys(cv).length > 0) {
      return cv.map((value, key) => {
        console.log(value);
        return (
          <>
            {/* <div
              id={value.resume_id}
              className="allcv col d-flex"
              style={{
                padding: "0",
                // height: "140px",
                width: "32%",
                border: "2px solid #e7e9eb",
              }}
              onClick={(e) => handleClick(e)}
            >
              <div className="col-3">
                <img
                  src={Logo2}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: " 25px auto",
                  }}
                />
              </div>

              <div
                className="col-9 cv"
                style={{ lineHeight: " 0.5", marginTop: "20px" }}
              >
                <h5 style={{ wordWrap: "break-word" }}>{value.resume_name}</h5>
                <p>Tên CV:</p>
                <p>Trạng thái: {value.public_status}</p>
                <ul class="p-0 d-flex">
                  <li
                    class="list-group-item list-group-item-action mr-2"
                    style={{
                      width: "initial",
                      fontSize: "9.5px",
                      padding: "2px 4px",
                      float: "left",
                      border: "1px solid #ddd !important",
                      margin: "3px 3px 3px 0",
                      borderRadius: "5px !important",
                    }}
                  >
                    <i class="fa-solid fa-location-dot"></i> Chỉnh sửa
                  </li>
                  <li
                    class="list-group-item list-group-item-action"
                    style={{
                      width: "initial",
                      fontSize: "9.5px",
                      padding: "2px 4px",
                      float: "left",
                      border: "1px solid #ddd !important",
                      margin: "3px 3px 3px 0",
                      borderRadius: "5px !important",
                      borderTop: "1px solid #e7e9eb ",
                    }}
                  >
                    <i
                      class="fa-regular fa-clock"
                      style={{ position: "relative", top: "1px" }}
                    ></i>{" "}
                    Tải xuống
                  </li>
                  <a
                    href="/"
                    class="btn btn-sm btn-success"
                    style={{ float: "right" }}
                  >
                    Apply
                  </a>
                </ul>
              </div>
            </div> */}

            <div className="col-md-3">
              <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                  <div class="text-center">
                    <img
                      class=""
                      src={Logo2}
                      alt=""
                      style={{ maxWidth: "80px", borderRadius: "50%" }}
                    />
                  </div>
                  <h3 class="profile-username text-center">
                    {value.resume_name}
                  </h3>
                  <p class=" text-center">Tên CV</p>
                  <div
                    class="list-group-item"
                    style={{ fontSize: "14px", marginBottom: "10px" }}
                  >
                    <b>Trạng thái</b>{" "}
                    <p class="float-right">{value.public_status}</p>
                  </div>
                  <a href="/" class="btn btn-primary btn-block">
                    <b>Ứng tuyển</b>
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };
  return (
    <>
      <Button variant="primary mr-4" onClick={() => setShow(true)}>
        Ứng tuyển ngay
      </Button>

      <Modal
        size={"xl"}
        fullscreen={"xl"}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ margin: "150px auto" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Đăng ký việc làm
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="job_cv">
            <h3>CV của bạn</h3>
            <div className="row" style={{ margin: "20px auto" }}>
              {renderResume()}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
