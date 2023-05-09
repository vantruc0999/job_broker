import { Link } from "react-router-dom";
import HomeRe from "./HomeRecruiter";
function Sidebar() {
  return (
    <>
      <div>
        <aside id="sidebar" class="sidebar">
          <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
              <Link to="/manageJob">
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
            <li className="nav-item">
              <Link to="/managecan">
                <a className="nav-link " href="/">
                  <i className="bi bi-circle"></i>
                  <span>Quản lý ứng viên</span>
                </a>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
export default Sidebar;
