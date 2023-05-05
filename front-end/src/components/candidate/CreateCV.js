import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";

function CreateCV() {
  const educationRef = useRef();
  const [showForm, setShowForm] = useState([]);
  const [education, setEducation] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [image, setImage] = useState(false);
  const [experienceProject, setExperienceProject] = useState(false);
  const [experienceCompany, setExperienceCompany] = useState(false);
  const [skills, setSkills] = useState("");
  const [award, setAward] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(showForm);
  const saveCV = (e) => {
    e.preventDefault();
    var educationStr = educationRef.current.innerText
      .replaceAll("\n", "$")
      .replaceAll("$$", "$");
    console.log(educationStr);
  };
  const handleShow = (formId, e) => {
    setShowForm((state) => [...state, formId]);
  };
  const addSkill = (e) => {
    return (
      <>
        <div className="content_form">
          <div id="content-suggest-skill">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </>
    );
  };
  const addLanguage = (e) => {
    return (
      <>
        <div className="content_form">
          <div id="content-suggest-skill">
            <select name="cars" id="cars">
              <option value="volvo">English</option>
              <option value="saab">Trung quoc</option>
              <option value="mercedes">Lào</option>
              <option value="audi">Láo</option>
            </select>
          </div>
        </div>
      </>
    );
  };
  const addContentCertificates = () => {
    return (
      <>
        <div className="additions">
          <i class="fa-regular fa-square-plus mr-1"></i>
          <i class="fa-regular fa-square-minus"></i>
        </div>
        <div className="content_form">
        <div className="d-flex flex-column flex-md-row">
          <p className="d-none item-id" info-name="id" info-group="award">
            41204
          </p>
          <div
            className="cv-editable-elem required medium-editor-element"
            data-placeholder="Tên chứng chỉ"
            info-name="name"
            info-group="award"
            contentEditable="true"
            spellCheck="true"
            data-medium-editor-element="true"
            role="textbox"
            aria-multiline="true"
            data-medium-editor-editor-index={1}
            medium-editor-index="8aeeade1-51b0-e6c9-78a4-2b8e336646ba"
          >
            Chứng chỉ java
          </div>
        </div>

        </div>
      </>
    );
  };

  const addContentSoftSkill = () => {
    return (
      <>
        <div className="additions">
          <i class="fa-regular fa-square-plus mr-1"></i>
          <i class="fa-regular fa-square-minus"></i>
        </div>
        <div className="content_form">
          <div id="content-suggest-skill"></div>
          <div className="d-flex flex-column flex-md-row">
            <p className="d-none item-id" info-name="id" info-group="award">
              41204
            </p>
            <div
              className="cv-editable-elem required medium-editor-element"
              data-placeholder="Tên kĩ năng mềm"
              info-name="name"
              info-group="award"
              contentEditable="true"
              spellCheck="true"
              data-medium-editor-element="true"
              role="textbox"
              aria-multiline="true"
              data-medium-editor-editor-index={1}
              medium-editor-index="8aeeade1-51b0-e6c9-78a4-2b8e336646ba"
            >
              Chơi game
            </div>
          </div>
        </div>
      </>
    );
  };

  const addContentAward = () => {
    return (
      <>
        <div className="additions">
          <i class="fa-regular fa-square-plus mr-1"></i>
          <i class="fa-regular fa-square-minus"></i>
        </div>
        <div className="content_form">
          <div id="content-suggest-award">
            <div className="d-flex flex-column flex-md-row mt-2">
              <div
                className="cv-editable-elem required medium-editor-element mr-5 "
                data-placeholder="Tên thành tích"
                info-name="name"
                info-group="award"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={1}
                medium-editor-index="8aeeade1-51b0-e6c9-78a4-2b8e336646ba"
              >
                Nhân viên xuất sắc tại
              </div>
              <div
                className="resume-award-desc ml-auto cv-editable-elem required medium-editor-element"
                data-placeholder="Năm"
                info-name="year"
                info-group="award"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={1}
                medium-editor-index="49be6dd6-7cb9-790a-1bb9-a47972a74305"
                data-medium-focused="true"
              >
                <p>2023</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const addContentAction = () => {
    return (
      <>
        <div className="additions">
          <i class="fa-regular fa-square-plus mr-1"></i>
          <i class="fa-regular fa-square-minus"></i>
        </div>
        <div className="content_form">
          <ul
            className="list-unstyled resume-awards-list"
            block="activity"
            id="activity-container"
          >
            <li className="mb-0 mb-2 position-relative cv-child-elem activity-item">
              <div className="d-flex flex-md-row">
                <p
                  className="d-none item-id"
                  info-name="id"
                  info-group="activity"
                />
                <div
                  className="cv-editable-elem required medium-editor-element"
                  data-placeholder="Tên công ty/tổ chức/sự kiện"
                  info-name="organization"
                  info-group="activity"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={2}
                  medium-editor-index="36bbebc1-61a4-be17-4a3e-d07c3305b902"
                >
                  <strong>Ngày hội tuyển dụng IT Việt Nam</strong>
                </div>
                <div className="resume-activity-desc ml-auto">
                  <div className="resume-degree-time">
                    <p
                      className="cv-editable-elem d-inline required medium-editor-element"
                      data-placeholder="Từ ngày"
                      info-group="activity"
                      info-name="from"
                      contentEditable="true"
                      spellCheck="true"
                      data-medium-editor-element="true"
                      role="textbox"
                      aria-multiline="true"
                      data-medium-editor-editor-index={2}
                      medium-editor-index="66a43cfa-9ff3-307d-cd6c-bfd3bad4d1ea"
                    >
                      17/04/2023
                    </p>
                    -
                    <p
                      className="cv-editable-elem d-inline required medium-editor-element"
                      data-placeholder="Đến ngày"
                      info-group="activity"
                      info-name="to"
                      contentEditable="true"
                      spellCheck="true"
                      data-medium-editor-element="true"
                      role="textbox"
                      aria-multiline="true"
                      data-medium-editor-editor-index={2}
                      medium-editor-index="4bf07e0e-cf1d-e9b8-c26b-d43efc5fb95d"
                    >
                      17/04/2023
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="company cv-editable-elem required medium-editor-element"
                data-placeholder="Vị trí/vai trò"
                info-name="role"
                info-group="activity"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={2}
                medium-editor-index="ea82fcac-d195-635b-867b-7933200c7581"
              >
                Diễn giả/cố vấn kỹ thuật
              </div>
              <div
                className="item-content cv-editable-elem medium-editor-element"
                data-placeholder="Mô tả hoạt động"
                info-name="description"
                info-group="activity"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={2}
                medium-editor-index="0e0fffe7-c9fc-0f2a-5cb9-90c3e16efb21"
              >
                Trả lời những câu hỏi về vị trí cũng như tổ chức mà người tham
                dự quan tâm.
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  };
  const addContentEducation = () => {
    return (
      <>
        <div className="additions">
          <i class="fa-regular fa-square-plus mr-1"></i>
          <i class="fa-regular fa-square-minus"></i>
        </div>
        <div className="content_form">
          <div className="group">
            <div className="meta">
              <div
                className="summary cv-editable-elem required medium-editor-element"
                data-placeholder="Chuyên ngành"
                info-name="specialization"
                info-group="education"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={1}
                medium-editor-index="57486af1-19be-60a6-ae12-281cbae65a33"
              >
                Quản trị kinh doanh
              </div>
              <div className="time">
                <p
                  className="summary cv-editable-elem d-inline required medium-editor-element"
                  data-placeholder="Năm bắt đầu"
                  info-group="education"
                  info-name="date_start"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={1}
                  medium-editor-index="a4ca8ff4-0010-5427-6d2a-c627d030c35f"
                >
                  2022
                </p>
                -
                <p
                  className="summary cv-editable-elem d-inline required medium-editor-element"
                  data-placeholder="Năm kết thúc"
                  info-group="education"
                  info-name="date_end"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={1}
                  medium-editor-index="5fda7554-db02-233e-16a4-45257c3cb7ef"
                >
                  2023
                </p>
              </div>
              <div className="upper-row title">
                <p
                  className="cl-change job-title cv-editable-elem required medium-editor-element"
                  data-placeholder="Tên trường"
                  info-name="school_name"
                  info-group="education"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={1}
                  medium-editor-index="6e3df1c0-c951-2151-7d18-da023770c90d"
                >
                  Đại học ...
                </p>
              </div>
            </div>
            <div
              className="summary cv-editable-elem medium-editor-element"
              data-placeholder="Mô tả học vấn"
              info-name="hightlight"
              info-group="education"
              contentEditable="true"
              spellCheck="true"
              data-medium-editor-element="true"
              role="textbox"
              aria-multiline="true"
              data-medium-editor-editor-index={1}
              medium-editor-index="e53e78f0-f5b5-c628-2a3b-bbb68f32b9b6"
            >
              Tốt nghiệp loại Giỏi
            </div>
          </div>
        </div>
      </>
    );
  };
  const addContentExp = () => {
    return (
      <>
        <div className="additions">
          <i class="fa-regular fa-square-plus mr-1"></i>
          <i class="fa-regular fa-square-minus"></i>
        </div>
        <div className="content_form">
          <div className="group">
            <div className="meta">
              <div className="group-content">
                <div style={{ fontWeight: 700 }} className="time">
                  <p
                    className="summary cv-editable-elem d-inline required medium-editor-element"
                    data-placeholder="Năm bắt đầu"
                    info-group="job_history"
                    info-name="date_start"
                    contentEditable="true"
                    spellCheck="true"
                    data-medium-editor-element="true"
                    role="textbox"
                    aria-multiline="true"
                    data-medium-editor-editor-index={1}
                    medium-editor-index="ba8918f3-778f-3981-1b88-f60d47dc901a"
                  >
                    2022
                  </p>
                  -
                  <p
                    className="summary cv-editable-elem d-inline required medium-editor-element"
                    data-placeholder="Năm kết thúc"
                    info-group="job_history"
                    info-name="date_end"
                    contentEditable="true"
                    spellCheck="true"
                    data-medium-editor-element="true"
                    role="textbox"
                    aria-multiline="true"
                    data-medium-editor-editor-index={1}
                    medium-editor-index="033cdc9d-52dd-da07-cbe9-1e11cd846907"
                  >
                    2023
                  </p>
                </div>
                <div
                  className="summary cv-editable-elem required medium-editor-element"
                  data-placeholder="Vị trí/công việc"
                  info-name="job_title"
                  info-group="job_history"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={1}
                  medium-editor-index="8c069554-7c72-8921-0d13-769c61ba27f9"
                >
                  <p>Nhân viên kinh doanh</p>
                </div>
              </div>
              <div className="upper-row title">
                <p
                  className="cl-change job-title cv-editable-elem required medium-editor-element"
                  data-placeholder="Tên công ty"
                  info-name="job_company"
                  info-group="job_history"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={1}
                  medium-editor-index="c2653746-22b9-723b-d07b-5b3ef5f0d082"
                >
                  Công ty CP ...&nbsp;
                </p>
              </div>
            </div>
            <div
              className="summary cv-editable-elem required medium-editor-element"
              data-placeholder="Mô tả công việc"
              info-name="job_description_html"
              info-group="job_history"
              contentEditable="true"
              spellCheck="true"
              data-medium-editor-element="true"
              role="textbox"
              aria-multiline="true"
              data-medium-editor-editor-index={1}
              medium-editor-index="50839119-a64f-cc4a-08bc-0c7e8caa3568"
            >
              <h4
                className="resume-timeline-item-desc-heading font-weight-bold cv-editable-elem medium-editor-element"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={8}
                medium-editor-index="9a5fd1fd-c581-f6d9-9290-5c3b12832411"
                data-placeholder="Click để sửa mục này"
              >
                Nhiệm vụ:
              </h4>
              <p
                className="cv-editable-elem medium-editor-element"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={8}
                medium-editor-index="a61e79bf-0a30-424e-5794-ac6118b40659"
                data-placeholder="Click để sửa mục này"
              >
                - Thực hiện các kế hoạch kinh doanh: tìm kiếm khách hàng, giới
                thiệu sản phẩm dịch vụ, tư vấn sản phẩm và ứng dụng, chăm sóc và
                quản lý quan hệ khách hàng.
              </p>
              &nbsp;
              <p
                className="cv-editable-elem medium-editor-element"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={8}
                medium-editor-index="7e038187-7504-0d24-98ed-c70548acdd23"
                data-placeholder="Click để sửa mục này"
              >
                - Lập kế hoạch hoạt động năm, quý, tháng, tuần để đạt được mục
                tiêu được giao.
              </p>
              <p
                className="cv-editable-elem medium-editor-element"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={8}
                medium-editor-index="d32955b7-f2e7-5275-2e83-6b316f602a91"
                data-placeholder="Click để sửa mục này"
              >
                - Khảo sát, nghiên cứu, đánh giá doanh thu dự kiến tại khu vực
                quản lý. Xây dựng, kiến nghị kế hoạch kinh doanh phù hợp.
              </p>
              <h4
                className="resume-timeline-item-desc-heading font-weight-bold cv-editable-elem medium-editor-element"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={8}
                medium-editor-index="4bdd0480-37b8-e56d-970c-c2f3a760eebf"
                data-placeholder="Click để sửa mục này"
              >
                Thành tích:
              </h4>
              <p
                className="cv-editable-elem medium-editor-element"
                contentEditable="true"
                spellCheck="true"
                data-medium-editor-element="true"
                role="textbox"
                aria-multiline="true"
                data-medium-editor-editor-index={8}
                medium-editor-index="f74c0ec1-de2f-33b4-3d66-bf19dbc67e8b"
                data-placeholder="Click để sửa mục này"
              >
                Qua quá trình làm việc tại Công ty cổ phần ... tôi đã đạt được
                một số thành tích sau:
              </p>
              <ul>
                <li
                  className="cv-editable-elem medium-editor-element"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={8}
                  medium-editor-index="cfc69b96-fe16-4328-c3f8-1dbdf61ba78d"
                  data-placeholder="Click để sửa mục này"
                >
                  ... Best seller 2022
                </li>
                <li
                  className="cv-editable-elem medium-editor-element"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={8}
                  medium-editor-index="3faeae84-8659-b559-4bae-d357dec4b910"
                  data-placeholder="Click để sửa mục này"
                >
                  Nhân viên xuất sắc 2022
                </li>
                <li
                  className="cv-editable-elem medium-editor-element"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={8}
                  medium-editor-index="bb49920e-5591-9cdb-20a8-0981463285f8"
                  data-placeholder="Click để sửa mục này"
                >
                  Nhân viên sáng tạo
                </li>
                <li
                  className="cv-editable-elem medium-editor-element"
                  contentEditable="true"
                  spellCheck="true"
                  data-medium-editor-element="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index={8}
                  medium-editor-index="25249717-b644-b80a-34b6-71f7b44e78d6"
                  data-placeholder="Click để sửa mục này"
                >
                  Dự án sale xuất sắc
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  useEffect(() => {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput);
    }

    function OnInput() {
      this.style.height = 0;
      console.log(this.scrollHeight);
      this.style.height = this.scrollHeight + "px";
    }
  }, []);
  return (
    <>
      <div className="container-fluid d-flex" style={{ padding: 0 }}>
        {/* <div class="col-2">
    <div>
      <h5><i class="fa-solid fa-circle-exclamation"></i>Hướng dẫn</h5>
      <p>Điền đầy đủ các thông tin hiển thị trong CV</p>
    </div>
  </div> */}
        <div className="col-10" style={{ margin: "0 auto" }}>
          <div className="row">
            <div
              className="col-3"
              style={{ backgroundColor: "#434e5e", padding: 0 }}
            >
              <img src={Logo} alt="" style={{ width: 250, height: 250 }} />
            </div>
            <div
              className="col-9"
              style={{
                padding: 0,
                backgroundColor: "#434e5e",
                marginLeft: "-4%",
                color: "#fff",
              }}
            >
              <div className="d-flex inputcv">
                <div
                  className="col-8 d-flex flex-column"
                  style={{ padding: 0 }}
                >
                  <div
                    style={{ fontSize: 12, color: "#fff", paddingTop: "10px" }}
                  >
                    <h3>THANG NGUYEN</h3>
                    <div style={{ width: "30%" }}>
                      <div className="mt-3">
                        <input
                          style={{ width: "100%", height: 30, padding: 5 }}
                          type="text"
                          placeholder="Vị trí mong muốn"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-regular fa-envelope"> </i>
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="email@gmail.com"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-solid fa-phone" />
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="Số điện thoại"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-solid fa-cake-candles" />
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="Ngày sinh"
                        />
                      </div>
                      <div className="mt-3">
                        <i className="fa-solid fa-location-dot" />
                        <input
                          style={{ width: "90%" }}
                          type="text"
                          placeholder="Địa chỉ"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex flex-column">
                  <div className="pt-4">
                    <i
                      style={{ fontSize: 22, marginRight: 5 }}
                      className="fa-brands fa-linkedin"
                    />
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      placeholder="linkedin.com/..."
                    />
                  </div>
                  <div className="pt-4">
                    <i
                      style={{ fontSize: 22, marginRight: 4 }}
                      className="fa-brands fa-facebook"
                    />
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      placeholder="linkedin.com/..."
                    />
                  </div>
                  <div className="pt-4">
                    <i
                      style={{ fontSize: 22, marginRight: 5 }}
                      className="fa-brands fa-skype"
                    />
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      placeholder="linkedin.com/..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ padding: "50px 0" }}>
            <div className="col-8">
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-briefcase" /> Kinh nghiệm làm việc
                </h3>
                {showForm && showForm.includes(1) ? (
                  addContentExp()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(1, e)}
                  >
                    <div id="content-suggest-skill"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-graduation-cap" />
                  Học vấn
                </h3>
                {showForm && showForm.includes(2) ? (
                  addContentEducation()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(2, e)}
                  >
                    <div id="content-suggest-skill"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-graduation-cap" /> Hoạt động
                </h3>
                {showForm && showForm.includes(3) ? (
                  addContentAction()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(3, e)}
                  >
                    <div id="content-suggest-skill"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-certificate" /> Chứng chỉ
                </h3>
                {showForm && showForm.includes(4) ? (
                  addContentCertificates()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(4, e)}
                  >
                    <div id="content-suggest-skill"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>
            </div>
            <div className="col-3">
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-laptop-code" /> Kĩ năng
                </h3>
                {showForm && showForm.includes(5) ? (
                  addSkill()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(5, e)}
                  >
                    <div id="content-suggest-skill"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-feather" /> Kĩ năng mềm
                </h3>

                {showForm && showForm.includes(6) ? (
                  addContentSoftSkill()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(6, e)}
                  >
                    <div id="content-suggest-skill"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>
              <section className="experience">
                <h3>
                  <i className="fa-solid fa-medal" /> Giải thưởng
                </h3>
                {showForm && showForm.includes(7) ? (
                  addContentAward()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(7, e)}
                  >
                    <div id="content-suggest-award"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>

              <section className="experience">
                <h3>
                  <i className="fa-solid fa-language" /> Ngoại ngữ
                </h3>

                {showForm && showForm.includes(8) ? (
                  addLanguage()
                ) : (
                  <div
                    className="content_form"
                    onClick={(e) => handleShow(8, e)}
                  >
                    <div id="content-suggest-skill"></div>
                    <i className="fa-solid fa-plus" />
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        style={{
          display: "flex",
          margin: "0 auto",
          width: "20%",
          padding: "5px 15px",
          justifyContent: "center",
        }}
        type="submit"
        onClick={saveCV}
      >
        Lưu CV
      </button>
    </>
  );
}
export default CreateCV;
