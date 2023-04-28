import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginRecruiter = () => {
  const [inputs, setInputs] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    const re =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var regexPass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:\\|;\"',<.>/?]).{8,}$/;

    let flag = true;
    if (!re.test(inputs.email)) {
      flag = false;
      errorSubmit.email = "Invalid email format";
    }
    if (inputs.email === undefined) {
      flag = false;
      errorSubmit.email = "Please enter your email";
    }
    if (inputs.email === "") {
      flag = false;
      errorSubmit.email = "Please enter your email";
    }

    if (!regexPass.test(inputs.password)) {
      flag = false;
      errorSubmit.password = "Invalid password format";
    }
    if (inputs.password === undefined) {
      flag = false;
      errorSubmit.password = "Please enter your password";
    }
    if (inputs.password === "") {
      flag = false;
      errorSubmit.password = "Please enter your password";
    }

    if (!flag) {
      setErrors(errorSubmit);
      console.log(errorSubmit);
    } else {
      setErrors({});
      const data = {
        email: inputs.email,
        password: inputs.password,
      };
      let url = "http://127.0.0.1:8000/api/recruiter/login";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            setErrors(res.data.errors);
            alert(res.data.message);
          } else {
            setInputs({
              email: "",
              password: "",
            });
            localStorage.setItem("user", JSON.stringify(res.data));
            alert(res.data.message);
            if (res.data.role === "recruiter") {
              navigate("/homeRecruiter");
            }
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
      setErrors({});
    }
  };

  return (
    <div class="container">
      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="pt-4 pb-2">
                    <h5
                      class="card-title text-center pb-3"
                      style={{ fontSize: "30px" }}
                    >
                      Đăng nhập tài khoản
                    </h5>
                    <p class="text-center small">
                      Hãy nhập tài khoản &amp; mật khẩu để đăng nhập cho nhà
                      tuyển dụng
                    </p>
                  </div>

                  <form
                    class="row g-3 needs-validation"
                    novalidate=""
                    onSubmit={handleSubmit}
                  >
                    <div class="col-12">
                      <label for="yourUsername" class="form-label">
                        Email
                      </label>
                      <div class="input-group has-validation">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          required=""
                          onChange={handleInput}
                        />
                      </div>
                      <p style={{ color: "red" }}>{errors.email}</p>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="password"
                        required=""
                        onChange={handleInput}
                      />
                      <p style={{ color: "red" }}>{errors.password}</p>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="remember"
                          value="true"
                          id="rememberMe"
                        />
                        <label class="form-check-label" for="rememberMe">
                          Nhớ mật khẩu
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn btn-primary w-100"
                        type="submit"
                        style={{ margin: "10px 0" }}
                      >
                        Đăng nhập
                      </button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">
                        Bạn chưa có tài khoản?{" "}
                        <Link to="/registerCruiter">
                          <a href="/">Tạo tài khoản</a>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginRecruiter;
