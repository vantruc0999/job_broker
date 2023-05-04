import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Logo2 from "../../assets/images/logo.jpg";
import { useEffect, useState} from "react";
import axios from "axios";
function Example() {
  const [show, setShow] = useState(false);
  const [cv, setCv] = useState("");
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    console.log("1", config);
    axios
      .get(`http://127.0.0.1:8000/api/candidate/show-all`, config)
      .then((res) => {
        console.log(res.data.resume);
        setCv(res.data.resume);
      });
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
                  <img
                    src={Logo2}
                    alt=""
                    style={{
                      width: "90px",
                      height: "90px",
                      margin: " 25px auto",
                    }}
                  />
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
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="job_cv">
            <h3 style={{ paddingTop: 20 }}>CV của bạn</h3>
            <div
              className="row justify-content-between"
              style={{ margin: "20px auto" }}
            >
              {renderResume()}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Example