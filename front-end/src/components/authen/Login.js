import { useState } from "react";
import axios from "axios";
function Login() {
  const [inputs, setInputs] = useState("");
  const [errors, setErrors] = useState("");
  const handleInput = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    console.log("alo");
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
      let url = "http://127.0.0.1:8000/api/candidate/login";
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
            localStorage.setItem("user",JSON.stringify(res.data))
            alert(res.data.message);
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
      <div className="auth-form auth-form__login" style={{ marginTop: 150 }}>
        <div className="auth-form__container">
          <div className="auth-form__header">
            <h3 className="auth-form__heading">Login</h3>
            <span className="auth-form__switch-btn auth-form__switch-btn2">
              Sign Up
            </span>
          </div>
          <form action="" id="login" onSubmit={handleSubmit}>
            <div className="auth-form__form">
              <div className="auth-form__group">
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
              </div>
              <div className="auth-form__group">
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
              </div>
            </div>
            <div className="auth-form__aside">
              <div className="auth-form__help">
                <a href="" className="auth-form__link auth-form__help">
                  Forgot password
                </a>
                <span className="auth-form__help--separate" />
                <a href="" className="auth-form__link">
                  Need help ?
                </a>
              </div>
            </div>
            <div className="auth-form__controls">
              <button className="btn auth-form__controls-back">SIGN UP</button>
              <button className="btn btn--primary ">LOGIN</button>
            </div>
          </form>
        </div>
        <div className="auth-form__socials">
          <a
            href=""
            className="auth-form__socials--facebook btn btn--size-s btn--with-icon"
          >
            <i className="auth-form__socials-icon fa-brands fa-facebook-square" />
            Sign in with Facebook
          </a>
          <a
            href=""
            className="auth-form__socials--google btn btn--size-s btn--with-icon"
          >
            <i className="auth-form__socials-icon fa-brands fa-google" />
            Sign in with Google
          </a>
        </div>
      </div>
    </>
  );
}
export default Login;
