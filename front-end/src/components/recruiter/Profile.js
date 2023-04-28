import React from "react";
import HeaderRe from "../common/HeaderRe";
import Sidebar from "../common/Sidebar";

const Profile = () => {
  return (
    <div>
      <HeaderRe></HeaderRe>
      <Sidebar></Sidebar>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Hồ sơ</h1>
          {/* <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item">Users</li>
      <li class="breadcrumb-item active">Profile</li>
    </ol>
  </nav> */}
        </div>

        <section class="section profile">
          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                    alt="Profile"
                    class="rounded-circle"
                  />
                  <h2>Tên người dùng</h2>
                  <h3>Tên công ty</h3>
                  <div class="social-links mt-2">
                    <a href="/" class="twitter">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="/" class="facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="/" class="instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="/" class="linkedin">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-8">
              <div class="card">
                <div class="card-body pt-3">
                  <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                        aria-selected="true"
                        role="tab"
                      >
                        Tổng quan
                      </button>
                    </li>

                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                        aria-selected="false"
                        tabindex="-1"
                        role="tab"
                      >
                        Chỉnh sửa hồ sơ
                      </button>
                    </li>

                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                        aria-selected="false"
                        tabindex="-1"
                        role="tab"
                      >
                        Thay đổi mật khẩu
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content pt-2">
                    <div
                      class="tab-pane fade show active profile-overview"
                      id="profile-overview"
                      role="tabpanel"
                    >
                      <h5 class="card-title">Chi tiết hồ sơ</h5>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label ">Họ và tên</div>
                        <div class="col-lg-9 col-md-8">Tên người dùng</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Tên công ty</div>
                        <div class="col-lg-9 col-md-8">FPT SOFTWARE</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Email</div>
                        <div class="col-lg-9 col-md-8">
                          k.anderson@example.com
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Số điện thoại</div>
                        <div class="col-lg-9 col-md-8">
                          (436) 486-3538 x29071
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                      role="tabpanel"
                    >
                      <form>
                        <div class="row mb-3">
                          <label
                            for="profileImage"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Ảnh đại diện
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <img
                              src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                              alt="Profile"
                            />

                            <div class="pt-2">
                              <a
                                href="/"
                                class="btn btn-primary btn-sm"
                                title="Upload new profile image"
                              >
                                <i class="bi bi-upload"></i>
                              </a>
                              <a
                                href="/"
                                class="btn btn-danger btn-sm"
                                title="Remove my profile image"
                              >
                                <i class="bi bi-trash"></i>
                              </a>
                            </div>

                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="fullName"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Họ và tên
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              class="form-control"
                              id="fullName"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="company"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Tên công ty
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="company"
                              type="text"
                              class="form-control"
                              id="company"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Email"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Email
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              class="form-control"
                              id="Email"
                              value="k.anderson@example.com"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Phone"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Số điện thoại
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="phone"
                              type="text"
                              class="form-control"
                              id="Phone"
                              value="(436) 486-3538 x29071"
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Lưu
                          </button>
                        </div>
                      </form>
                    </div>

                    <div
                      class="tab-pane fade pt-3"
                      id="profile-change-password"
                      role="tabpanel"
                    >
                      <form>
                        <div class="row mb-3">
                          <label
                            for="currentPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Mật khẩu cũ
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              class="form-control"
                              id="currentPassword"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="newPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Mật khẩu mới
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              class="form-control"
                              id="newPassword"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="renewPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Nhập lại mật khẩu mới
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              class="form-control"
                              id="renewPassword"
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Lưu
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
