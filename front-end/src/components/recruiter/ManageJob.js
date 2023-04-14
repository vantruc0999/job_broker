import React from "react";

const ManageJob = () => {
  return (
    <div>
      <main id="main" class="main">
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Danh sách tin tuyển dụng</h5>
                  <a href="/" class="btn btn-primary">
                    Thêm Tin
                  </a>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Ngày bắt đầu</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th></th>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <a href="/" class="btn btn-primary">
                            Chỉnh Sửa
                          </a>

                          <a href="/" class="btn btn-danger">
                            Xóa
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageJob;
