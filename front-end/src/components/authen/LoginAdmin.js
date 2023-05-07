import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

function LoginAdmin() {
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
      console.log(data);
      let url = "http://127.0.0.1:8000/api/admin/login";
      axios
        .post(url, data)
        .then((res) => {
          if (res.data.errors) {
            setErrors(res.data.errors);
            alert(res.data.message);
          } else {
            // setInputs({
            //   email: "",
            //   password: "",
            // });
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            alert(res.data.message);
            if (res.data.role === "admin") {
              navigate("/adminhome");
            } else {
              navigate("/loginadmin");
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
    <>
      <>
        <div className="login-box" style={{margin:"200px auto"}}>
          {/* /.login-logo */}
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a  className="h1">
                <b>Admin</b>
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Xin hãy đăng nhập để tiếp tục</p>
              <form action="" id="login"  onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                <input
                  name="email"
                  id="emaill"
                  type="text"
                  className="auth-form__input"
                  placeholder="Email "
                  value={inputs.email}
                  onChange={handleInput}
                />
                <p style={{ color: "red" }}>{errors.email}</p>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="auth-form__input"
                  placeholder="Password "
                  value={inputs.password}
                  onChange={handleInput}
                />
                 <p style={{ color: "red" }}>{errors.password}</p>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Nhớ mật khẩu </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-5">
                    <button type="submit" className="btn btn-primary btn-block">
                      Đăng nhập
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/* <div class="social-auth-links text-center mt-2 mb-3">
      <a href="#" class="btn btn-block btn-primary">
        <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
      </a>
      <a href="#" class="btn btn-block btn-danger">
        <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
      </a>
    </div> */}
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="/">Quên mật khẩu</a>
              </p>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.login-box */}
      </>
    </>
  );
}
export default LoginAdmin;
