import Logo from "../../assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";

function Test() {
  const [showForm, setShowForm] = useState([]);
  const [exp, setExp] = useState([]);
  const [education, setEducation] = useState([]);
  const [active, setActive] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [skill, setSkill] = useState([]);
  const [softSkill, setSoftSkill] = useState([]);
  const [awards, setAwards] = useState([]);
  const [language, setLanguage] = useState([]);

  const handleShow = (formId, e) => {
    setShowForm((state) => [...state, formId]);
  };

  const handleExpInput = (index, event) => {
    const value = event.target.innerText;
    const newExps = [...exp];
    newExps[index] = {
      ...newExps[index],
      [event.target.dataset.type]: value,
    };
    setExp(newExps);
  };
  const handleEduInput = (index, event) => {
    const value = event.target.innerText;
    const newEdu = [...education];
    newEdu[index] = {
      ...newEdu[index],
      [event.target.dataset.type]: value,
    };
    setEducation(newEdu);
  };
  const handleActInput = (index, event) => {
    const value = event.target.innerText;
    const newAct = [...active];
    newAct[index] = {
      ...newAct[index],
      [event.target.dataset.type]: value,
    };
    setActive(newAct);
  };
  const handleCerInput = (index, event) => {
    const value = event.target.innerText;
    const newCer = [...certificate];
    newCer[index] = {
      ...newCer[index],
      [event.target.dataset.type]: value,
    };
    setCertificate(newCer);
  };
  const handleSkillInput = ( event) => {
    let nameInput = event.target.name;
    let value = event.target.value;
    setSkill((state) => ({ ...state, [nameInput]: value }));
  };
  const handleSoftInput = (index, event) => {
    const value = event.target.innerText;
    const newSoft = [...softSkill];
    newSoft[index] = {
      ...newSoft[index],
      [event.target.dataset.type]: value,
    };
    setSoftSkill(newSoft);
  };
  const handleAwardInput = (index, event) => {
    const value = event.target.innerText;
    const newAwards = [...awards];
    newAwards[index] = {
      ...newAwards[index],
      [event.target.dataset.type]: value,
    };
    setAwards(newAwards);
  };
  const handleLangInput = (event) => {
    let nameInput = event.target.name;
    let value = event.target.value;
    setLanguage((state) => ({ ...state, [nameInput]: value }));
  };
  console.log(exp);
  console.log(education);
  console.log(active);
  console.log(certificate);
  console.log(skill);
  console.log(softSkill);
  console.log(awards);
  console.log(language);
  const handleShowIndex = (i, e) => {
    const newForm = [...showForm];
    if (newForm.length === 1) {
      if (e === 1) {
        setExp([]);
      } else if (e === 2) {
        setEducation([]);
      } else if (e === 3) {
        setActive([]);
      } else if (e === 4) {
        setCertificate([]);
      } else if (e === 5) {
        setSkill([]);
      } else if (e === 6) {
        setSoftSkill([]);
      } else if (e === 7) {
        setAwards([]);
      } else if (e === 8) {
        setLanguage([]);
      }
      setShowForm([]);
    } else {
      const formId = showForm.filter((showForm) => showForm === e);
      formId.splice(i, 1);
      if (e === 1) {
        console.log(true);
        const newExps = [...exp];
        newExps.splice(i, 1);
        setExp(newExps);
      } 
      else if (e === 2) {
        const newEdu = [...education];
        newEdu.splice(i, 1);
        setEducation(newEdu);
      }
      else if (e === 3) {
        const newAct = [...active];
        newAct.splice(i, 1);
        setActive(newAct);
      }
      else if (e === 4) {
        const newCer = [...certificate];
        newCer.splice(i, 1);
        setCertificate(newCer);
      }
      else if (e === 6) {
        const newSoft = [...softSkill];
        newSoft.splice(i, 1);
        setSoftSkill(newSoft);
      }
      else if (e === 7) {
        const newAwards = [...awards];
        newAwards.splice(i, 1);
        setAwards(newAwards);
      }
      if (formId === 1) {
        formId = "";
      }
      const formId2 = showForm.filter((showForm) => showForm != e);
      const result = formId.concat(formId2);
      setShowForm(result);
    }
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
  const addContentCertificates = (formId) => {
    const filterExp = showForm.filter((showForm) => showForm === formId);
    if (filterExp.length > 0) {
      const html = filterExp.map((index, i) => {
        return (
          <>
            <div className="content_form" style={{ marginTop: "30px" }}>
              <div className="addition">
                <i
                  class="fa-regular fa-square-plus mr-1"
                  onClick={(e) => handleShow(4, e)}
                ></i>
                <i
                  class="fa-regular fa-square-minus"
                  onClick={(e) => handleShowIndex(i, 4)}
                ></i>
              </div>
              <div className="d-flex flex-column flex-md-row">
                <div contentEditable="true" spellCheck="true" onInput={(e) => handleCerInput(i, e)}>
                  Chứng chỉ java
                </div>
              </div>
            </div>
          </>
        );
      });
      return html;
    } else {
      return null;
    }
  };
  const addContentSoftSkill = (formId) => {
    const filterExp = showForm.filter((showForm) => showForm === formId);
    if (filterExp.length > 0) {
      const html = filterExp.map((index, i) => {
        return (
          <>
            <div className="content_form" style={{ marginTop: "30px" }}>
              <div className="addition">
                <i
                  class="fa-regular fa-square-plus mr-1"
                  onClick={(e) => handleShow(6, e)}
                ></i>
                <i
                  class="fa-regular fa-square-minus"
                  onClick={(e) => handleShowIndex(i, 6)}
                ></i>
              </div>
              <div id="content-suggest-skill"></div>
              <div className="d-flex flex-column flex-md-row">
                <div contentEditable="true" spellCheck="true" onInput={(e) => handleSoftInput(i, e)}>
                  Chơi game
                </div>
              </div>
            </div>
          </>
        );
      });
      return html;
    } else {
      return null;
    }
  };
  const addContentAward = (formId) => {
    const filterExp = showForm.filter((showForm) => showForm === formId);
    if (filterExp.length > 0) {
      const html = filterExp.map((index, i) => {
        return (
          <>
            <div className="content_form" style={{ marginTop: "30px" }}>
              <div className="addition">
                <i
                  class="fa-regular fa-square-plus mr-1"
                  onClick={(e) => handleShow(7, e)}
                ></i>
                <i
                  class="fa-regular fa-square-minus"
                  onClick={(e) => handleShowIndex(i, 7)}
                ></i>
              </div>
              <div id="content-suggest-award">
                <div className="d-flex flex-column flex-md-row mt-2">
                  <div
                    contentEditable="true"
                    spellCheck="true"
                    data-type="award"
                    onInput={(e) => handleAwardInput(i, e)}
                  >
                    Nhân viên xuất sắc tại
                  </div>
                  <div
                    contentEditable="true"
                    spellCheck="true"
                    data-type="year"
                    onInput={(e) => handleAwardInput(i, e)}
                  >
                    <p>2023</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
      return html;
    } else {
      return null;
    }
  };
  const addContentAction = (formId) => {
    const filterExp = showForm.filter((showForm) => showForm === formId);
    console.log(filterExp.length);
    if (filterExp.length > 0) {
      const html = filterExp.map((index, i) => {
        return (
          <>
            <div className="content_form" style={{ marginTop: "30px" }}>
              <div className="addition">
                <i
                  class="fa-regular fa-square-plus mr-1"
                  onClick={(e) => handleShow(3, e)}
                ></i>
                <i
                  class="fa-regular fa-square-minus"
                  onClick={(e) => handleShowIndex(i, 3)}
                ></i>
              </div>
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
                    <div contentEditable="true" spellCheck="true" data-type="year" onInput={(e) => handleActInput(i, e)}>
                      <strong>Ngày hội tuyển dụng IT Việt Nam</strong>
                    </div>
                    <div className="resume-activity-desc ml-auto">
                      <div className="resume-degree-time">
                        <p
                          className="cv-editable-elem d-inline required medium-editor-element"
                          contentEditable="true"
                          spellCheck="true"
                          data-type="startday"
                          onInput={(e) => handleActInput(i, e)}
                        >
                          17/04/2023
                        </p>
                        -
                        <p
                          className="cv-editable-elem d-inline required medium-editor-element"
                          contentEditable="true"
                          spellCheck="true"
                          data-type="endday"
                          onInput={(e) => handleActInput(i, e)}
                        >
                          17/04/2023
                        </p>
                      </div>
                    </div>
                  </div>
                  <div contentEditable="true" spellCheck="true" data-type="content" onInput={(e) => handleActInput(i, e)}>
                    Diễn giả/cố vấn kỹ thuật
                  </div>
                  <div contentEditable="true" spellCheck="true" data-type="description" onInput={(e) => handleActInput(i, e)}>
                    Trả lời những câu hỏi về vị trí cũng như tổ chức mà người
                    tham dự quan tâm.
                  </div>
                </li>
              </ul>
            </div>
          </>
        );
      });
      return html;
    } else {
      return null;
    }
  };
  const addContentEducation = (formId) => {
    const filterExp = showForm.filter((showForm) => showForm === formId);
    console.log(filterExp.length);
    if (filterExp.length > 0) {
      const html = filterExp.map((index, i) => {
        console.log(i);
        return (
          <>
            <div className="content_form" style={{ marginTop: "30px" }}>
              <div className="addition">
                <i
                  class="fa-regular fa-square-plus mr-1"
                  onClick={(e) => handleShow(2, e)}
                ></i>
                <i
                  class="fa-regular fa-square-minus"
                  onClick={(e) => handleShowIndex(i, 2)}
                ></i>
              </div>
              <div className="group">
                <div className="meta">
                  <div contentEditable="true" spellCheck="true"  data-type="specialize" onInput={(e) => handleEduInput(i, e)}>
                    Quản trị kinh doanh
                  </div>
                  <div className="time" >
                    <p
                      className="summary cv-editable-elem d-inline required medium-editor-element"
                      contentEditable="true"
                      spellCheck="true"
                      data-type="startday"
                      onInput={(e) => handleEduInput(i, e)}
                    >
                      2022
                    </p>
                    -
                    <p
                      className="summary cv-editable-elem d-inline required medium-editor-element"
                      contentEditable="true"
                      spellCheck="true"
                      data-type="endday"
                      onInput={(e) => handleEduInput(i, e)}
                    >
                      2023
                    </p>
                  </div>
                </div>
                <div contentEditable="true" spellCheck="true" data-type="rating" onInput={(e) => handleEduInput(i, e)}>
                  Tốt nghiệp loại Giỏi
                </div>
              </div>
            </div>
          </>
        );
      });
      return html;
    } else {
      return null;
    }
  };
  const addContentExp = (formId) => {
    const filterExp = showForm.filter((showForm) => showForm === formId);
    if (filterExp.length > 0) {
      const html = filterExp.map((index, i) => {
        console.log(i);
        return (
          <>
            <div className="content_form" style={{ marginTop: "30px" }}>
              <div className="addition">
                <i
                  class="fa-regular fa-square-plus mr-1"
                  onClick={(e) => handleShow(1, e)}
                ></i>
                <i
                  class="fa-regular fa-square-minus"
                  onClick={(e) => handleShowIndex(i, 1)}
                ></i>
              </div>
              <div className="group">
                <div className="meta">
                  <div className="group-content">
                    <div style={{ fontWeight: 700 }} className="time">
                      <p
                        className="summary cv-editable-elem d-inline required medium-editor-element"
                        contentEditable="true"
                        spellCheck="true"
                        data-type="year1"
                        onInput={(e) => handleExpInput(i, e)}
                      >
                        2022
                      </p>
                      -
                      <p
                        className="summary cv-editable-elem d-inline required medium-editor-element"
                        contentEditable="true"
                        spellCheck="true"
                        data-type="year2"
                        onInput={(e) => handleExpInput(i, e)}
                      >
                        2023
                      </p>
                    </div>
                    <div
                      contentEditable="true"
                      spellCheck="true"
                      onInput={(e) => handleExpInput(i, e)}
                      data-type="position"
                    >
                      <p>Nhân viên kinh doanh</p>
                    </div>
                  </div>
                  <div className="upper-row title">
                    <p
                      contentEditable="true"
                      spellCheck="true"
                      onInput={(e) => handleExpInput(i, e)}
                      data-type="company"
                    >
                      Công ty CP ...&nbsp;
                    </p>
                  </div>
                </div>
                <div>
                  <h4>Nhiệm vụ:</h4>
                  <p
                    contentEditable="true"
                    spellCheck="true"
                    data-type="misson1"
                    onInput={(e) => handleExpInput(i, e)}
                  >
                    - Thực hiện các kế hoạch kinh doanh: tìm kiếm khách hàng,
                    giới thiệu sản phẩm dịch vụ, tư vấn sản phẩm và ứng dụng,
                    chăm sóc và quản lý quan hệ khách hàng.
                  </p>
                  &nbsp;
                  <p
                    contentEditable="true"
                    spellCheck="true"
                    onInput={(e) => handleExpInput(i, e)}
                    data-type="misson2"
                  >
                    - Lập kế hoạch hoạt động năm, quý, tháng, tuần để đạt được
                    mục tiêu được giao.
                  </p>
                  <p
                    contentEditable="true"
                    spellCheck="true"
                    onInput={(e) => handleExpInput(i, e)}
                    data-type="misson3"
                  >
                    - Khảo sát, nghiên cứu, đánh giá doanh thu dự kiến tại khu
                    vực quản lý. Xây dựng, kiến nghị kế hoạch kinh doanh phù
                    hợp.
                  </p>
                  <h4>Thành tích:</h4>
                  <p
                    contentEditable="true"
                    spellCheck="true"
                    onInput={(e) => handleExpInput(i, e)}
                    data-type="achivement1"
                  >
                    Qua quá trình làm việc tại Công ty cổ phần ... tôi đã đạt
                    được một số thành tích sau:
                  </p>
                  <ul>
                    <li
                      contentEditable="true"
                      spellCheck="true"
                      onInput={(e) => handleExpInput(i, e)}
                      data-type="achivement2"
                    >
                      ... Best seller 2022
                    </li>
                    <li
                      contentEditable="true"
                      spellCheck="true"
                      onInput={(e) => handleExpInput(i, e)}
                      data-type="achivement3"
                    >
                      Nhân viên xuất sắc 2022
                    </li>
                    <li
                      contentEditable="true"
                      spellCheck="true"
                      onInput={(e) => handleExpInput(i, e)}
                      data-type="achivement4"
                    >
                      Nhân viên sáng tạo
                    </li>
                    <li
                      contentEditable="true"
                      spellCheck="true"
                      onInput={(e) => handleExpInput(i, e)}
                      data-type="achivement5"
                    >
                      Dự án sale xuất sắc
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      });
      return html;
    } else {
      return null;
    }
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
                {/* <div className="additions">
                  <i class="fa-regular fa-square-plus mr-1"></i>
                  <i class="fa-regular fa-square-minus"></i>
                </div> */}
                {showForm && showForm.includes(1) ? (
                  addContentExp(1)
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
                  addContentEducation(2)
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
                  <i class="fa-solid fa-dumbbell"></i> Hoạt động
                </h3>
                {showForm && showForm.includes(3) ? (
                  addContentAction(3)
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
                  addContentCertificates(4)
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
                  addContentSoftSkill(6)
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
                  addContentAward(7)
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
      >
        Lưu CV
      </button>
    </>
  );
}
export default Test;
