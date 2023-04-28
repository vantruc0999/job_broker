import React from "react";
// import Sidebar from "../common/sidebar";
// import HeaderRe from "../common/headerRe";
import { useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderRe from "../common/Header";
import Sidebar from "../common/Sidebar";

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
        if(res.data.message === 'You have not bought any package'){
          alert(res.data.message);
          navigate('/checkout')
        } else if(res.data.message === 'Job has been created successfully'){
          alert(res.data.message);
          navigate('/homeRecruiter')
        }
      });
  };
  return (
    <div>
      {/* <HeaderRe></HeaderRe>
      <Sidebar></Sidebar> */}
      <main id="main" class="main">
        <section class="section">
          <div class="row">
            <div class="col-lg-12"></div>
            <div class="card addjob">
              <div class="card-body">
                <h5 class="card-title">Thêm tin tuyển dụng</h5>

                <form class="row g-12">
                  <div class="col-md-6 margin">
                    <label class="form-label">Tên công việc</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_name: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Vị trí tuyển dụng</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, position_name: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Ngày bắt đầu</label>
                    <input
                      type="date"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_start_date: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Ngày kết thúc</label>
                    <input
                      type="date"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_end_date: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Lương</label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                          setJob({ ...job, salary: e.target.value });
                        }}
                      />
                      <span class="input-group-text">triệu</span>
                    </div>
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Nơi làm việc</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_location: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Ngôn ngữ</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, language: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Yêu cầu công việc</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_requirement: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-12 margin">
                    <label class="form-label">Mô tả công việc</label>
                    <textarea
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, job_description: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Lợi ích</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setJob({ ...job, benefit: e.target.value });
                      }}
                    />
                  </div>

                  <div class="col-md-6 margin">
                    <label class="form-label">Kỹ năng</label>
                    {/* <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setJob({...job, job_skill: [...job.job_skill, e.target.value]})
                    }}
                    >
                      <option value="1">JAVA</option>
                      <option value="2">PHP</option>
                      <option value="3">C#</option>
                    </select> */}
                    <AnimatedMulti
                      parentCallback={callbackFunction}
                    ></AnimatedMulti>
                  </div>

                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={handleAddJob}
                    >
                      Submit
                    </button>
                    <button type="reset" class="btn btn-secondary">
                      Reset
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
