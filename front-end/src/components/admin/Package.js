import "../../assets/css/adminlte.min.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddPackage from "./AddPackage";
function Package() {
  const [packageall, setPackageall] = useState("");

  const [product, setProduct] = useState("");

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let config = {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    axios
      .get("http://127.0.0.1:8000/api/recruiter/package", config)
      .then((res) => {
        console.log(res.data);
        setPackageall(res.data);
      });
  }, []);

  const renderPackage = () => {
    if (Object.keys(packageall).length > 0) {
      return packageall.map((value, item) => {
        return (
          <>
            <tbody>
              <tr>
                <td>{value.package_name}</td>
                <td>{value.package_description}</td>
                <td>{value.price}</td>
                <td>{value.exp_time} Năm</td>
                <td className="text-right py-0 align-middle">
                  <div className="btn-group btn-group-sm">
                    <a href="#" className="btn btn-info">
                      <i className="fas fa-eye" />
                    </a>
                    <a href="/" className="btn btn-primary">
                      <i className="fas fa-edit" />
                    </a>
                    <a href="#" className="btn btn-danger">
                      <i className="fas fa-trash" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </>
        );
      });
    }
  };
  return (
    <>
      <div classname="content-wrapper" style={{ minHeight: "665px" }}>
        <section className="content" style={{ float: "right", width: "83%" }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Dịch vụ</h3>
              <a className="btn btn-primary btn-sm float-right">
                <AddPackage />
              </a>
            </div>
            <div className="card-body p-0">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tên gói</th>
                    <th>Mô tả gói</th>
                    <th>Giá</th>
                    <th>Thời gian hết hạn</th>
                    <th />
                  </tr>
                </thead>
                {renderPackage()}
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
      </div>
    </>
  );
}
export default Package;
