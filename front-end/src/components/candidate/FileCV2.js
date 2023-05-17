import React from "react";

const FileCV2 = () => {
  return (
    <div>
      <article class="resume">
        <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <header
            class="resume-header pt-4 pt-md-0"
            style={{ background: "#434E5E" }}
          >
            <div class="media flex-column flex-md-row">
              <div>
                <img
                  src="https://i.ibb.co/V9w0tqm/image.jpg"
                  alt="image"
                  border="0"
                  width="220"
                  height="220"
                />
              </div>
              <img
                class="mr-3 img-fluid picture mx-auto"
                src="assets/images/фотощька.jpg"
                alt=""
              />
              <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0 resume_content">
                <div class="primary-info">
                  <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                    Nguyễn Kim Thắng
                  </h1>
                  <div class="title mb-3">Developer</div>
                </div>
                <div class="secondary-info ml-md-auto mt-2">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <div>
                        <i class="fas fa-map-marker-alt fa-fw mr-2"></i>
                        Đà Nẵng
                      </div>
                    </li>
                    <li className="mb-2">
                      <div>
                        <i class="fas fa-phone fa-fw mr-2"></i>
                        +7 925 383 46 24
                      </div>
                    </li>
                    <li class="mb-2">
                      <div>
                        <i class="far fa-envelope fa-fw mr-2"></i>
                        zveryanovstanis@gmail.com
                      </div>
                    </li>
                    <li class="mb-2">
                      <div>
                        <i class="fas fa-birthday-cake fa-fw mr-2"></i>
                        2001/00/00
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div class="resume-body p-5">
            <section class="resume-section summary-section mb-5">
              <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                Giới thiệu
              </h2>
              <div class="resume-section-content">
                <p class="mb-0">
                  Tôi là một chuyên viên phát triển phần mềm với hơn 10 năm tại
                  các công ty trong và ngoài nước. Công việc của tôi cả về lập
                  trình front-end lẫn back-end. Mong muốn được làm việc trong
                  môi trường chuyên nghiệp, đồng nghiệp thân thiện và chế độ
                  phúc lợi tốt.
                </p>
              </div>
            </section>
            <div class="row">
              <div class="col-lg-9">
                <section class="resume-section experience-section mb-5">
                  <div class="resume-section-content">
                    <div class="resume-timeline position-relative">
                      <article class="resume-timeline-item position-relative pb-5 resume_item2 ">
                        <div class="resume-timeline-item-header mb-2">
                          <div class="d-flex flex-column flex-md-row">
                            <h3 class="resume-position-title font-weight-bold mb-1">
                              Kinh nghiệm làm việc công ty
                            </h3>
                          </div>
                        </div>
                        <div class="resume-timeline-item-desc resume_work">
                          <ul>
                            <li>
                              <div className="date">2022-2023</div>
                              <div className="info">
                                <p className="semi-bold">Tên công ty: FPT</p>
                                <p>Nhiệm vụ: Nhân viên</p>
                                <p>Mô tả: Đạt tốt</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="resume-timeline-item position-relative pb-5 resume_item2">
                        <div class="resume-timeline-item-header mb-2">
                          <div class="d-flex flex-column flex-md-row">
                            <h3 class="resume-position-title font-weight-bold mb-1">
                              Kinh nghiệm làm việc dự án
                            </h3>
                          </div>
                        </div>
                        <div class="resume-timeline-item-desc resume_work">
                          <ul>
                            <li>
                              <div className="date">2022-2023</div>
                              <div className="info">
                                <p className="semi-bold">
                                  Tên dự án: Đào tạo sinh viên
                                </p>
                                <p>Vị trí: Nhân viên</p>
                                <p>Mô tả: Đạt tốt</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="resume-timeline-item position-relative pb-5 resume_item2">
                        <div class="resume-timeline-item-header mb-2">
                          <div class="d-flex flex-column flex-md-row">
                            <h3 class="resume-position-title font-weight-bold mb-1">
                              Giáo dục
                            </h3>
                          </div>
                        </div>
                        <div class="resume-timeline-item-desc resume_work">
                          <ul>
                            <li>
                              <div className="date"></div>
                              <div className="info">
                                <p className="semi-bold">Trường học:</p>
                                <p>Ngành học: </p>
                                <p>Niên khóa: </p>
                                <p>Xếp loại: </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article class="resume-timeline-item position-relative pb-5 resume_item2">
                        <div class="resume-timeline-item-header mb-2">
                          <div class="d-flex flex-column flex-md-row">
                            <h3 class="resume-position-title font-weight-bold mb-1">
                              Chứng chỉ ngoại ngữ
                            </h3>
                          </div>
                        </div>
                        <div class="resume-timeline-item-desc resume_work">
                          <ul>
                            <li>
                              <div className="date">Chứng chỉ: TOEIC 500</div>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-lg-3">
                <section class="resume-section skills-section mb-5">
                  <div class="resume-section-content">
                    <div class="resume-skill-item resume_item2 resume_skills">
                      <h4 class="resume-skills-cat font-weight-bold">
                        Các kỹ năng
                      </h4>
                      <ul class="list-unstyled mb-4 resume_work2">
                        <li class="mb-2">JAVA</li>
                        <li class="mb-2">REACT</li>
                      </ul>
                    </div>

                    <div class="resume-skill-item resume_item2 resume_skills">
                      <h4 class="resume-skills-cat font-weight-bold">
                        Sở thích
                      </h4>
                      <ul class="list-unstyled">
                        <li class="mb-2">Học</li>
                        <li class="mb-2">Hát</li>
                      </ul>
                    </div>

                    <div class="resume-skill-item resume_item2 resume_skills">
                      <h4 class="resume-skills-cat font-weight-bold">
                        Giải thưởng
                      </h4>
                      <ul class="list-inline">
                        <li class="mb-2">Khuyến khích</li>
                        <li class="mb-2">Giải nhì</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FileCV2;
