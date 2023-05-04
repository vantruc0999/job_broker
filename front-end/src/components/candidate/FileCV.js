import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function FileCV() {
  let params = useParams();
  const [resume, setResume] = useState("");
  const [id, setId] = useState([]);
  console.log(resume);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    
    axios
      .get(`http://127.0.0.1:8000/api/candidate/show-detail/`, config)
      .then((res) => {
        console.log("oke",res.data);
        setResume(res.data);
      });
  }, []);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    axios
      .get(`http://127.0.0.1:8000/api/candidate/show-detail/`+ params.id, config)
      .then((res) => {
        console.log(res.data);
        setResume(res.data);
      });
  }, []);
  const renderExp = () => {
    if (Object.keys(resume).length > 0) {
      return  resume.experience_company.map((value, key)=>{
        return (
          <>
              <ul>
                <li>
                  <div className="date">{ value.experience_start}</div>
                  <div className="info">
                    <p className="semi-bold">{value.company_name}</p>
                    <p>Nhiệm vụ: {value.position}</p>
                    {/* <p>Ngôn ngữ sử dụng: J2ME</p> */}
                    <p>
                      {value.achievement}
                    </p>
                  </div>
                </li>
                
              </ul>
          </>
        );
      })
    }
  };
  const renderSkill = () => {
    if (Object.keys(resume).length > 0) {
      return  resume.skill.map((value, key)=>{
        return (
          <>
                      <li>
                        <div className="skill_name">{resume.skill}</div>
                        <div className="skill_progress">
                          <span style={{ width: "80%" }} />
                        </div>
                        <div className="skill_per">80%</div>
                      </li>
                     
          </>
        );
      })
    }
  };
  const renderResume = () => {
    if (Object.keys(resume).length > 0) {
      console.log("resume", resume);
      return (
        <>
          <div id="vn">
            <div className="resume">
              {/* <div class="lang"><a href="#en"><img src="en.png" alt=""></a></div> */}
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
                      <p className="bold">Nguyễn Kim Thắng</p>
                      <p className="regular">Developer</p>
                    </div>
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-map-signs" />
                        </div>
                        <div className="data">
                          66, Nguyễn Tư Giản <br />
                          Tp. Đà Nẵng, Đà Nẵng
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-mobile-alt" />
                        </div>
                        <div className="data">+84 708 283 063</div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="data">
                          nguyenkimthang.26122001
                          <br />
                          @gmail.com
                        </div>
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
                    <ul>
                     {renderSkill()}
                    </ul>
                  </div>
                  <div className="resume_item resume_social">
                    <div className="title">
                      <p className="bold">Mạng xã hội</p>
                    </div>
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fab fa-facebook-square" />
                        </div>
                        <div className="data">
                          <p className="semi-bold">Facebook</p>
                          <p>
                            <a href="" target="_blank">
                              kim.thang.26
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fab fa-skype" />
                        </div>
                        <div className="data">
                          <p className="semi-bold">Skype</p>
                          <p>
                            <a href="#">kim.thang.26</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fab fa-youtube" />
                        </div>
                        <div className="data">
                          <p className="semi-bold">Youtube</p>
                          <p>
                            <a href="" target="_blank">
                              kimthang
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fab fa-linkedin" />
                        </div>
                        <div className="data">
                          <p className="semi-bold">Linkedin</p>
                          <p>
                            <a href="" target="_blank">
                              kim-thang
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
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
                    <p className="bold">Kinh nghiệm làm việc</p>
                  </div>
                 {renderExp()}
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
                <div className="resume_item resume_hobby">
                  <div className="title">
                    <p className="bold">Sở thích</p>
                  </div>
                  <ul>
                    <li>
                      <i className="fas fa-book" />
                    </li>
                    <li>
                      <i className="fas fa-gamepad" />
                    </li>
                    <li>
                      <i className="fas fa-music" />
                    </li>
                    <li>
                      <i className="fab fa-pagelines" />
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
