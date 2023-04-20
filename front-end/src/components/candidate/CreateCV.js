import Logo from "../../assets/images/logo.jpg";

function CreateCV() {
  const tx = document.querySelector("textarea");
  tx.addEventListener("keyup", e=>{
    tx.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    tx.style.height = `${scHeight}`;
  })
  return (
    <>
      <div className="container-fluid d-flex" style={{ padding: 0 }}>
        {/* <div class="col-2">
    <div>
      <h5><i class="fa-solid fa-circle-exclamation"></i>Hướng dẫn</h5>
      <p>Điền đầy đủ các thông tin hiển thị trong CV</p>
    </div>
  </div> */}
        <div className="col-10" style={{ margin: "0 auto" }}>
          <div className="row">
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
                <div
                  className="col-8 d-flex flex-column"
                  style={{ padding: 0 }}
                >
                  <div
                    style={{ fontSize: 12, color: "#fff", paddingTop: "10px" }}
                  >
                    <h3>THANG NGUYEN</h3>
                    <div style={{ width: "30%" }}>
                      <div className="mt-3">
                        <input
                          style={{ width: "100%", height: 30, padding: 5 }}
                          type="text"
                          placeholder="Vị trí mong muốn"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-regular fa-envelope"> </i>
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="email@gmail.com"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-solid fa-phone" />
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="Số điện thoại"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-solid fa-cake-candles" />
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="Ngày sinh"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-solid fa-location-dot" />
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="Địa chỉ"
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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ padding: "50px 0" }}>
            <div className="col-8">
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-briefcase" /> Kinh nghiệm làm việc
                </h3>
                <div className="content_form">
                  <div className="experienceForm">
                    <div>
                      <h5>Nhiệm vụ:</h5>
                      <textarea placeholder="alo" defaultValue={""} />
                    </div>
                    <div>
                      <h5>Thành tích:</h5>
                      <textarea
                        id="experienceInput"
                        name="experienceInput"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  {/* <div>
                    <i className="fa-solid fa-plus" />
                  </div> */}
                </div>
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-graduation-cap" /> Học vấn
                </h3>
                <div className="content_form">
                  <div>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-graduation-cap" /> Hoạt động
                </h3>
                <div className="content_form">
                  <div>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-medal" /> Giải thưởng
                </h3>
                <div className="content_form">
                  <div>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </section>
            </div>
            <div className="col-3">
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-laptop-code" /> Kĩ năng
                </h3>
                <div className="content_form">
                  <div>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-feather" /> Kĩ năng mềm
                </h3>
                <div className="content_form">
                  <div>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-certificate" /> Chứng chỉ
                </h3>
                <div className="content_form">
                  <div>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-language" /> Ngoại ngữ
                </h3>
                <div className="content_form">
                  <div>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        style={{
          display: "flex",
          margin: "0 auto",
          width: "20%",
          padding: "5px 15px",
          justifyContent: "center",
        }}
        type="submit"
      >
        Lưu CV
      </button>
    </>
  );
}
export default CreateCV;
