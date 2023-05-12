import React from "react";

const ApplyJob = () => {
  return (
    <div>
      <div
        className="container"
        style={{ margin: "0 auto", width: "1250px", height: "655px" }}
      >
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card_body" style={{ padding: "10px" }}>
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
                      Danh sách việc làm đã ứng tuyển
                    </h6>
                    <div
                      href="/"
                      style={{ textDecoration: "none" }}
                      className="col-lg-12"
                    >
                      <div className="card">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{
                                padding: "25px",
                              }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div
                              className="card_body"
                              style={{
                                display: "grid",
                                marginLeft: "-10px",
                                overflow: "hidden",
                                width: "100%",
                                whiteSpace: "nowrap",
                                paddingTop: "15px",
                              }}
                            >
                              <h6
                                className="card_title"
                                style={{
                                  paddingTop: "8px",
                                  color: "#1E88E5",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                Card with an image onnnnnnnnnnnnnnnnnnn
                                ttttttttttttttttttttttttttttttttttttttttttttttttt
                              </h6>
                              <ul
                                class="p-0"
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  overflow: "hidden",
                                  width: "100%",
                                  whiteSpace: "nowrap",
                                  color: "#333",
                                  margin: "0",
                                }}
                              >
                                <li
                                  class="listnew"
                                  style={{
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  <p style={{ fontSize: "13px" }}>
                                    <i class="fas fa-map-marker-alt mr-1"></i>
                                    Đà Nẵng
                                  </p>
                                </li>
                                <li
                                  class="listnew"
                                  style={{
                                    width: "100px",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  <p
                                    style={{
                                      fontSize: "13px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    <i class="fas fa-dollar-sign mr-1"></i>
                                    Thỏa thuận
                                  </p>
                                </li>
                              </ul>
                              <p
                                className="decription"
                                style={{
                                  fontSize: "13px",
                                  color: "#333",
                                  wordWrap: "break-word",
                                }}
                              >
                                Trở thành 1 trong 20 Chuyên Viên Quản Lý khách
                                hàng cấp cao của kênh De La Sól tại Hà Nội Tại
                                sao không? DE LA SÓL by Sun Life Việt Nam dự án
                                fullime mang tính cách mạng của thị trường tài
                                chính. * TƯ VẤN TÀI CHÍNH Cung cấp và hỗ trợ các
                                giải pháp tài chính chuyên nghiệp cho khách hàng
                                Tìm kiếm, mở rộng và xây dựng nguồn khách hàng
                                tiềm năng * DỊCH VỤ KHÁCH HÀNG Hỗ trợ khách hàng
                                làm dịc...
                              </p>
                            </div>
                          </div>
                          <div
                            className="col-md-2"
                            style={{
                              display: "grid",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <p
                              className="btn btn-primary"
                              style={{ fontSize: "10px", cursor: "none" }}
                            >
                              MỚI ỨNG TUYỂN
                            </p>
                            <button
                              className="btn btn-danger"
                              style={{ fontSize: "12px", marginTop: "-100px" }}
                            >
                              <i className="fas fa-trash"></i> HỦY BỎ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApplyJob;
