import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";

const ListJob = () => {
  const [suitable, setSuitable] = useState([]);
  const [jobs, setJobs] = useState([]);

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>.", jobs);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      let config = {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
    }
    axios.get("http://127.0.0.1:8000/api/jobs").then((res) => {
      setJobs(res.data.jobs);
    });
  }, []);
  console.log(suitable);

  const renderAllJob = () => {
    if (Object.keys(jobs).length > 0) {
      return jobs.map((value, key) => {
        return (
          <>
            <Link
              to={"/listJob/job/" + value.job_id}
              style={{ textDecoration: "none", margin: "5px 0" }}
              className="col-lg-6"
            >
              <div className="card mb-0">
                <div className="row g-0">
                  <div className="col-3">
                    <img
                      src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ padding: "8px" }}
                    />
                  </div>
                  <div className="col-9 urgent">
                    <div
                      className="card_body "
                      style={{
                        display: "grid",
                        marginLeft: "-10px",
                        overflow: "hidden",
                        width: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <h6
                        className="card_title"
                        style={{
                          paddingTop: "8px",
                          color: "red",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {value.job_name}
                      </h6>
                      <p className="card_text" style={{ fontSize: "12px" }}>
                        {value.company_name}
                      </p>
                      <ul
                        class="p-0"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          overflow: "hidden",
                          width: "100%",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <li
                          class="list-group-item list-group-item-action"
                          style={{
                            width: "100px",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p style={{ fontSize: "10px" }}>
                            <i class="fas fa-map-marker-alt mr-1"></i>
                            {value.job_location}
                          </p>
                        </li>
                        {/* <li class="list-group-item list-group-item-action">
                                <i class="fas fa-clock"></i> 21/05/2023
                              </li> */}
                        <li
                          class="list-group-item list-group-item-action"
                          style={{
                            width: "100px",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p style={{ fontSize: "10px" }}>
                            <i class="fas fa-dollar-sign"></i>
                            {value.salary}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );
      });
    }
  };
  const renderSuitable = () => {
    var suitableArr = [];
    if (Object.keys(suitable).length > 0) {
      if (suitable?.jobs) {
        suitableArr = suitable.jobs;
      } else {
        suitableArr = Array.from(Object.values(suitable));
      }
      // suitable && suitable.jobs &&
      console.log("aaaaaaaaaaaaaaaaaa", suitableArr);
      return suitableArr?.map((value, key) => {
        return (
          <>
            <Link
              to={"/listJob/job/" + value.job_id}
              style={{ textDecoration: "none", margin: "5px 0" }}
              className="col-lg-6"
            >
              <div className="card mb-0">
                <div className="row g-0">
                  <div className="col-3">
                    <img
                      src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ padding: "8px" }}
                    />
                  </div>
                  <div className="col-9 urgent">
                    <div
                      className="card_body "
                      style={{
                        display: "grid",
                        marginLeft: "-10px",
                        overflow: "hidden",
                        width: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <h6
                        className="card_title"
                        style={{
                          paddingTop: "8px",
                          color: "red",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {value.job_name}
                      </h6>
                      <p className="card_text" style={{ fontSize: "12px" }}>
                        {value.company_name}
                      </p>
                      <ul
                        class="p-0"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          overflow: "hidden",
                          width: "100%",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <li
                          class="list-group-item list-group-item-action"
                          style={{
                            width: "100px",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p style={{ fontSize: "10px" }}>
                            <i class="fas fa-map-marker-alt mr-1"></i>
                            {value.job_location}
                          </p>
                        </li>
                        {/* <li class="list-group-item list-group-item-action">
                                <i class="fas fa-clock"></i> 21/05/2023
                              </li> */}
                        <li
                          class="list-group-item list-group-item-action"
                          style={{
                            width: "100px",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p style={{ fontSize: "10px" }}>
                            <i class="fas fa-dollar-sign"></i>
                            {value.salary}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );
      });
    }
  };
  return (
    <div>
      <div
        className="container"
        style={{ margin: "0 auto", width: "1250px", height: "655px" }}
      >
        <div>
          <Search />
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-9">
              <div className="card">
                <div
                  className="related-job row"
                  // style={{ border: "1px solid #000" }}
                >
                  {/* <h6
                    style={{
                      fontWeight: "bold",
                      margin: "0",
                      padding: "10px 15px",
                    }}
                  >
                    VIỆC LÀM CÔNG NGHỆ THÔNG TIN TẠI ĐÀ NẴNG
                  </h6> */}
                  {/* {renderSuitable()} */}
                  {renderAllJob()}
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">Lọc</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListJob;
