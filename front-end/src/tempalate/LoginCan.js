import React from "react";

const LoginCan = () => {
  return (
    <div>
      <div class="container-fluid form-container">
        <div class="container login-container">
          <div class="row">
            <div class="col-md-7 content-part">
              <h4 class="logo">Tìm kiếm việc làm</h4>

              <img src="https://static.ybox.vn/2016/06/24/19.jpg" alt="" />

              <h2>Tìm kiếm việc làm IT ở Đà Nẵng</h2>
              <p>
                Trang website này giúp bạn có thể tìm kiếm việc làm IT nhanh
                chóng ở thành phố Đà Nẵng
              </p>
            </div>
            <div class="col-md-5 form-part">
              <div class="row">
                <div class="col-lg-10 col-md-11 login formcol mx-auto">
                  <h3>Đăng nhập dành cho Ứng viên</h3>

                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Enter Email Address"
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Mật khẩu</label>
                  </div>

                  <div class="form-floating">
                    <button class="btn btn-primary">Đăng nhập</button>
                  </div>
                  <p class="signinlink">
                    Bạn chưa có tài khoản? <a href="index.html">Đăng ký</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCan;
