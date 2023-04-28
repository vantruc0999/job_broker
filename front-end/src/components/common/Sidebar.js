import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <Link to="recruiter/job">
              <a class="nav-link " href="/">
                <i class="bi bi-circle"></i>
                <span>Quản lý tin tuyển dụng</span>
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <i class="bi bi-circle"></i>
              <span>Mua gói dịch vụ</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <i class="bi bi-circle"></i>
              <span>Chưa biết đặt tên</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;