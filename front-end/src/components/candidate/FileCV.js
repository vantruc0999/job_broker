import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../assets/css/cv.css";

function FileCV() {
  let params = useParams();
  const [resume, setResume] = useState("");
  const [id, setId] = useState([]);
  const [info, setInfo] = useState("");
  console.log(resume);

  let user = JSON.parse(localStorage.getItem("user"));
  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/candidate/show-detail/` + params.id,
        config
      )
      .then((res) => {
        console.log(res.data);
        setResume(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/candidate/get-candidate-infor`, config)
      .then((res) => {
        setInfo(res.data);
      });
  }, []);
  console.log("info", info);
  const renderExp = () => {
    if (Object.keys(resume).length > 0) {
      return resume.experience_company.map((value, key) => {
        return (
          <>
            <ul>
              <li>
                <div className="date">{value.experience_start}</div>
                <div className="info">
                  <p className="semi-bold">{value.company_name}</p>
                  <p>Nhiệm vụ: {value.position}</p>
                  {/* <p>Ngôn ngữ sử dụng: J2ME</p> */}
                  <p>{value.achievement}</p>
                </div>
              </li>
            </ul>
          </>
        );
      });
    }
  };

  const renderSkill = () => {
    if (Object.keys(resume).length > 0) {
      return resume.skill.map((value, key) => {
        console.log(value);
        return (
          <>
            <li>
              <div className="skill_name">{value.skill_name}</div>
            </li>
          </>
        );
      });
    }
  };
  const renderResume = () => {
    if (Object.keys(resume).length > 0) {
      console.log("resume", resume);
      return (
        <>
          <div id="vn">
            <div className="resume">
              <div className="lang">
                <img src="en.png" alt="" />
              </div>
              <div className="resume_left">
                <div className="resume_profile">
                  <img src={Logo} alt="profile_pic" />
                </div>
                <div className="resume_content">
                  <div className="resume_item resume_info">
                    <div className="title">
                      <p className="bold">
                        {" "}
                        {info.last_name} {info.first_name}
                      </p>
                      <p className="regular">Developer</p>
                    </div>
                    <ul style={{ padding: "0" }}>
                      <li>
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="data">
                          {info.address} <br />
                          Tp. Đà Nẵng, Đà Nẵng
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-phone" />
                        </div>
                        <div className="data">{info.phone}</div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="data">{info.email}</div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fab fa-weebly" />
                        </div>
                        <div className="data">www.thangnk.cf</div>
                      </li>
                    </ul>
                  </div>
                  <div className="resume_item resume_skills">
                    <div className="title">
                      <p className="bold">Các kỹ năng</p>
                    </div>
                    <ul>{renderSkill()}</ul>
                  </div>
                </div>
              </div>
              <div className="resume_right">
                <div className="resume_item resume_about">
                  <div className="title">
                    <p className="bold">Giới thiệu</p>
                  </div>
                  <p>
                    Tôi là một chuyên viên phát triển phần mềm với hơn 10 năm
                    tại các công ty trong và ngoài nước. Công việc của tôi cả về
                    lập trình front-end lẫn back-end. Mong muốn được làm việc
                    trong môi trường chuyên nghiệp, đồng nghiệp thân thiện và
                    chế độ phúc lợi tốt.
                  </p>
                </div>
                <div className="resume_item resume_work">
                  <div className="title">
                    <p className="bold">Kinh nghiệm làm việc công ty</p>
                  </div>
                  {renderExp()}
                </div>

                <div className="resume_item resume_work">
                  <div className="title">
                    <p className="bold">Kinh nghiệm làm việc dự án</p>
                  </div>
                  {/* {renderExpProject()} */}
                </div>
                <div className="resume_item resume_education">
                  <div className="title">
                    <p className="bold">Giáo dục</p>
                  </div>
                  <ul>
                    <li>
                      <div className="date">{resume.resume.education_year}</div>
                      <div className="info">
                        <p className="semi-bold">{resume.resume.education}</p>
                        <p>Ngành: {resume.resume.education_major}</p>
                        <p>{resume.resume.education_description}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return <>{renderResume()}</>;
}
export default FileCV;
