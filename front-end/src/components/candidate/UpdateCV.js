import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/css/inputCV.css";

const animatedComponents = makeAnimated();


function UpdateCV() {
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
  const [language, setLanguage] = useState("");
  const [inputs, setInputs] = useState("");
  const [summary, setSummary] = useState("");

  let params = useParams();
  const [resume, setResume] = useState("");
  const [id, setId] = useState([]);
  const [info, setInfo] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };
  console.log(resume);
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/candidate/show-detail/` + params.id,
        config
      )
      .then((res) => {
        setResume(res.data);
        setExp(res.data.experience_company);
        setActive(res.data.experience_project);
        const edu2 = [
          {
            specialize: res.data.resume.education_major,
            school: res.data.resume.education,
            time: res.data.resume.education_year,
            rank: res.data.resume.education_description,
          },
        ];
        setEducation(edu2);
        const cer = [
          {
            title: res.data.resume.certificate,
          },
        ];
        setCertificate(cer);
        if(res.data.resume.activity){
          setAwards([{
            activity: res.data.resume.activity,
          }]);
        }
        if(res.data.resume.hobby){
          setSoftSkill([{
            hobby: res.data.resume.hobby,
          }]);
        }
        setInputs({
          first_name: res.data.resume.first_name,
          last_name: res.data.resume.last_name,
          address: res.data.resume.address,
          birth_day: res.data.resume.birth_day,
          email: res.data.resume.email,
          phone: res.data.resume.phone,
          resume_name: res.data.resume.resume_name,
        });
      });
  }, []);

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
  }, []);
  const handleInput = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    setSummary((state) => ({ ...state, [nameInput]: value }));
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
      company_name: item.company_name,
      position: item.position,
      achievement: item.achievement,
      experience_start: item.experience_start,
      experience_end: "2040",
    };
  });
  let experience_project = active.map((item) => {
    return {
      project_name: item.project_name,
      responsibility: item.responsibility,
      achievement: item.achievement,
      experience_start: item.experience_start,
      experience_end: "2099",
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
    console.log(softSkill);
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
          <textarea
            // rows={rows}
            className="exp_input"
            id="exp_input2"
            placeholder="Ngoại ngữ..."
            style={{
              border: "none",
              width: "100%",
              overflow: "hidden",
            }}
            value={active.achievement}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            minRows={1}
            maxRows={6}
          />
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
                value={softSkill?.hobby}
                onChange={(e) =>
                  handleSoftInputChange(index, "hobby", e.target.value)
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
                value={award?.activity}
                onChange={(e) =>
                  handleAwardInputChange(index, "activity", e.target.value)
                }
              />
              <label for="name" className="form-label">
                Hoạt động
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
              <i class="fas fa-plus mr-1" onClick={handleAddAct}></i>
              <i
                class="fas fa-minus"
                onClick={() => handleRemoveAct(index)}
              ></i>
            </div>
            <div key={index} className="form-field">
              <input
                className="exp_input"
                type="text"
                placeholder="1900 - 2001"
                value={active.experience_start}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleActInputChange(
                    index,
                    "experience_start",
                    e.target.value
                  )
                }
              />
              <input
                className="exp_input"
                type="text"
                placeholder="Vị trí"
                value={active.responsibility}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleActInputChange(index, "responsibility", e.target.value)
                }
              />
              <input
                className="exp_input"
                type="text"
                placeholder="Tên dự án"
                value={active.project_name}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleActInputChange(index, "project_name", e.target.value)
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
                value={active.achievement}
                onChange={(e) => {
                  handleActInputChange(index, "achievement", e.target.value, e);
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
                value={exp.experience_start}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleExpInputChange(
                    index,
                    "experience_start",
                    e.target.value
                  )
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
                value={exp.company_name}
                style={{ border: "none" }}
                onChange={(e) =>
                  handleExpInputChange(index, "company_name", e.target.value)
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
                value={exp.achievement}
                onChange={(e) => {
                  handleExpInputChange(index, "achievement", e.target.value, e);
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
  console.log(inputs);
  const handleSubmit = (e) => {
    e.preventDefault();
    let resume = {
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      phone: inputs.phone,
      birth_day: inputs.birth_day,
      email: inputs.email,
      address: inputs.address,
      hobby:softSkill[0].hobby,
      activity:awards[0].activity,
      resume_name: inputs.resume_name,
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
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", resume);
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
    console.log("object", object);
    axios
      .post(
        `http://127.0.0.1:8000/api/candidate/update-cv/${params.id}`,
        object,
        config
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.message == "considered") {
          alert(
            "CV đang được xem xét trong mục công việc, không thể chỉnh sửa"
          );
          // navigate("/allCV");
        } else if ((res.data.status = 200)) {
          alert("Bạn đã cập nhật thành công");
        }
        console.log(res.data);
      });
  };

  function renderResume() {
    return (
      <>
        <div className="w-100 d-flex" style={{ padding: "0" }}>
          <form
            className="w-100 d-flex"
            action=""
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="w-100" style={{ margin: "0 auto" }}>
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
                            value={inputs.email}
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
                            value={inputs.phone}
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
                            name="birth_day"
                            value={inputs.birth_day}
                            onChange={handleInput}
                            style={{ width: "60%" }}
                          />
                        </div>
                        <div className="mt-4">
                          <i className="fas fa-map-marker-alt mr-2" />
                          <input
                            type="text"
                            placeholder="Địa chỉ"
                            value={inputs.address}
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
                    {showForm && showForm.includes(5)
                      ? addSkill()
                      : addSkill()
                        // <div
                        //   className="content_form"
                        //   onClick={(e) => handleShow(5, e)}
                        //   style={{ cursor: "pointer" }}
                        // >
                        //   <div id="content-suggest-skill"></div>
                        //   <i className="fas fa-plus" />
                        // </div>
                    }
                  </section>

                  {/* <section className="experience">
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
                  </section> */}
                </div>
                <div className="col-8">
                  <section className="experience">
                    <h1 style={{ fontWeight: "700" }}>
                      {inputs.last_name} {inputs.first_name}
                    </h1>
                    <input
                      type="text"
                      placeholder="tên cv"
                      value={inputs.resume_name}
                      name="resume_name"
                      onChange={handleInput}
                      style={{ padding: "5px", border: "none", color: "#000" }}
                    />
                    <input
                      type="text"
                      placeholder="Vị trí mong muốn"
                      value={inputs.position}
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
                      <i className="fas fa-feather" /> Sở thích
                    </h4>

                    {softSkill?.length > 0 ? (
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
                      <i className="fas fa-medal" /> Hoạt động
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
              Cập nhật CV
            </button>
          </form>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div
          className="btn-group mb-20 btn-links"
          style={{ width: "100%", textAlign: "center" }}
        >
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-dashboard" /> Bảng tin
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-upload" /> Tải lên CV có sẵn
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-list-alt" /> Hoàn thiện CV
            <div
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                fontSize: 9,
                color: "white",
                borderRadius: 9,
                width: 16,
                height: 16,
                lineHeight: 16,
              }}
            >
              20
            </div>
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-default"
          >
            <i className="fa fa-exclamation-triangle" /> Sửa lỗi CV
          </a>
          <a
            href=""
            className="border-primary text-uppercase text-bold btn btn-primary"
          >
            <i className="fa fa-line-chart" /> CV của bạn
          </a>
          <a
            href=""
            target="_blank"
            className="border-primary text-uppercase text-bold btn  btn-default"
          >
            <i className="fa fa-user" /> Chọn Mẫu CV
          </a>
        </div>
        {/* cv */}
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f8f9fa", paddingBottom: "20px" }}
        >
          <div className="job_cv w-100">
            <h3 style={{ paddingTop: 20 }}>CV của bạn</h3>
            <div
              className="row justify-content-between"
              style={{ margin: "20px auto" }}
            >
              {renderResume()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const AnimatedMulti = (props) => {
  let params = useParams();
  const sendData = (selected) => {
    setSkillSelected(selected);
    props.parentCallback(selected.map((skill) => skill.value));
  };
  const [skillSelected, setSkillSelected] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    const getSkillSelect = async () => {
      let user = JSON.parse(localStorage.getItem("user"));
      let config = {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      await axios
        .get(
          `http://127.0.0.1:8000/api/candidate/show-detail/${params.id}`,
          config
        )
        .then((res) => {
          if (res.data.skill.length > 0) {
            const arraySkillSelected = res.data.skill.map((item) => {
              return { value: item.skill_id, label: item.skill_name };
            });
            setSkillSelected(arraySkillSelected);
          }
        });
    };

    const getListSkill = async () => {
      let user = JSON.parse(localStorage.getItem("user"));
      let config = {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      await axios
        .get(`http://127.0.0.1:8000/api/skills`, config)
        .then((res) => {
          if (res && res.data.length > 0) {
            console.log(">>>>>>>>", res.data);
            const arraySkill = res.data.map((item) => {
              return { value: item.skill_id, label: item.skill_name };
            });
            setSkill(arraySkill);
          }
        });
    };
    getListSkill();
    getSkillSelect();
  }, [params.id]);

  useEffect(()=> {
    sendData(skillSelected)
  }, [JSON.stringify(skillSelected)]);
  return (
    <Select
      value={[...skillSelected]}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={skill}
      onChange={sendData}
    />
  );
};

export default UpdateCV;
