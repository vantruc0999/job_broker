import Logo from "../../assets/images/logo.jpg";

function FileCV() {
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
                  <li>
                    <div className="skill_name">HTML</div>
                    <div className="skill_progress">
                      <span style={{ width: "80%" }} />
                    </div>
                    <div className="skill_per">80%</div>
                  </li>
                  <li>
                    <div className="skill_name">CSS</div>
                    <div className="skill_progress">
                      <span style={{ width: "70%" }} />
                    </div>
                    <div className="skill_per">70%</div>
                  </li>
                  <li>
                    <div className="skill_name">JS</div>
                    <div className="skill_progress">
                      <span style={{ width: "90%" }} />
                    </div>
                    <div className="skill_per">90%</div>
                  </li>
                  <li>
                    <div className="skill_name">JQUERY</div>
                    <div className="skill_progress">
                      <span style={{ width: "88%" }} />
                    </div>
                    <div className="skill_per">88%</div>
                  </li>
                  <li>
                    <div className="skill_name">Bootstrap</div>
                    <div className="skill_progress">
                      <span style={{ width: "82%" }} />
                    </div>
                    <div className="skill_per">82%</div>
                  </li>
                  <li>
                    <div className="skill_name">PHP</div>
                    <div className="skill_progress">
                      <span style={{ width: "85%" }} />
                    </div>
                    <div className="skill_per">85%</div>
                  </li>
                  <li>
                    <div className="skill_name">PYTHON</div>
                    <div className="skill_progress">
                      <span style={{ width: "75%" }} />
                    </div>
                    <div className="skill_per">75%</div>
                  </li>
                  <li>
                    <div className="skill_name">JAVA</div>
                    <div className="skill_progress">
                      <span style={{ width: "80%" }} />
                    </div>
                    <div className="skill_per">80%</div>
                  </li>
                  <li>
                    <div className="skill_name">.NET</div>
                    <div className="skill_progress">
                      <span style={{ width: "72%" }} />
                    </div>
                    <div className="skill_per">72%</div>
                  </li>
                  <li>
                    <div className="skill_name">LARAVEL</div>
                    <div className="skill_progress">
                      <span style={{ width: "75%" }} />
                    </div>
                    <div className="skill_per">75 %</div>
                  </li>
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
                Tôi là một chuyên viên phát triển phần mềm với hơn 10 năm tại
                các công ty trong và ngoài nước. Công việc của tôi cả về lập
                trình front-end lẫn back-end. Mong muốn được làm việc trong môi
                trường chuyên nghiệp, đồng nghiệp thân thiện và chế độ phúc lợi
                tốt.
              </p>
            </div>
            <div className="resume_item resume_work">
              <div className="title">
                <p className="bold">Kinh nghiệm làm việc</p>
              </div>
              <ul>
                <li>
                  <div className="date">2007 - 2008</div>
                  <div className="info">
                    <p className="semi-bold">Gameloft - Developer.</p>
                    <p>Nhiệm vụ: porting</p>
                    <p>Ngôn ngữ sử dụng: J2ME</p>
                    <p>
                      Công việc cụ thể: thay đổi code đã chạy được trên 1 điện
                      thoại mẫu để có thể chạy được cho điện thoại khác nhau
                    </p>
                  </div>
                </li>
                <li>
                  <div className="date">2008 - 2009</div>
                  <div className="info">
                    <p className="semi-bold">FPT Software - Developer.</p>
                    <p>Nhiệm vụ: phát triển theo yêu cầu</p>
                    <p>Ngôn ngữ sử dụng: Java, C++, C#</p>
                    <p>
                      Công việc cụ thể: viết các chức năng theo yêu cầu. Thiết
                      kế lại giao diện chương trình theo yêu cầu của khách hàng
                    </p>
                  </div>
                </li>
                <li>
                  <div className="date">2009 - Nay</div>
                  <div className="info">
                    <p className="semi-bold">
                      Giảng viên Đại học Phạm Văn Đồng.
                    </p>
                    <p>
                      Giảng dạy các môn học: Lâp trình Web, Cơ sở Lập trình, Lập
                      trình Python, Lập trình Scratch
                    </p>
                  </div>
                </li>
                <li>
                  <div className="date">2019 - 2020</div>
                  <div className="info">
                    <p className="semi-bold">ILINXC - Developer.</p>
                    <p>Nhiệm vụ: phát triển theo yêu cầu</p>
                    <p>Ngôn ngữ sử dụng: PHP, .NET, jQuery</p>
                    <p>
                      Công việc cụ thể: thực hiện viết các chức năng theo yêu
                      cầu; fix bugs phát sinh.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="date">2019 - Nay</div>
                  <div className="info">
                    <p className="semi-bold">Mentor tại ĐH Trực tuyến Funix.</p>
                    <p>
                      Mentoring các môn: Thiết kế Web, Lập trình Web với
                      Javascript, Lập trình Python
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Giáo dục</p>
              </div>
              <ul>
                <li>
                  <div className="date">2018 - 2022</div>
                  <div className="info">
                    <p className="semi-bold">ĐH Duy Tân Tp. Đà Nẵng</p>
                    <p>Ngành: Công nghệ phần mềm</p>
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
export default FileCV;
