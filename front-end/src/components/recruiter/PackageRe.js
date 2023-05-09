import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PayPalButton from "../payment/PaypalCheckout";

const PackageRe = () => {
  const [packageall, setPackageall] = useState("");
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
        setPackageall(res.data);
        console.log(res.data);
      });
  }, []);
  const renPackage = () => {
    if (Object.keys(packageall).length > 0) {
      return Object.keys(packageall).map((key, item) => {
        return (
          <>
            <div class="col-12 col-sm-6 col-md-3 d-flex align-items-stretch flex-column">
              <div class="card bg-light d-flex flex-fill">
                <div class="card-header text-muted border-bottom-0">
                  Mua gói dịch vụ để sử dụng
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="lead" style={{ textAlign: "center" }}>
                        <b>{packageall[key]["package_name"]}</b>
                      </h2>
                      <p class="text-muted text-sm">
                        <b>Mô tả: </b> {packageall[key]["package_description"]}
                      </p>
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small">
                          <span class="fa-li">
                            <i class="fas fa-lg fa-dollar-sign"></i>
                          </span>{" "}
                          <b>Giá: </b> {packageall[key]["price"]} USD
                        </li>
                        <li class="small">
                          <span class="fa-li">
                            <i class="fas fa-lg fa-clock"></i>
                          </span>
                          <b>Thời gian sử dụng: </b> {packageall[key]["exp_time"]} {packageall[key]["unit"]}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="text-right">
                  <PayPalButton
                      product={{
                        id: packageall[key]["package_id"],
                        description: packageall[key]["package_name"],
                        value: packageall[key]["price"],
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };
  return (
    <div>
      <Sidebar />
      <main id="main" className="main" style={{ minHeight: "665px" }}>
        <section class="content">
          <div class="card card-solid">
            <div class="card-body pb-0">
              <div class="row">
               {renPackage()}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PackageRe;
