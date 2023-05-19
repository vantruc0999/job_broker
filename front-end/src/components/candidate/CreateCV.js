import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router-dom";
import "../../assets/css/inputCV.css";
import {
  ref,
  uploadBytes,
  listAll,
  list,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../Firebase";
const animatedComponents = makeAnimated();

const arraySkill = [
  { value: 1, label: "Javascript" },
  { value: 2, label: "PHP" },
  { value: 3, label: "NodeJS" },
  { value: 4, label: "ReactJS" },
  { value: 4, label: "RUST123" },
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
  // const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [urlImage, setUrlImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errors, setErrors] = useState({
    first_name: {
      status: false,
      mesage: ''
    },
    last_name: {
      status: false,
      mesage: ''
    },
    phone: {
      status: false,
      mesage: ''
    },
    birth_day: {
      status: false,
      mesage: ''
    },
    email: {
      status: false,
      mesage: ''
    },
    hobby: {
      status: false,
      mesage: ''
    },
    activity:{
      status: false,
      mesage: ''
    },
    address: {
      status: false,
      mesage: ''
    },
    resume_name:{
      status: false,
      mesage: ''
    },
    education: {
      status: false,
      mesage: ''
    },
    education_year: {
      status: false,
      mesage: ''
    },
    education_major: {
      status: false,
      mesage: ''
    },
    education_description: {
      status: false,
      mesage: ''
    },
    certificate: {
      status: false,
      mesage: ''
    },
    template: {
      status: false,
      mesage: ''
    },
    image: {
      status: false,
      mesage: ''
    },
    experience_project: {
      status: false,
      mesage: ''
    },
    experience_company: {
      status: false,
      mesage: ''
    },
    skills: {
      status: false,
      mesage: ''
    },
  });


  const imageListRef = ref(storage, "image/");
  
  console.log(urlImage);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(">>>>>>>>>>>>>>>>>>>>>>>",file);
    // setImageUpload(file);

    const reader = new FileReader();

    console.log("oke");
    console.log(reader);
    reader.onload = () => {
      setImagePreview(reader.result);
      console.log(reader.result);
      uploadFile(file);
    };
    reader.readAsDataURL(file);
  };
  const uploadFile = async (imageUpload) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        console.log("----------------");
        console.log("3");
        console.log(snaphsot);
        console.log(imageRef);
        console.log(url);
        console.log(imageUpload);
        console.log("----------------");
        setUrlImage(url);
        setImageList((prev) => [...prev, url]);
      });
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
          console.log(url);
          setUrlImage(url);
        });
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
    axios
      .get(`http://127.0.0.1:8000/api/candidate/get-candidate-infor`, config)
      .then((res) => {
        // setSummary(res.data);
        setInputs({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          address: res.data.address,
          birth_day: res.data.birth_day,
          email: res.data.email,
          phone: res.data.phone,
          namecv: res.data.first_name,
        });
      });
  }, []);

  const handleInput = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
    setSummary((state) => ({ ...state, [nameInput]: value }));
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
      experience_start: item.timestart,
      experience_end: item.timeend,
    };
  });
  let experience_project = active.map((item) => {
    return {
      project_name: item.company,
      responsibility: item.position,
      achievement: item.description,
      experience_start: item.timestart,
      experience_end: item.timeend,
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
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",exp);
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
            <div
              className="addition"
              style={{ cursor: "pointer", fontSize: "18px" }}
            >
              <i class="fa fa-minus" onClick={() => handleRemoveCer(index)}></i>
              <i class="fa fa-plus mr-1" onClick={handleAddCer}></i>
            </div>
            <div key={index} className="form-field">
              <input
              required='required'
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
            <div
              className="addition"
              style={{ cursor: "pointer", fontSize: "18px" }}
            >
              <i
                class="fa fa-minus"
                onClick={() => handleRemoveSoft(index)}
              ></i>
              <i class="fa fa-plus mr-1" onClick={handleAddSoft}></i>
            </div>
            <div key={index} className="form-field">
              <input
              required='required'
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
            <div
              className="addition"
              style={{ cursor: "pointer", fontSize: "18px" }}
            >
              <i
                class="fa fa-minus"
                onClick={() => handleRemoveAward(index)}
              ></i>
              <i class="fa fa-plus mr-1" onClick={handleAddAward}></i>
            </div>
            <div key={index} className="form-field">
              <input
              required='required'
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
            <div
              className="addition"
              style={{ cursor: "pointer", fontSize: "18px" }}
            >
              <i class="fa fa-minus" onClick={() => handleRemoveAct(index)}></i>
              <i class="fa fa-plus mr-1" onClick={handleAddAct}></i>
            </div>
            <div key={index} className="form-field">
              <div style={{ display: "flex" }}>
                <input
                required='required'
                  className="exp_input"
                  type="text"
                  placeholder="Thời gian bắt đầu"
                  value={exp.timestart}
                  style={{ border: "none" }}
                  onChange={(e) =>
                    handleActInputChange(index, "timestart", e.target.value)
                  }
                />
                <input
                required='required'
                  className="exp_input"
                  type="text"
                  placeholder="Thời gian kết thúc "
                  value={exp.timeend}
                  style={{ border: "none" }}
                  onChange={(e) =>
                    handleActInputChange(index, "timeend", e.target.value)
                  }
                />
              </div>
              <input
              required='required'
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
              required='required'
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
            <div
              className="addition"
              style={{ cursor: "pointer", fontSize: "18px" }}
            >
              <i class="fa fa-minus" onClick={() => handleRemoveEdu(index)}></i>
              <i class="fa fa-plus mr-1" onClick={handleAddEdu}></i>
            </div>
            <div key={index} className="form-field">
              <table className="edu_form">
                <tr>
                  <td>
                    <input
                    required='required'
                      className="form_input"
                      type="text"
                      placeholder="Trường học"
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
                    required='required'
                      className="form_input"
                      type="text"
                      placeholder="Ngành học"
                      value={education.school}
                      onChange={(e) =>
                        handleEduInputChange(index, "school", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                    required='required'
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
                    required='required'
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
    console.log("exp", exp);
    return (
      <>
        {exp.map((exp, index) => (
          <div className="content_form" style={{ marginTop: "30px" }}>
            <div
              className="addition"
              style={{ cursor: "pointer", fontSize: "18px" }}
            >
              <i class="fa fa-minus" onClick={() => handleRemoveExp(index)}></i>
              <i class="fa fa-plus mr-1" onClick={handleAddExp}></i>
            </div>
            <div key={index} className="form-field">
              <div style={{ display: "flex" }}>
                <input
                required='required'
                  className="exp_input"
                  type="text"
                  placeholder="Thời gian bắt đầu"
                  value={exp.timestart}
                  style={{ border: "none" }}
                  onChange={(e) =>
                    handleExpInputChange(index, "timestart", e.target.value)
                  }
                />
                <input
                required='required'
                  className="exp_input"
                  type="text"
                  placeholder="Thời gian kết thúc "
                  value={exp.timeend}
                  style={{ border: "none" }}
                  onChange={(e) =>
                    handleExpInputChange(index, "timeend", e.target.value)
                  }
                />
              </div>
              <input
              required='required'
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
              required='required'
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

  // console.log(inputs);
  const handleSubmit = (e) => {
    let flag = true
    let errors = {
      first_name: {
        status: false,
        mesage: ''
      },
      last_name: {
        status: false,
        mesage: ''
      },
      phone: {
        status: false,
        mesage: ''
      },
      birth_day: {
        status: false,
        mesage: ''
      },
      email: {
        status: false,
        mesage: ''
      },
      hobby: {
        status: false,
        mesage: ''
      },
      activity:{
        status: false,
        mesage: ''
      },
      address: {
        status: false,
        mesage: ''
      },
      resume_name:{
        status: false,
        mesage: ''
      },
      education: {
        status: false,
        mesage: ''
      },
      education_year: {
        status: false,
        mesage: ''
      },
      education_major: {
        status: false,
        mesage: ''
      },
      education_description: {
        status: false,
        mesage: ''
      },
      certificate: {
        status: false,
        mesage: ''
      },
      template: {
        status: false,
        mesage: ''
      },
      image: {
        status: false,
        mesage: ''
      },
      experience_project: {
        status: false,
        mesage: ''
      },
      experience_company: {
        status: false,
        mesage: ''
      },
      skills: {
        status: false,
        mesage: ''
      },
    }

    let resume = {
      first_name: inputs?.first_name,
      last_name: inputs?.last_name,
      phone: inputs?.phone,
      birth_day: inputs?.birth_day,
      email: inputs?.email,
      hobby: softSkill[0]?.title,
      activity: awards[0]?.title,
      address: inputs?.address,
      resume_name: inputs.namecv,
      education: education[0]?.school,
      education_year: education[0]?.time,
      education_major: education[0]?.specialize,
      education_description: education[0]?.rank,
      certificate: certificate[0]?.title,
      template: 1,
      image: urlImage,
      experience_project: experience_project,
      experience_company: experience_company,
      skills: skill?.job_skill,
    };

    if(!resume.first_name){
      setErrors({...errors, first_name: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.last_name){
      setErrors({...errors, last_name: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.phone){
      setErrors({...errors, phone: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.birth_day){
      setErrors({...errors, birth_day: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.email){
      setErrors({...errors, email: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.hobby){
      setErrors({...errors, hobby: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.activity){
      setErrors({...errors, activity: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.resume_name){
      setErrors({...errors, resume_name: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.address){
      setErrors({...errors, address: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.education){
      setErrors({...errors, education: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.education_year){
      setErrors({...errors, education_year: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.education_major){
      setErrors({...errors, education_major: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.education_description){
      setErrors({...errors, education_description: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.certificate){
      setErrors({...errors, certificate: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.template){
      setErrors({...errors, template: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.image){
      setErrors({...errors, image: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.experience_project){
      setErrors({...errors, experience_project: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.experience_company){
      setErrors({...errors, experience_company: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.first_name){
      setErrors({...errors, first_name: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }
    if(!resume.skills){
      setErrors({...errors, skills: {
        status: true,
        message: 'Không được để trống trường này'
      }})
      flag = false
    }

    // console.log(typeof experience_project);
    e.preventDefault();
    if(!flag) {
      return
    } else {
      setErrors({
        first_name: {
          status: false,
          mesage: ''
        },
        last_name: {
          status: false,
          mesage: ''
        },
        phone: {
          status: false,
          mesage: ''
        },
        birth_day: {
          status: false,
          mesage: ''
        },
        email: {
          status: false,
          mesage: ''
        },
        hobby: {
          status: false,
          mesage: ''
        },
        activity:{
          status: false,
          mesage: ''
        },
        address: {
          status: false,
          mesage: ''
        },
        resume_name:{
          status: false,
          mesage: ''
        },
        education: {
          status: false,
          mesage: ''
        },
        education_year: {
          status: false,
          mesage: ''
        },
        education_major: {
          status: false,
          mesage: ''
        },
        education_description: {
          status: false,
          mesage: ''
        },
        certificate: {
          status: false,
          mesage: ''
        },
        template: {
          status: false,
          mesage: ''
        },
        image: {
          status: false,
          mesage: ''
        },
        experience_project: {
          status: false,
          mesage: ''
        },
        experience_company: {
          status: false,
          mesage: ''
        },
        skills: {
          status: false,
          mesage: ''
        },
      })
    }
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
          navigate("/allCV");
        }
        // console.log(res.data.status);
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
                    {/* <img
                      src={Logo}
                      alt=""
                      style={{
                        maxWidth: "220px",
                        height: "220px",
                        borderRadius: "50%",
                      }}
                    /> */}
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt=""
                        style={{
                          maxWidth: "220px",
                          height: "220px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <img
                        src={Logo}
                        alt=""
                        style={{
                          maxWidth: "220px",
                          height: "220px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <div className="round">
                      <input
                      required='required'
                        name="avatar"
                        type="file"
                        className="form-control"
                        id="avatar"
                        multiple
                        // onChange={(e) => {
                        //   setImageUpload(e.target.files[0]);
                        // }}
                        onChange={handleImageUpload}
                      />
                      <i className="fa fa-camera" style={{ color: "#fff" }}></i>
                    </div>
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
                        required='required'
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
                        required='required'
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
                        required='required'
                          type="text"
                          placeholder="yyyy-mm-dd"
                          name="birth_day"
                          value={inputs.birth_day}
                          onChange={handleInput}
                          style={{ width: "60%" }}
                        />
                      </div>
                      <div className="mt-4">
                        <i className="fas fa-map-marker-alt mr-2" />
                        <input
                        required='required'
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
                  <div style={{ display: "inline-block" }}>
                    <input
                    required='required'
                      type="text"
                      placeholder="Tên CV "
                      value={inputs.namecv}
                      name="namecv"
                      onChange={handleInput}
                      style={{ padding: "5px", border: "none", color: "#000" }}
                    />
                    {errors.first_name.status && <span style={{ color: "red"}}>{errors.first_name.mesage}</span>}
                    <input
                    required='required'
                      type="text"
                      placeholder="Vị trí mong muốn"
                      value={inputs.position}
                      name="position"
                      onChange={handleInput}
                      style={{ padding: "5px", border: "none", color: "#000" }}
                    />
                  </div>
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
            Lưu CV
          </button>
        </form>
      </div>
    </>
  );
}
const AnimatedMulti = (props) => {
  const sendData = (selected) => {
    setSkillSelected(selected);
    props.parentCallback(selected.map((skill) => skill.value));
  };
  const [skillSelected, setSkillSelected] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
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
  }, []);

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
export default CreateCV;
