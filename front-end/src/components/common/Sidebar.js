import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <i class="bi bi-circle"></i>
              <span>Quản lý tin tuyển dụng</span>
            </a>
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
