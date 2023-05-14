import { Link } from "react-router-dom";
import "../../assets/css/homepage.css";
import Logo2 from "../../assets/images/logo.jpg";
function ChooseTemplate() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column">
            <div className="p-2">
              <p>
                BrokerJob Tổng hợp mẫu CV xin việc online chuẩn 2023 cho mọi
                ngành nghề
              </p>
            </div>
            <div className="p-2">
              <h5>Tạo CV xin việc Online chuẩn, đẹp miễn phí với BrokerJob</h5>
            </div>
            <div className="p-2">
              <p>
                Tổng hợp danh sách mẫu CV xin việc làm online đẹp ấn tượng giúp
                việc tạo CV xin việc Online của bạn trở nên đơn giản, nhanh
                chóng và dễ dàng với BrokerJob.
              </p>
            </div>
            <div className="d-flex justify-content-start">
              <div
                className="col-6 mr-2"
                style={{
                  border: "1px solid #ffffff",
                  borderRadius: 5,
                  margin: "0px 0px 10px",
                  padding: 4,
                  boxShadow: "#000000 0px 1px 2px 0px",
                }}
              >
                <Link to={"/chooseCV/createCV/" + 1}>
                  <div className="thumbnail">
                    <div className="pic_over">
                      <div className="thumb">
                        <picture>
                          <img
                            src={Logo2}
                            className="image"
                            width="100%"
                            alt="JobsGO CV"
                            style={{ display: "block" }}
                          />
                          <div className="middle">
                            <button
                              className="btn-primary"
                              style={{ padding: "5px 10px" }}
                            >
                              Sử dụng mẫu này
                            </button>
                          </div>
                        </picture>
                      </div>
                    </div>
                    <div
                      className="caption"
                      style={{ textAlign: "center", marginTop: 20 }}
                    >
                      <h6 className="text-bold">
                        <a className="text-default">Mẫu CV Tiêu Chuẩn 1</a>
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="col-6 mr-2"
                style={{
                  border: "1px solid #ffffff",
                  borderRadius: 5,
                  margin: "0px 0px 10px",
                  padding: 4,
                  boxShadow: "#000000 0px 1px 2px 0px",
                }}
              >
                <Link to={"/chooseCV/createCV/" + 2}>
                  <div className="thumbnail">
                    <div className="pic_over">
                      <div className="thumb">
                        <picture>
                          <img
                            src={Logo2}
                            className="image"
                            width="100%"
                            alt="JobsGO CV"
                            style={{ display: "block" }}
                          />
                          <div className="middle">
                            <button
                              className="btn-primary"
                              style={{ padding: "5px 10px" }}
                            >
                              Sử dụng mẫu này
                            </button>
                          </div>
                        </picture>
                      </div>
                    </div>
                    <div
                      className="caption"
                      style={{ textAlign: "center", marginTop: 20 }}
                    >
                      <h6 className="text-bold">
                        <a className="text-default">Mẫu CV Tiêu Chuẩn 1</a>
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChooseTemplate;
