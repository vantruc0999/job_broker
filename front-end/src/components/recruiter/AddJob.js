import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderRe from "../common/Header";
import Sidebar from "./Sidebar";

const animatedComponents = makeAnimated();

const arraySkill = [
  { value: 1, label: ".NET" },
  { value: 2, label: "Java" },
  { value: 3, label: "PHP" },
  { value: 4, label: "Python" },
];
const AddJob = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    job_name: "",
    position_name: "",
    job_start_date: "",
    job_end_date: "",
    salary: "",
    job_location: "",
    language: "",
    job_requirement: "",
    job_description: "",
    benefit: "",
    job_skill: [],
  });
  const editorRequirement = useRef(null);
  const editorDescription = useRef(null);
  const editorBenefit = useRef(null);

  const callbackFunction = (childData) => {
    setJob({ ...job, job_skill: [...childData] });
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    console.log(job);
    axios
      .post("http://127.0.0.1:8000/api/recruiter/add-job", job, config)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "You have not bought any package") {
          alert(res.data.message);
          navigate("/checkout");
        } else if (res.data.message === "Job has been created successfully") {
          alert(res.data.message);
          navigate("/homeRecruiter");
        }
      });
  };
  console.log(job);
  return (
    <div>
      {/* <HeaderRe></HeaderRe>
      <Sidebar></Sidebar> */}
      <Sidebar />
      <main id="main" class="main">
        <section class="section">
          <div class="row">
            <div class="col-lg-12"></div>
            <div class="card addjob">
              <div class="card-body">
                <h5 class="card-title">Thêm tin tuyển dụng</h5>

                <form className="row g-12" style={{ fontWeight: "bold" }}>
                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Tên công việc</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_name: e.target.value });
                      }}
                    />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Vị trí tuyển dụng</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, position_name: e.target.value });
                      }}
                    />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Ngày bắt đầu</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_start_date: e.target.value });
                      }}
                    />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Ngày kết thúc</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_end_date: e.target.value });
                      }}
                    />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Lương</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          setJob({ ...job, salary: e.target.value });
                        }}
                      />
                      <span className="input-group-text">triệu</span>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Nơi làm việc</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_location: e.target.value });
                      }}
                    />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Ngôn ngữ</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, language: e.target.value });
                      }}
                    />
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Yêu cầu công việc</label>
                    <JoditEditor
                      ref={editorRequirement}
                      tabIndex={1}
                      value={job.job_requirement}
                      // onChange={(e) => setJob({ ...job, job_requirement: editor.current.value })}
                      onBlur={() =>
                        setJob((prevJob) => ({
                          ...prevJob,
                          job_requirement: editorRequirement.current.value,
                        }))
                      }
                    />
                    {/* <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_requirement: e.target.value });
                      }}
                    /> */}
                  </div>

                  <div className="col-md-12" style={{ margin: "10px 0" }}>
                    <label className="form-label">Mô tả công việc</label>
                    <JoditEditor
                      ref={editorDescription}
                      tabIndex={1}
                      value={job.job_description}
                      // onChange={(e) => setJob({ ...job, job_description: editor.current.value })}
                      onBlur={() =>
                        setJob((prevJob) => ({
                          ...prevJob,
                          job_description: editorDescription.current.value,
                        }))
                      }
                    />
                    {/* <textarea
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_description: e.target.value });
                      }}
                    /> */}
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Lợi ích</label>
                    <JoditEditor
                      ref={editorBenefit}
                      tabIndex={1}
                      value={job.benefit}
                      // onChange={(e) => setJob({ ...job, benefit: editor.current.value })}
                      onBlur={() =>
                        setJob((prevJob) => ({
                          ...prevJob,
                          benefit: editorBenefit.current.value,
                        }))
                      }
                    />
                    {/* <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setJob({ ...job, benefit: e.target.value });
                      }}
                    /> */}
                  </div>

                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <label className="form-label">Kỹ năng</label>
                    <AnimatedMulti
                      parentCallback={callbackFunction}
                    ></AnimatedMulti>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ float: "right", margin: "20px" }}
                      onClick={handleAddJob}
                    >
                      Đăng
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary"
                      style={{ float: "right", margin: "20px" }}
                    >
                      Quay lại
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

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
export default AddJob;
