import React from "react";
// import "./addJob.css";
import Sidebar from "../common/Sidebar";
import HeaderRe from "../common/HeaderRe";

const AddJob = () => {
  return (
    <div>
      <HeaderRe></HeaderRe>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section className="section">
          <div className="row">
            <div className="col-lg-12"></div>
            <div className="card addjob">
              <div className="card-body">
                <h5 className="card-title">Thêm tin tuyển dụng</h5>

                <form className="row g-12" style={{ fontWeight: "bold" }}>
                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Tên công việc</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Vị trí tuyển dụng</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Ngày bắt đầu</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Ngày kết thúc</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Lương</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" />
                      <span className="input-group-text">triệu</span>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Nơi làm việc</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Ngôn ngữ</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Yêu cầu công việc</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-12" style={{ margin: "10px 0" }}>
                    <label className="form-label">Mô tả công việc</label>
                    <textarea type="text" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Lợi ích</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Kỹ năng</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      {/* <option selected="">Open this select menu</option> */}
                      <option value="1">JAVA</option>
                      <option value="2">PHP</option>
                      <option value="3">C#</option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ float: "right", margin: "20px" }}
                    >
                      Đăng
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary"
                      style={{ float: "right", margin: "20px" }}
                    >
                      Quay lại
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddJob;
