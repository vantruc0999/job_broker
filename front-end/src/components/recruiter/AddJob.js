import React from "react";
import "./addJob.css";
import Sidebar from "../common/Sidebar";
import HeaderRe from "../common/HeaderRe";

const AddJob = () => {
  return (
    <div>
      <HeaderRe></HeaderRe>
      <Sidebar></Sidebar>
      <main id="main" class="main">
        <section class="section">
          <div class="row">
            <div class="col-lg-12"></div>
            <div class="card addjob">
              <div class="card-body">
                <h5 class="card-title">Thêm tin tuyển dụng</h5>

                <form class="row g-12">
                  <div class="col-md-6 margin">
                    <label class="form-label">Tên công việc</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Vị trí tuyển dụng</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Ngày bắt đầu</label>
                    <input type="date" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Ngày kết thúc</label>
                    <input type="date" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Lương</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" />
                      <span class="input-group-text">triệu</span>
                    </div>
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Nơi làm việc</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Ngôn ngữ</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Yêu cầu công việc</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-12 margin">
                    <label class="form-label">Mô tả công việc</label>
                    <textarea type="text" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Lợi ích</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Kỹ năng</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      {/* <option selected="">Open this select menu</option> */}
                      <option value="1">JAVA</option>
                      <option value="2">PHP</option>
                      <option value="3">C#</option>
                    </select>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" class="btn btn-secondary">
                      Reset
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
