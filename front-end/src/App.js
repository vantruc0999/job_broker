import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function App(props) {
  let param1 = useLocation();
  return (
    <>
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter") ? null : (
        <Header />
      )}
      {props.children}
      {param1["pathname"].includes("login") ||
      param1["pathname"].includes("register") ||
      param1["pathname"].includes("registerCruiter") ? null : (
        <Footer />
      )}

      {/* test */}
      {/* <div className="row">
        <div
          className="col-3"
          style={{ backgroundColor: "#434e5e", padding: 0 }}
        >
          <img src={Logo} alt="" style={{ width: 250, height: 250 }} />
        </div>
        <div
          className="col-9"
          style={{
            padding: 0,
            backgroundColor: "#434e5e",
            marginLeft: "-4%",
            color: "#fff",
          }}
        >
          <div className="d-flex inputcv">
            <div className="col-8 d-flex flex-column" style={{ padding: 0 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "#fff",
                  paddingTop: "10px",
                }}
              >
                <h3>THANG NGUYEN</h3>
                <div style={{ width: "30%" }}>
                  <div className="mt-3">
                    <input
                      style={{ width: "100%", height: 30, padding: 5 }}
                      type="text"
                      placeholder="Vị trí mong muốn"
                      name="position"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-3">
                    <i className="fa-regular fa-envelope"> </i>
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      name="email"
                      placeholder="email@gmail.com"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-3">
                    <i className="fa-solid fa-phone" />
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-3">
                    <i className="fa-solid fa-cake-candles" />
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      placeholder="Ngày sinh"
                      name="birthday"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-3">
                    <i className="fa-solid fa-location-dot" />
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      placeholder="Địa chỉ"
                      name="address"
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 d-flex flex-column">
              <div className="pt-4">
                <i
                  style={{ fontSize: 22, marginRight: 5 }}
                  className="fa-brands fa-linkedin"
                />
                <input
                  style={{ width: "90%" }}
                  type="text"
                  placeholder="linkedin.com/..."
                  name="linked"
                  onChange={handleInput}
                />
              </div>
              <div className="pt-4">
                <i
                  style={{ fontSize: 22, marginRight: 4 }}
                  className="fa-brands fa-facebook"
                />
                <input
                  style={{ width: "90%" }}
                  type="text"
                  placeholder="linkedin.com/..."
                  name="faceboook"
                  onChange={handleInput}
                />
              </div>
              <div className="pt-4">
                <i
                  style={{ fontSize: 22, marginRight: 5 }}
                  className="fa-brands fa-skype"
                />
                <input
                  style={{ width: "90%" }}
                  type="text"
                  placeholder="linkedin.com/..."
                  name="skyline"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
