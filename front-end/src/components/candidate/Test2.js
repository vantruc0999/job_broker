import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
function Test2() {
  const tx = document.getElementById("exp_input");
  if (tx) {
    tx.setAttribute(
      "style",
      "height:" + tx.scrollHeight + "px;overflow-y:hidden; width:100%; "
    );
    tx.addEventListener("input", OnInput, false);
  }
  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }
  const [showForm, setShowForm] = useState([]);
  const [exp, setExp] = useState([]);
  const [education, setEducation] = useState([]);
  const [active, setActive] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [skill, setSkill] = useState([]);
  const [softSkill, setSoftSkill] = useState([]);
  const [awards, setAwards] = useState([]);
  const [language, setLanguage] = useState([]);
  const [enterPressed, setEnterPressed] = useState([]);
  const [count, setCount] = useState(1);
  const handleAwardInputChange = (index, field, value) => {
    const newAwards = [...awards];
    newAwards[index] = {
      ...newAwards[index],
      [field]: value,
    };
    setAwards(newAwards);
  };
  console.log(exp);
  console.log(education);
  console.log(active);
  console.log(certificate);
  console.log(skill);
  console.log(softSkill);
  console.log(awards);
  console.log(language);

  const handleAddAward = () => {
    setAwards([...awards, ""]);
  };

  const handleRemoveAward = (index) => {
    const newAwards = [...awards];
    newAwards.splice(index, 1);
    setAwards(newAwards);
  };

  const handleSoftInputChange = (index, field, value) => {
    const newAwards = [...softSkill];
    newAwards[index] = {
      ...newAwards[index],
      [field]: value,
    };
    setSoftSkill(newAwards);
  };
  const handleAddSoft = () => {
    setSoftSkill([...softSkill, ""]);
  };
  const handleRemoveSoft = (index) => {
    const newAwards = [...softSkill];
    newAwards.splice(index, 1);
    setSoftSkill(newAwards);
  };

  const handleCerInputChange = (index, field, value) => {
    const newAwards = [...certificate];
    newAwards[index] = {
      ...newAwards[index],
      [field]: value,
    };
    setCertificate(newAwards);
  };
  const handleAddCer = () => {
    setCertificate([...certificate, ""]);
  };
  console.log(exp);
  const handleRemoveCer = (index) => {
    const newAwards = [...certificate];
    newAwards.splice(index, 1);
    setCertificate(newAwards);
  };

  const handleActInputChange = (index, field, value) => {
    const newAwards = [...active];
    newAwards[index] = {
      ...newAwards[index],
      [field]: value,
    };
    setActive(newAwards);
  };
  const handleAddAct = () => {
    setActive([...active, ""]);
  };
  const handleRemoveAct = (index) => {
    const newAwards = [...active];
    newAwards.splice(index, 1);
    setActive(newAwards);
  };

  const handleEduInputChange = (index, field, value) => {
    const newAwards = [...education];
    newAwards[index] = {
      ...newAwards[index],
      [field]: value,
    };
    setEducation(newAwards);
  };
  const handleAddEdu = () => {
    setEducation([...education, ""]);
  };
  const handleRemoveEdu = (index) => {
    const newAwards = [...education];
    newAwards.splice(index, 1);
    setEducation(newAwards);
  };
  const handleExpInputChange = (index, field, value) => {
    const newAwards = [...exp];
    newAwards[index] = {
      ...newAwards[index],
      [field]: value,
    };
    setExp(newAwards);
  };
  // const handleKeyDown = (index, field, value, e) => {
  //   if (e.key === "Enter" ||e.type === "blur") {
  //     let newField = field;
  //     if (field == "description") {
  //       setCount(count+1)
  //       newField = "description" + (count);
  //       const slicedStr = value.slice(0, value.length);
  //       const a = {[newField]:slicedStr}
  //       const newEnterPressed = [...enterPressed, a];
  //       setEnterPressed(newEnterPressed);
  //     }
  //   }
  // };

  const handleAddExp = () => {
    setExp([...exp, ""]);
  };
  const handleRemoveExp = (index) => {
    const newAwards = [...exp];
    newAwards.splice(index, 1);
    setExp(newAwards);
  };
  const handleShow = (formId, e) => {
    setShowForm((state) => [...state, formId]);
  };

  const handleSkillInput = (event) => {
    let nameInput = event.target.name;
    let value = event.target.value;
    setSkill((state) => ({ ...state, [nameInput]: value }));
  };
  const handleLangInput = (event) => {
    let nameInput = event.target.name;
    let value = event.target.value;
    setLanguage((state) => ({ ...state, [nameInput]: value }));
  };
  const addSkill = (e) => {
    return (
      <>
        <div className="content_form">
          <div id="content-suggest-skill">
            <select name="skill" id="cars" onChange={handleSkillInput}>
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
            <select name="language" id="cars" onChange={handleLangInput}>
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
        {certificate.map((certificate, index) => (
          <div className="content_form" style={{ marginTop: "30px" }}>
            <div className="addition">
              <i
                class="fa-regular fa-square-plus mr-1"
                onClick={handleAddCer}
              ></i>
              <i
                class="fa-regular fa-square-minus"
                onClick={() => handleRemoveCer(index)}
              ></i>
            </div>
            <div key={index} className="form-field">
              <input
                className="form_input"
                type="text"
                placeholder=" "
                value={certificate.title}
                onChange={(e) =>
                  handleCerInputChange(index, "title", e.target.value)
                }
              />
              <label for="name" className="form-label">
                Chứng chỉ
              </label>
            </div>
          </div>
        ))}
      </>
    );
  };
  const addContentSoftSkill = () => {
    return (
      <>
        {softSkill.map((softSkill, index) => (
          <div className="content_form" style={{ marginTop: "30px" }}>
            <div className="addition">
              <i
                class="fa-regular fa-square-plus mr-1"
                onClick={handleAddSoft}
              ></i>
              <i
                class="fa-regular fa-square-minus"
                onClick={() => handleRemoveSoft(index)}
              ></i>
            </div>
            <div key={index} className="form-field">
              <input
                className="form_input"
                type="text"
                placeholder=" "
                value={softSkill.title}
                onChange={(e) =>
                  handleSoftInputChange(index, "title", e.target.value)
                }
              />
              <label for="name" className="form-label">
                Kĩ năng mềm
              </label>
            </div>
          </div>
        ))}
      </>
    );
  };
  const addContentAward = () => {
    return (
      <>
        {awards.map((award, index) => (
          <div className="content_form" style={{ marginTop: "30px" }}>
            <div className="addition">
              <i
                class="fa-regular fa-square-plus mr-1"
                onClick={handleAddAward}
              ></i>
              <i
                class="fa-regular fa-square-minus"
                onClick={() => handleRemoveAward(index)}
              ></i>
            </div>
            <div key={index} className="form-field">
              <input
                className="form_input"
                type="text"
                placeholder=" "
                value={award.title}
                onChange={(e) =>
                  handleAwardInputChange(index, "title", e.target.value)
                }
              />
              <label for="name" className="form-label">
                Giải thưởng
              </label>
            </div>
          </div>
        ))}
      </>
    );
  };
  const addContentAction = () => {
    return (
      <>
        {active.map((active, index) => (
          <div className="content_form" style={{ marginTop: "30px" }}>
            <div className="addition">
              <i
                class="fa-regular fa-square-plus mr-1"
                onClick={handleAddAct}
              ></i>
              <i
                class="fa-regular fa-square-minus"
                onClick={() => handleRemoveAct(index)}
              ></i>
            </div>
            <div key={index} className="form-field" style={{ display: "flex" }}>
              <div style={{ width: "100%" }}>
                <input
                  className="form_input2"
                  type="text"
                  placeholder="Hoạt động"
                  value={active.title}
                  onChange={(e) =>
                    handleActInputChange(index, "title", e.target.value)
                  }
                />
                <input
                  className="form_input3"
                  type="text"
                  placeholder="Thời gian"
                  value={active.time}
                  onChange={(e) =>
                    handleActInputChange(index, "time", e.target.value)
                  }
                />
              </div>
            </div>
            <div key={index} className="form-field">
              <input
                className="form_input"
                style={{ border: "none" }}
                type="text"
                placeholder=" "
                value={active.desc}
                onChange={(e) =>
                  handleActInputChange(index, "desc", e.target.value)
                }
              />
              <label for="name" className="form-label">
                Mô tả hoạt động
              </label>
            </div>
          </div>
        ))}
      </>
    );
  };
  const addContentEducation = () => {
    return (
      <>
        {education.map((education, index) => (
          <div className="content_form" style={{ marginTop: "30px" }}>
            <div className="addition">
              <i
                class="fa-regular fa-square-plus mr-1"
                onClick={handleAddEdu}
              ></i>
              <i
                class="fa-regular fa-square-minus"
                onClick={() => handleRemoveEdu(index)}
              ></i>
            </div>
            <div key={index} className="form-field">
              <table className="edu_form">
                <tr>
                  <td>
                    <input
                      className="form_input"
                      type="text"
                      placeholder="Học vấn"
                      value={education.school}
                      onChange={(e) =>
                        handleEduInputChange(index, "school", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form_input"
                      type="text"
                      placeholder="Niên khóa"
                      value={education.time}
                      onChange={(e) =>
                        handleEduInputChange(index, "time", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form_input"
                      type="text"
                      placeholder="Xếp loại"
                      value={education.rank}
                      onChange={(e) =>
                        handleEduInputChange(index, "rank", e.target.value)
                      }
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        ))}
      </>
    );
  };
  const addContentExp = () => {
    return (
      <>
        {exp.map((exp, index) => (
          <div className="content_form" style={{ marginTop: "30px" }}>
            <div className="addition">
              <i
                class="fa-regular fa-square-plus mr-1"
                onClick={handleAddExp}
              ></i>
              <i
                class="fa-regular fa-square-minus"
                onClick={() => handleRemoveExp(index)}
              ></i>
            </div>
            <div key={index} className="form-field">
              <input
                className="exp_input"
                type="text"
                placeholder="1900 - 2001"
                value={exp.time}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleExpInputChange(index, "time", e.target.value)
                }
              />
              <input
                className="exp_input"
                type="text"
                placeholder="Chức vụ"
                value={exp.position}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleExpInputChange(index, "position", e.target.value)
                }
              />
              <input
                className="exp_input"
                type="text"
                placeholder="Công ty"
                value={exp.company}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleExpInputChange(index, "company", e.target.value)
                }
              />
              <h6>Mô tả công việc :</h6>
              <textarea
                // rows={rows}
                className="exp_input"
                id="exp_input"
                placeholder="Mô tả công việc"
                style={{
                  border: "none",
                  width: "100%",
                  overflow: "hidden",
                }}
                value={exp.description}
                onChange={(e) => {
                  handleExpInputChange(index, "description", e.target.value, e);
                }}
                // onKeyDown={(e) => {
                //   handleKeyDown(index, "description", e.target.value, e);
                // }}

                minRows={1}
                maxRows={6}
              />
            </div>
          </div>
        ))}
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(education);
    let resume = {
      resume_name: "Intern Software",
      education: "DTU",
      education_year: "2019-2022",
      education_major: "Software Engineering",
      education_description: "GPA: 3.4",
      certificate: "Code gym PHP",
      template: 1,
      image: "",
      experience_project: [
        {
          project_name: "CAPSTONE 1",
          responsibility: "_AI developer _Backend developer",
          achievement: "1st hacker rank",
          experience_start: "2010",
          experience_end: "2022",
        },
        {
          project_name: "CAPSTONE 2",
          responsibility: "_AI developer _Backend developer product owner",
          achievement: "1st Leet code",
          experience_start: "2022",
          experience_end: "2023",
        },
      ],
      experience_company: [
        {
          company_name: "CAPSTONE 1",
          position: "_AI developer _Backend developer",
          achievement: "1st hacker rank",
          experience_start: "2010",
          experience_end: "2022",
        },
        {
          company_name: "CAPSTONE 2",
          position: "_AI developer _Backend developer product owner",
          achievement: "1st Leet code",
          experience_start: "2022",
          experience_end: "2023",
        },
      ],
      skills: [1, 2],
    };
    let object = {};
    object.resume = resume;
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    axios
      .post("http://127.0.0.1:8000/api/candidate/create-cv", object, config)
      .then((res) => {
        console.log(res.data);
        if (res.data.errCode == 0) {
          alert("Update succesful");
        }
      });
    console.log(resume);
  };
  return (
    <>
      <div className="container-fluid d-flex" style={{ padding: "0" }}>
        <form
          className="container-fluid d-flex"
          action=""
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
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
                      style={{
                        fontSize: 12,
                        color: "#fff",
                        paddingTop: "10px",
                      }}
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
              <div className="col-7">
                <section className="experience">
                  <h3>
                    <i className="fa-solid fa-briefcase" /> Kinh nghiệm làm việc
                  </h3>
                  {/* <div className="additions">
                  <i class="fa-regular fa-square-plus mr-1"></i>
                  <i class="fa-regular fa-square-minus"></i>
                </div> */}
                  {exp.length > 0 ? (
                    addContentExp()
                  ) : (
                    <div className="content_form" onClick={handleAddExp}>
                      <div id="content-suggest-award"></div>
                      <i className="fa-solid fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h3>
                    <i className="fa-solid fa-graduation-cap" />
                    Học vấn
                  </h3>
                  {education.length > 0 ? (
                    addContentEducation()
                  ) : (
                    <div className="content_form" onClick={handleAddEdu}>
                      <div id="content-suggest-award"></div>
                      <i className="fa-solid fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h3>
                    <i class="fa-solid fa-dumbbell"></i> Hoạt động
                  </h3>
                  {active.length > 0 ? (
                    addContentAction()
                  ) : (
                    <div className="content_form" onClick={handleAddAct}>
                      <div id="content-suggest-award"></div>
                      <i className="fa-solid fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h3>
                    <i className="fa-solid fa-certificate" /> Chứng chỉ
                  </h3>
                  {certificate.length > 0 ? (
                    addContentCertificates()
                  ) : (
                    <div className="content_form" onClick={handleAddCer}>
                      <div id="content-suggest-award"></div>
                      <i className="fa-solid fa-plus" />
                    </div>
                  )}
                </section>
              </div>
              <div className="col-4">
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

                  {softSkill.length > 0 ? (
                    addContentSoftSkill()
                  ) : (
                    <div className="content_form" onClick={handleAddSoft}>
                      <div id="content-suggest-award"></div>
                      <i className="fa-solid fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h3>
                    <i className="fa-solid fa-medal" /> Giải thưởng
                  </h3>
                  {awards.length > 0 ? (
                    addContentAward()
                  ) : (
                    <div className="content_form" onClick={handleAddAward}>
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
          <button
            className="btn btn-primary"
            style={{ width: "20%", marginLeft: "39%", marginBottom: "30px" }}
          >
            Lưu CV
          </button>
        </form>
      </div>
    </>
  );
}
export default Test2;
