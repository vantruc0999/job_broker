function AdminIndex(){
    return(
        <>
            <div className="main-content">
  {/* header area start */}
  <div className="header-area">
    <div className="row align-items-center">
      {/* nav and search button */}
      <div className="col-md-6 col-sm-8 clearfix">
        <div className="nav-btn pull-left">
          <span />
          <span />
          <span />
        </div>
        <div className="search-box pull-left">
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              required=""
            />
            <i className="ti-search" />
          </form>
        </div>
      </div>
      {/* profile info & task notification */}
      <div className="col-md-6 col-sm-4 clearfix">
        <ul className="notification-area pull-right">
          <li id="full-view">
            <i className="ti-fullscreen" />
          </li>
          <li id="full-view-exit">
            <i className="ti-zoom-out" />
          </li>
          <li className="dropdown">
            <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
              <span>2</span>
            </i>
            <div className="dropdown-menu bell-notify-box notify-box">
              <span className="notify-title">
                You have 3 new notifications <a href="#">view all</a>
              </span>
              <div className="nofity-list">
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <i className="ti-key btn-danger" />
                  </div>
                  <div className="notify-text">
                    <p>You have Changed Your Password</p>
                    <span>Just Now</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <i className="ti-comments-smiley btn-info" />
                  </div>
                  <div className="notify-text">
                    <p>New Commetns On Post</p>
                    <span>30 Seconds ago</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <i className="ti-key btn-primary" />
                  </div>
                  <div className="notify-text">
                    <p>Some special like you</p>
                    <span>Just Now</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <i className="ti-comments-smiley btn-info" />
                  </div>
                  <div className="notify-text">
                    <p>New Commetns On Post</p>
                    <span>30 Seconds ago</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <i className="ti-key btn-primary" />
                  </div>
                  <div className="notify-text">
                    <p>Some special like you</p>
                    <span>Just Now</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <i className="ti-key btn-danger" />
                  </div>
                  <div className="notify-text">
                    <p>You have Changed Your Password</p>
                    <span>Just Now</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <i className="ti-key btn-danger" />
                  </div>
                  <div className="notify-text">
                    <p>You have Changed Your Password</p>
                    <span>Just Now</span>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <i
              className="fa fa-envelope-o dropdown-toggle"
              data-toggle="dropdown"
            >
              <span>3</span>
            </i>
            <div className="dropdown-menu notify-box nt-enveloper-box">
              <span className="notify-title">
                You have 3 new notifications <a href="#">view all</a>
              </span>
              <div className="nofity-list">
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img
                      src="assets/images/author/author-img1.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="notify-text">
                    <p>Aglae Mayer</p>
                    <span className="msg">Hey I am waiting for you...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img
                      src="assets/images/author/author-img2.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="notify-text">
                    <p>Aglae Mayer</p>
                    <span className="msg">When you can connect with me...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img
                      src="assets/images/author/author-img3.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="notify-text">
                    <p>Aglae Mayer</p>
                    <span className="msg">I missed you so much...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img
                      src="assets/images/author/author-img4.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="notify-text">
                    <p>Aglae Mayer</p>
                    <span className="msg">
                      Your product is completely Ready...
                    </span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img
                      src="assets/images/author/author-img2.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="notify-text">
                    <p>Aglae Mayer</p>
                    <span className="msg">Hey I am waiting for you...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img
                      src="assets/images/author/author-img1.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="notify-text">
                    <p>Aglae Mayer</p>
                    <span className="msg">Hey I am waiting for you...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img
                      src="assets/images/author/author-img3.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="notify-text">
                    <p>Aglae Mayer</p>
                    <span className="msg">Hey I am waiting for you...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="settings-btn">
            <i className="ti-settings" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* header area end */}
  {/* page title area start */}
  <div className="page-title-area">
    <div className="row align-items-center">
      <div className="col-sm-6">
        <div className="breadcrumbs-area clearfix">
          <h4 className="page-title pull-left">Dashboard</h4>
          <ul className="breadcrumbs pull-left">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Dashboard</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 clearfix">
        <div className="user-profile pull-right">
          <img
            className="avatar user-thumb"
            src="assets/images/author/avatar.png"
            alt="avatar"
          />
          <h4 className="user-name dropdown-toggle" data-toggle="dropdown">
            Kumkum Rai <i className="fa fa-angle-down" />
          </h4>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Message
            </a>
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <a className="dropdown-item" href="#">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* page title area end */}
  <div className="main-content-inner">
    {/* sales report area start */}
    <div className="sales-report-area mt-5 mb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="single-report mb-xs-30">
            <div className="s-report-inner pr--20 pt--30 mb-3">
              <div className="icon">
                <i className="fa fa-btc" />
              </div>
              <div className="s-report-title d-flex justify-content-between">
                <h4 className="header-title mb-0">Bitcoin</h4>
                <p>24 H</p>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <h2>$ 4567809,987</h2>
                <span>- 45.87</span>
              </div>
            </div>
            <canvas id="coin_sales1" height={100} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-report mb-xs-30">
            <div className="s-report-inner pr--20 pt--30 mb-3">
              <div className="icon">
                <i className="fa fa-btc" />
              </div>
              <div className="s-report-title d-flex justify-content-between">
                <h4 className="header-title mb-0">Bitcoin Dash</h4>
                <p>24 H</p>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <h2>$ 4567809,987</h2>
                <span>- 45.87</span>
              </div>
            </div>
            <canvas id="coin_sales2" height={100} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-report">
            <div className="s-report-inner pr--20 pt--30 mb-3">
              <div className="icon">
                <i className="fa fa-eur" />
              </div>
              <div className="s-report-title d-flex justify-content-between">
                <h4 className="header-title mb-0">Euthorium</h4>
                <p>24 H</p>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <h2>$ 4567809,987</h2>
                <span>- 45.87</span>
              </div>
            </div>
            <canvas id="coin_sales3" height={100} />
          </div>
        </div>
      </div>
    </div>
    {/* sales report area end */}
    {/* overview area start */}
    <div className="row">
      <div className="col-xl-9 col-lg-8">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="header-title mb-0">Overview</h4>
              <select className="custome-select border-0 pr-3">
                <option selected="">Last 24 Hours</option>
                <option value={0}>01 July 2018</option>
              </select>
            </div>
            <div id="verview-shart" />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 coin-distribution">
        <div className="card h-full">
          <div className="card-body">
            <h4 className="header-title mb-0">Coin Distribution</h4>
            <div id="coin_distribution" />
          </div>
        </div>
      </div>
    </div>
    {/* overview area end */}
    {/* market value area start */}
    <div className="row mt-5 mb-5">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-sm-flex justify-content-between align-items-center">
              <h4 className="header-title mb-0">Market Value And Trends</h4>
              <select className="custome-select border-0 pr-3">
                <option selected="">Last 24 Hours</option>
                <option value={0}>01 July 2018</option>
              </select>
            </div>
            <div className="market-status-table mt-4">
              <div className="table-responsive">
                <table className="dbkit-table">
                  <tbody>
                    <tr className="heading-td">
                      <td className="mv-icon">Logo</td>
                      <td className="coin-name">Coin Name</td>
                      <td className="buy">Buy</td>
                      <td className="sell">Sells</td>
                      <td className="trends">Trends</td>
                      <td className="attachments">Attachments</td>
                      <td className="stats-chart">Stats</td>
                    </tr>
                    <tr>
                      <td className="mv-icon">
                        <img
                          src="assets/images/icon/market-value/icon1.png"
                          alt="icon"
                        />
                      </td>
                      <td className="coin-name">Dashcoin</td>
                      <td className="buy">
                        30%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-down.png"
                          alt="icon"
                        />
                      </td>
                      <td className="sell">
                        20%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-up.png"
                          alt="icon"
                        />
                      </td>
                      <td className="trends">
                        <img
                          src="assets/images/icon/market-value/trends-up-icon.png"
                          alt="icon"
                        />
                      </td>
                      <td className="attachments">$ 56746,857</td>
                      <td className="stats-chart">
                        <canvas id="mvaluechart" />
                      </td>
                    </tr>
                    <tr>
                      <td className="mv-icon">
                        <div className="mv-icon">
                          <img
                            src="assets/images/icon/market-value/icon2.png"
                            alt="icon"
                          />
                        </div>
                      </td>
                      <td className="coin-name">LiteCoin</td>
                      <td className="buy">
                        30%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-down.png"
                          alt="icon"
                        />
                      </td>
                      <td className="sell">
                        20%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-up.png"
                          alt="icon"
                        />
                      </td>
                      <td className="trends">
                        <img
                          src="assets/images/icon/market-value/trends-down-icon.png"
                          alt="icon"
                        />
                      </td>
                      <td className="attachments">$ 56746,857</td>
                      <td className="stats-chart">
                        <canvas id="mvaluechart2" />
                      </td>
                    </tr>
                    <tr>
                      <td className="mv-icon">
                        <div className="mv-icon">
                          <img
                            src="assets/images/icon/market-value/icon3.png"
                            alt="icon"
                          />
                        </div>
                      </td>
                      <td className="coin-name">Euthorium</td>
                      <td className="buy">
                        30%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-down.png"
                          alt="icon"
                        />
                      </td>
                      <td className="sell">
                        20%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-up.png"
                          alt="icon"
                        />
                      </td>
                      <td className="trends">
                        <img
                          src="assets/images/icon/market-value/trends-up-icon.png"
                          alt="icon"
                        />
                      </td>
                      <td className="attachments">$ 56746,857</td>
                      <td className="stats-chart">
                        <canvas id="mvaluechart3" />
                      </td>
                    </tr>
                    <tr>
                      <td className="mv-icon">
                        <div className="mv-icon">
                          <img
                            src="assets/images/icon/market-value/icon4.png"
                            alt="icon"
                          />
                        </div>
                      </td>
                      <td className="coin-name">Bitcoindash</td>
                      <td className="buy">
                        30%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-down.png"
                          alt="icon"
                        />
                      </td>
                      <td className="sell">
                        20%{" "}
                        <img
                          src="assets/images/icon/market-value/triangle-up.png"
                          alt="icon"
                        />
                      </td>
                      <td className="trends">
                        <img
                          src="assets/images/icon/market-value/trends-up-icon.png"
                          alt="icon"
                        />
                      </td>
                      <td className="attachments">$ 56746,857</td>
                      <td className="stats-chart">
                        <canvas id="mvaluechart4" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* market value area end */}
    {/* row area start */}
    <div className="row">
      {/* Live Crypto Price area start */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title">Live Crypto Price</h4>
            <div className="cripto-live mt-5">
              <ul>
                <li>
                  <div className="icon b">b</div> Bitcoin
                  <span>
                    <i className="fa fa-long-arrow-up" />
                    $876909.00
                  </span>
                </li>
                <li>
                  <div className="icon l">l</div> Litecoin
                  <span>
                    <i className="fa fa-long-arrow-up" />
                    $29780.00
                  </span>
                </li>
                <li>
                  <div className="icon d">d</div> Dashcoin
                  <span>
                    <i className="fa fa-long-arrow-up" />
                    $13276.00
                  </span>
                </li>
                <li>
                  <div className="icon b">b</div> Bitcoindash
                  <span>
                    <i className="fa fa-long-arrow-down" />
                    $5684.890
                  </span>
                </li>
                <li>
                  <div className="icon e">e</div> Euthorium
                  <span>
                    <i className="fa fa-long-arrow-down" />
                    $3890.98
                  </span>
                </li>
                <li>
                  <div className="icon t">b</div> Tcoin
                  <span>
                    <i className="fa fa-long-arrow-up" />
                    $750.789
                  </span>
                </li>
                <li>
                  <div className="icon b">b</div> Bitcoin
                  <span>
                    <i className="fa fa-long-arrow-up" />
                    $325.037
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Live Crypto Price area end */}
      {/* trading history area start */}
      <div className="col-lg-8 mt-sm-30 mt-xs-30">
        <div className="card">
          <div className="card-body">
            <div className="d-sm-flex justify-content-between align-items-center">
              <h4 className="header-title">Trading History</h4>
              <div className="trd-history-tabs">
                <ul className="nav" role="tablist">
                  <li>
                    <a
                      className="active"
                      data-toggle="tab"
                      href="#buy_order"
                      role="tab"
                    >
                      Buy Order
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#sell_order" role="tab">
                      Sell Order
                    </a>
                  </li>
                </ul>
              </div>
              <select className="custome-select border-0 pr-3">
                <option selected="">Last 24 Hours</option>
                <option value={0}>01 July 2018</option>
              </select>
            </div>
            <div className="trad-history mt-4">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="buy_order"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <table className="dbkit-table">
                      <tbody>
                        <tr className="heading-td">
                          <td>Trading ID</td>
                          <td>Time</td>
                          <td>Status</td>
                          <td>Amount</td>
                          <td>Last Trade</td>
                        </tr>
                        <tr>
                          <td>78211</td>
                          <td>4.00 AM</td>
                          <td>Pending</td>
                          <td>$758.90</td>
                          <td>$05245.090</td>
                        </tr>
                        <tr>
                          <td>782782</td>
                          <td>4.00 AM</td>
                          <td>Pending</td>
                          <td>$77878.90</td>
                          <td>$7778.090</td>
                        </tr>
                        <tr>
                          <td>89675978</td>
                          <td>4.00 AM</td>
                          <td>Pending</td>
                          <td>$0768.90</td>
                          <td>$0945.090</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="sell_order" role="tabpanel">
                  <div className="table-responsive">
                    <table className="dbkit-table">
                      <tbody>
                        <tr className="heading-td">
                          <td>Trading ID</td>
                          <td>Time</td>
                          <td>Status</td>
                          <td>Amount</td>
                          <td>Last Trade</td>
                        </tr>
                        <tr>
                          <td>8964978</td>
                          <td>4.00 AM</td>
                          <td>Pending</td>
                          <td>$445.90</td>
                          <td>$094545.090</td>
                        </tr>
                        <tr>
                          <td>89675978</td>
                          <td>4.00 AM</td>
                          <td>Pending</td>
                          <td>$78.90</td>
                          <td>$074852945.090</td>
                        </tr>
                        <tr>
                          <td>78527878</td>
                          <td>4.00 AM</td>
                          <td>Pending</td>
                          <td>$0768.90</td>
                          <td>$65465.090</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* trading history area end */}
    </div>
    {/* row area end */}
    <div className="row mt-5">
      {/* latest news area start */}
      <div className="col-xl-6">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title">Latest News</h4>
            <div className="letest-news mt-5">
              <div className="single-post mb-xs-40 mb-sm-40">
                <div className="lts-thumb">
                  <img
                    src="assets/images/blog/post-thumb1.jpg"
                    alt="post thumb"
                  />
                </div>
                <div className="lts-content">
                  <span>Admin Post</span>
                  <h2>
                    <a href="blog.html">Sed ut perspiciatis unde omnis iste.</a>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some...
                  </p>
                </div>
              </div>
              <div className="single-post">
                <div className="lts-thumb">
                  <img
                    src="assets/images/blog/post-thumb2.jpg"
                    alt="post thumb"
                  />
                </div>
                <div className="lts-content">
                  <span>Admin Post</span>
                  <h2>
                    <a href="blog.html">Sed ut perspiciatis unde omnis iste.</a>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* latest news area end */}
      {/* exchange area start */}
      <div className="col-xl-6 mt-md-30 mt-xs-30 mt-sm-30">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title">Exchange</h4>
            <div className="exhcange-rate mt-5">
              <form action="#">
                <div className="input-form">
                  <input type="text" defaultValue="0.76834" />
                  <span>BTC</span>
                </div>
                <div className="exchange-devider">To</div>
                <div className="input-form">
                  <input type="text" defaultValue="5689.846" />
                  <span>USD</span>
                </div>
                <div className="exchange-btn">
                  <button type="submit">Exchange Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* exchange area end */}
    </div>
    {/* row area start*/}
  </div>
</div>

        </>
    )
}
export default AdminIndex