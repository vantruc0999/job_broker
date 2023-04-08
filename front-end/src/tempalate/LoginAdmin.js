import React from "react";

const LoginAdmin = () => {
  return (
    <div>
      <div class="wrapper">
        <form class="form-signin">
          <h2>ADMIN</h2>
          <h3 class="form-signin-heading">Đăng nhập</h3>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email"
            required=""
            autofocus=""
          />
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Mật khẩu"
            required=""
          />

          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
