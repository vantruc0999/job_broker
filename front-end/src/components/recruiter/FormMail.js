import React from "react";
import Sidebar from "./Sidebar";

const FormMail = () => {
  return (
    <div>
      <Sidebar />
      <main id="main" className="main" style={{ minHeight: "665px" }}>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div class="card card-success">
                <div class="card-header">
                  <h3 class="card-title" style={{ fontSize: "20px" }}>
                    Thông báo
                  </h3>
                </div>
                <form class="form-horizontal">
                  <div class="card-body">
                    <div class="form-group">
                      <label>Tiêu đề thông báo</label>
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Nhập ..."
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label>Nội dung</label>
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Nhập ..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button type="submit" class="btn btn-success float-right">
                      Gửi
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

export default FormMail;
