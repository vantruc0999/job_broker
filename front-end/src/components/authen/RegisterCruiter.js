import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function RegisterCruiter() {
  const [inputs, setInputs] = useState("");
  const [errors, setErrors] = useState("");
  const [avatar, setAvatar] = useState("");
  const [file, setFile] = useState("");
  const handleInput = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const handleInputFile = (e) => {
    let file = e.target.files;
    let reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
      setFile(file[0]);
    };
    reader.readAsDataURL(file[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    const re =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var regexPass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:\\|;\"',<.>/?]).{8,}$/;

    let flag = true;

    if (inputs.company_name === undefined) {
      flag = false;
      errorSubmit.company_name = "Please enter your company ";
    }
    if (inputs.company_name === "") {
      flag = false;
      errorSubmit.company_name = "Please enter your company ";
    }

    if (inputs.recruiter_name === undefined) {
      flag = false;
      errorSubmit.recruiter_name = "Please enter your recruiter ";
    }
    if (inputs.recruiter_name === "") {
      flag = false;
      errorSubmit.recruiter_name = "Please enter your recruiter ";
    }

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
    if (inputs.repassword === undefined) {
      flag = false;
      errorSubmit.repassword = "Please confirm your password";
    }
    if (inputs.repassword === "") {
      flag = false;
      errorSubmit.repassword = "Please confirm your password";
    }
    if (inputs.password != inputs.repassword) {
      flag = false;
      errorSubmit.repassword = "Incorrect password";
    }

    if (inputs.phone === undefined) {
      flag = false;
      errorSubmit.phone = "Please enter your phone number";
    }
    if (inputs.phone === "") {
      flag = false;
      errorSubmit.phone = "Please enter your phone number";
    }
    if (!vnf_regex.test(inputs.phone)) {
      flag = false;
      errorSubmit.phone = "Invalid phone number";
    }

    if (!file) {
      // flag = false;
      errorSubmit.avatar = "file not uploaded yet";
    } else {
      let img = ["png", "jpg", "jpeg", "PNG", "JPG"];
      if (file.size > 1024 * 1024) {
        // flag = false;
        errorSubmit.avatar = "File quá dung lượng";
      } else if (!img.includes(file.name.split(".").pop())) {
        // flag = false;
        errorSubmit.avatar("This not image");
      }
    }

    if (!flag) {
      setErrors(errorSubmit);
      console.log(errorSubmit);
    } else {
      setErrors({});
      const data = {
        company_name: inputs.company_name,
        recruiter_name: inputs.recruiter_name,
        email: inputs.email,
        password: inputs.password,
        phone: inputs.phone,
        image: inputs.image,
      };
      let url = "http://127.0.0.1:8000/api/recruiter/register";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            setErrors(res.data.errors);
            alert(res.data.message);
          } else {
            setInputs({
              company: "",
              recruiter: "",
              email: "",
              password: "",
              phone: "",
              image: "",
            });
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
      <div className="auth-form auth-form__signup">
        <div className="auth-form__container">
          <div className="auth-form__header">
            <h3 className="auth-form__heading">Sign Up</h3>
          </div>
          <form action="" id="register" onSubmit={handleSubmit}>
            <div className="auth-form__form">
              <div className="auth-form__group">
                <input
                  name="company_name"
                  id="company_name"
                  type="text"
                  className="auth-form__input"
                  placeholder="Company name"
                  value={inputs.company_name}
                  onChange={handleInput}
                />
                <p style={{ color: "red" }}>{errors.company_name}</p>
              </div>
              <div className="auth-form__group">
                <input
                  name="recruiter_name"
                  id="recruiter_name"
                  type="text"
                  className="auth-form__input"
                  placeholder="Recruiter name "
                  value={inputs.recruiter_name}
                  onChange={handleInput}
                />
                <p style={{ color: "red" }}>{errors.recruiter_name}</p>
              </div>
              <div className="auth-form__group">
                <input
                  name="email"
                  id="email"
                  type="email"
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
              <div className="auth-form__group">
                <input
                  name="repassword"
                  id="repassword"
                  type="password"
                  className="auth-form__input"
                  placeholder="Confirm password"
                  value={inputs.repassword}
                  onChange={handleInput}
                />
                <p style={{ color: "red" }}>{errors.repassword}</p>
              </div>
              <div className="auth-form__group">
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  className="auth-form__input"
                  placeholder="Number phone"
                  value={inputs.phone}
                  onChange={handleInput}
                />
                <p style={{ color: "red" }}>{errors.phone}</p>
              </div>
              <div className="auth-form__group">
                <input
                  name="avatar"
                  id="avatar"
                  type="file"
                  multiple
                  onChange={handleInputFile}
                />
                <p style={{ color: "red" }}>{errors.avatar}</p>
              </div>
            </div>
            <div className="auth-form__aside">
              <p className="auth-form__policy-text">
                By registering, you agree to BrokerJob about
                <a href="" className="auth-form__text-link">
                  Terms of Service
                </a>
                &amp;
                <a href="" className="auth-form__text-link">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="auth-form__controls">
              <Link to="/loginCruiter">
                <button type="submit" className="btn auth-form__controls-back">
                  LOGIN
                </button>
              </Link>
              <button type="submit" className="btn btn--primary ">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
        <div className="auth-form__socials">
          <Link
            to="#"
            className="auth-form__socials--facebook btn btn--size-s btn--with-icon"
          >
            <i className="auth-form__socials-icon fa-brands fa-facebook-square" />
            Connect with Facebook
          </Link>
          <Link
            to="#"
            className="auth-form__socials--google btn btn--size-s btn--with-icon"
          >
            <i className="auth-form__socials-icon fa-brands fa-google" />
            Connect with Google
          </Link>
        </div>
      </div>
    </>
  );
}
export default RegisterCruiter;
