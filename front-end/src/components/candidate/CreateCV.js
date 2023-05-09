import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router-dom";
import "../../assets/css/inputCV.css";

const animatedComponents = makeAnimated();

const arraySkill = [
  { value: 1, label: ".NET" },
  { value: 2, label: "Java" },
  { value: 3, label: "PHP" },
  { value: 4, label: "Python" },
];
const arraySkill2 = [
  { value: 1, label: "Tiếng Anh" },
  { value: 2, label: "Tiếng Nhật" },
  { value: 3, label: "Tiếng Trung" },
  { value: 4, label: "Tiếng Nga" },
];
function CreateCV() {
  const navigate = useNavigate();
  const tx = document.getElementById("exp_input");
  if (tx) {
    tx.setAttribute(
      "style",
      "height:" +
        tx.scrollHeight +
        "px;overflow-y:hidden; width:100%;border:none "
    );
    tx.addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }

  const tx2 = document.getElementById("exp_input2");
  if (tx2) {
    tx2.setAttribute(
      "style",
      "height:" +
        tx2.scrollHeight +
        "px;overflow-y:hidden; width:100%;border:none "
    );
    tx2.addEventListener("input", OnInput2, false);
  }

  function OnInput2() {
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
  const [inputs, setInputs] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const textarea = document.getElementById("emailSummary");
    const placeholder = "Email";

    textarea.addEventListener("focus", () => {
      if (textarea.placeholder === placeholder) {
        textarea.placeholder = "";
      }
      textarea.rows = "2";
    });

    textarea.addEventListener("blur", () => {
      if (textarea.value === "") {
        textarea.placeholder = placeholder;
      }
      textarea.rows = "1";
    });
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    axios
      .get(`http://127.0.0.1:8000/api/candidate/get-candidate-infor`, config)
      .then((res) => {
        setSummary(res.data);
        console.log(summary);
      });
  }, []);
  const handleInput = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const handleAwardInputChange = (index, field, value) => {
    const newAwards = [...awards];
    newAwards[index] = {
      ...newAwards[index],
      [field]: value,
    };
    setAwards(newAwards);
  };

  let experience_company = exp.map((item) => {
    return {
      company_name: item.company,
      position: item.position,
      achievement: item.description,
      experience_start: item.time,
      experience_end: "",
    };
  });
  let experience_project = active.map((item) => {
    return {
      project_name: item.company,
      responsibility: item.position,
      achievement: item.description,
      experience_start: item.time,
      experience_end: "",
    };
  });

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

  const handleSkillInput = (childData) => {
    setSkill({ ...skill, job_skill: [...childData] });
  };
  const handleLangInput = (childData) => {
    setLanguage({ ...language, job_lang: [...childData] });
  };

  const addSkill = (e) => {
    return (
      <>
        <div className="content_form">
          <label class="form-label">Kỹ năng</label>
          <AnimatedMulti parentCallback={handleSkillInput}></AnimatedMulti>
        </div>
      </>
    );
  };
  const addLanguage = (e) => {
    return (
      <>
        <div className="content_form">
          <label class="form-label">Ngoại ngữ</label>
          <AnimatedMulti2 parentCallback={handleLangInput}></AnimatedMulti2>
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
              <i class="fa fa-plus mr-1" onClick={handleAddCer}></i>
              <i class="fa fa-minus" onClick={() => handleRemoveCer(index)}></i>
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
            <div key={index} className="form-field">
              <input
                className="exp_input"
                type="text"
                placeholder="1900 - 2001"
                value={active.time}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleActInputChange(index, "time", e.target.value)
                }
              />
              <input
                className="exp_input"
                type="text"
                placeholder="Vị trí"
                value={active.position}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleActInputChange(index, "position", e.target.value)
                }
              />
              <input
                className="exp_input"
                type="text"
                placeholder="Tên dự án"
                value={active.company}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleActInputChange(index, "company", e.target.value)
                }
              />
              <h6 style={{ marginLeft: "20px", marginTop: "15px" }}>
                Mô tả công việc :
              </h6>
              <textarea
                // rows={rows}
                className="exp_input"
                id="exp_input2"
                placeholder="Mô tả dự án"
                style={{
                  border: "none",
                  width: "100%",
                  overflow: "hidden",
                }}
                value={active.description}
                onChange={(e) => {
                  handleActInputChange(index, "description", e.target.value, e);
                }}
                minRows={1}
                maxRows={6}
              />
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
                      placeholder="Ngành học"
                      value={education.specialize}
                      onChange={(e) =>
                        handleEduInputChange(
                          index,
                          "specialize",
                          e.target.value
                        )
                      }
                    />
                  </td>
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
              <i class="fa fa-plus mr-1" onClick={handleAddExp}></i>
              <i class="fa fa-minus" onClick={() => handleRemoveExp(index)}></i>
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
              <h6 style={{ marginLeft: "20px", marginTop: "15px" }}>
                Mô tả công việc :
              </h6>
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
      education: education[0].school,
      education_year: education[0].time,
      education_major: education[0].specialize,
      education_description: education[0].rank,
      certificate: certificate[0].title,
      template: 1,
      image: "",
      experience_project: experience_project,
      experience_company: experience_company,
      skills: skill.job_skill,
    };
    console.log(typeof experience_project);
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
        if (res.data.status == "200") {
          alert("Bạn đã tạo CV thành công");
          navigate("/homeCandidate");
        }
        console.log(res.data.status);
        // if (res.data.errCode == 0) {

        //   alert("Update succesful");
        // }
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
          <div className="col-9" style={{ margin: "0 auto" }}>
            <div
              className="row"
              style={{ margin: "50px 0", boxShadow: "5px 5px 5px 5px" }}
            >
              <div
                className="col-4 "
                style={{ background: "#0bb5f4", padding: "0" }}
              >
                <div className="summary" style={{ padding: "0" }}>
                  <div className="avatar">
                    <img
                      src={Logo}
                      alt=""
                      style={{
                        maxWidth: "220px",
                        height: "220px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                    className="summary-child"
                  >
                    <div>
                      <div className="email">
                        <i
                          className="fas fa-envelope mr-2"
                          style={{ alignItems: "center" }}
                        >
                          {" "}
                        </i>

                        <input
                          id="emailSummary"
                          type="text"
                          name="email"
                          placeholder="Email"
                          rows="1"
                          value={summary.email}
                          onChange={handleInput}
                          style={{
                            width: "60%",
                            // fontSize: "14px",
                            border: "none",
                            borderRadius: "4px",
                            resize: "vertical",
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                            overflow: "hidden",
                          }}
                        ></input>
                      </div>
                      <div className="mt-4">
                        <i className="fas fa-phone mr-2" />
                        <input
                          type="text"
                          name="phone"
                          value={summary.phone}
                          placeholder="Số điện thoại"
                          onChange={handleInput}
                          style={{ width: "60%" }}
                        />
                      </div>
                      <div className="mt-4">
                        <i className="fas fa-birthday-cake mr-2" />
                        <input
                          type="text"
                          placeholder="dd-mm-yyyy"
                          name="birthday"
                          value={summary.birth_day}
                          onChange={handleInput}
                          style={{ width: "60%" }}
                        />
                      </div>
                      <div className="mt-4">
                        <i className="fas fa-map-marker-alt mr-2" />
                        <input
                          type="text"
                          placeholder="Địa chỉ"
                          value={summary.address}
                          name="address"
                          onChange={handleInput}
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <section className="experience">
                  <h4>
                    <i className="fas fa-laptop-code" /> Kỹ năng
                  </h4>
                  {showForm && showForm.includes(5) ? (
                    addSkill()
                  ) : (
                    <div
                      className="content_form"
                      onClick={(e) => handleShow(5, e)}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-skill"></div>
                      <i className="fas fa-plus" />
                    </div>
                  )}
                </section>

                <section className="experience">
                  <h4>
                    <i className="fas fa-language" /> Ngoại ngữ
                  </h4>
                  {showForm && showForm.includes(8) ? (
                    addLanguage()
                  ) : (
                    <div
                      className="content_form"
                      onClick={(e) => handleShow(8, e)}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-skill"></div>
                      <i className="fas fa-plus" />
                    </div>
                  )}
                </section>
              </div>
              <div className="col-8">
                <section className="experience">
                  <h1 style={{ fontWeight: "700" }}>
                    {summary.last_name} {summary.first_name}
                  </h1>
                  <input
                    type="text"
                    placeholder="Vị trí mong muốn"
                    value={summary.position}
                    name="position"
                    onChange={handleInput}
                    style={{ padding: "5px", border: "none", color: "#000" }}
                  />
                </section>
                <section className="experience">
                  <h4>
                    <i className="fas fa-briefcase" /> Kinh nghiệm làm việc
                  </h4>
                  {exp.length > 0 ? (
                    addContentExp()
                  ) : (
                    <div
                      className="content_form"
                      onClick={handleAddExp}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-award"></div>
                      <i className="fas fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h4>
                    <i className="fas fa-graduation-cap" />
                    Học vấn
                  </h4>
                  {education.length > 0 ? (
                    addContentEducation()
                  ) : (
                    <div
                      className="content_form"
                      onClick={handleAddEdu}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-award"></div>
                      <i className="fas fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h4>
                    <i class="fas fa-file-code"></i> Dự án
                  </h4>
                  {active.length > 0 ? (
                    addContentAction()
                  ) : (
                    <div
                      className="content_form"
                      onClick={handleAddAct}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-award"></div>
                      <i className="fas fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h4>
                    <i className="fas fa-certificate" /> Chứng chỉ
                  </h4>
                  {certificate.length > 0 ? (
                    addContentCertificates()
                  ) : (
                    <div
                      className="content_form"
                      onClick={handleAddCer}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-award"></div>
                      <i className="fas fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h4>
                    <i className="fas fa-feather" /> Kĩ năng mềm
                  </h4>

                  {softSkill.length > 0 ? (
                    addContentSoftSkill()
                  ) : (
                    <div
                      className="content_form"
                      onClick={handleAddSoft}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-award"></div>
                      <i className="fas fa-plus" />
                    </div>
                  )}
                </section>
                <section className="experience">
                  <h4>
                    <i className="fas fa-medal" /> Giải thưởng
                  </h4>
                  {awards.length > 0 ? (
                    addContentAward()
                  ) : (
                    <div
                      className="content_form"
                      onClick={handleAddAward}
                      style={{ cursor: "pointer" }}
                    >
                      <div id="content-suggest-award"></div>
                      <i className="fas fa-plus" />
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
const AnimatedMulti = (props) => {
  const sendData = (selected) => {
    props.parentCallback(selected.map((skill) => skill.value));
  };
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={arraySkill}
      onChange={sendData}
    />
  );
};

const AnimatedMulti2 = (props) => {
  const sendData = (selected) => {
    props.parentCallback(selected.map((language) => language.value));
  };
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={arraySkill2}
      onChange={sendData}
    />
  );
};

export default CreateCV;
