import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="card card-statistics">
        <div className="card-body statistics-body">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
              <div className="d-flex flex-row align-items-center gap-3">
                <div className="avatar rounded-circle p-2 bg-opacity-10 bg-danger text-danger">
                  <div className="avatar-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user-x feather-trending-up avatar-icon"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="18" y1="8" x2="23" y2="13"></line>
                      <line x1="23" y1="8" x2="18" y2="13"></line>
                    </svg>
                  </div>
                </div>
                <div className="my-auto">
                  <h4 className="fw-bolder mb-0">0</h4>
                  <p className="card-text font-small-3 mb-0">Plan Expire In</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
              <div className="d-flex flex-row align-items-center gap-3">
                <div className="avatar  rounded-circle p-2 bg-opacity-10 bg-danger text-danger">
                  <div className="avatar-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user-x feather-trending-up avatar-icon"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="18" y1="8" x2="23" y2="13"></line>
                      <line x1="23" y1="8" x2="18" y2="13"></line>
                    </svg>
                  </div>
                </div>
                <div className="my-auto">
                  <h4 className="fw-bolder mb-0">0</h4>
                  <p className="card-text font-small-3 mb-0">MT4-MT5 Plan</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
              <div className="d-flex flex-row flex-row align-items-center gap-3">
                <div className="avatar  rounded-circle p-2 bg-opacity-10 bg-primary text-primary">
                  <div className="avatar-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-users feather-trending-up avatar-icon"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
                <div className="my-auto">
                  <h4 className="fw-bolder mb-0">0</h4>
                  <p className="card-text font-small-3 mb-0">Total Referral</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
              <div className="d-flex flex-row flex-row align-items-center gap-3">
                <div className="avatar rounded-circle p-2 bg-opacity-10 bg-success text-success">
                  <div className="avatar-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-anchor feather-trending-up avatar-icon"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <line x1="12" y1="22" x2="12" y2="8"></line>
                      <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                    </svg>
                  </div>
                </div>
                <div className="my-auto">
                  <h4 className="fw-bolder mb-0">0</h4>
                  <p className="card-text font-small-3 mb-0">Total API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-4 col-4">
        <div className="card card-congratulation-medal">
          <div className="card-body">
            <h4>Copy Box 🎉</h4>
            <p className="card-text font-small-3">
              Click Any Button To Copy required Detail
            </p>
            <p className="card-text font-small-3 text-danger font-weight-bold">
              !! Never Share Below URL Anywhere
            </p>
            <div className="demo-inline-spacing">
              <button
                type="button"
                className="btn copy_btn btn-outline-info waves-effect waves-float waves-light button_copy"
                data-clipboard-text="harshavardhan81795@gmail.com"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-mail mr-25"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>{" "}
                Email{" "}
              </button>
              <button
                type="button"
                className="btn copy_btn btn-outline-success waves-effect waves-float waves-light button_copy"
                data-clipboard-text="https://nextlevelbot.com/register?code=64ba4a2f7ac4a"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-user-plus mr-25"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>{" "}
                Referral Url{" "}
              </button>
              <button
                type="button"
                className="btn copy_btn btn-outline-dark waves-effect waves-float waves-light button_copy"
                data-clipboard-text="https://nextlevelbot.com/chartink/bGRmcVdBbXkvMGR5cWRBZVdpMW9QcmN6UUxldlFuTEhPaWZud2dVTnhBOUdQMHBoSFQ3SzgxaXk2MnpiQVNZaw=="
              >
                Chartink Webhook
              </button>

              <button
                type="button"
                className="btn copy_btn btn-outline-dark waves-effect waves-float waves-light button_copy"
                data-clipboard-text="https://webhook.nextlevelbot.com/series/bGRmcVdBbXkvMGR5cWRBZVdpMW9QcmN6UUxldlFuTEhPaWZud2dVTnhBOUdQMHBoSFQ3SzgxaXk2MnpiQVNZaw=="
              >
                Sequence Webhook
              </button>
              <a
                href="https://nextlevelbot.com/telegrambotapi"
                className="btn btn-outline-primary "
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-send mr-25"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>{" "}
                Telegram Alert{" "}
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-send mr-25"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>{" "}
                TG Notification{" "}
              </a>
            </div>
            <img
              src="images/illustration/badge.svg"
              className="congratulation-medal"
              alt="Medal Pic"
            />
          </div>
        </div>

        <section className="basic-timeline">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">What's New</h4>
                  <a href="https://nextlevelbot.com/whats-new" className="">
                    {" "}
                    View All{" "}
                  </a>
                </div>
                <div className="card-body">
                  <ul className="timeline">
                    <li className="timeline-item">
                      <span className="timeline-point timeline-point-indicator"></span>
                      <div className="timeline-event">
                        <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                          <h6>Log v1.1: 📢Finvasia</h6>
                          <span className="timeline-event-time">
                            2022-10-05 14:55:36
                          </span>
                        </div>
                        <p></p>
                        <div>
                          &nbsp;Finvasia TOTP Auto Login Feature Updated&nbsp;
                        </div>
                        <p></p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <span className="timeline-point timeline-point-indicator"></span>
                      <div className="timeline-event">
                        <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                          <h6>Log v0.10 : 📢 Telegram Alert</h6>
                          <span className="timeline-event-time">
                            2022-07-16 22:07:40
                          </span>
                        </div>
                        <p></p>
                        <div>
                          Telegram Alert updated and all bugs fixed if you are
                          using old method then please reconnect
                        </div>
                        <p></p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <span className="timeline-point timeline-point-indicator"></span>
                      <div className="timeline-event">
                        <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                          <h6>Log v0.09 : 📢 Meta Trader (meta cloud api)</h6>
                          <span className="timeline-event-time">
                            2022-07-11 19:24:17
                          </span>
                        </div>
                        <p>
                          Now you use Pip Size with TP or SL &amp; LTP&nbsp; in
                          Meta Trader (meta cloud api) below example Syntax.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="card card-browser-states">
          <div className="card-header">
            <h4 className="card-title">Login History</h4>
            <button className="btn btn-danger btn-sm float-right logoutEverwhere waves-effect waves-float waves-light">
              {" "}
              Logout Everywhere{" "}
            </button>
          </div>
          <div className="card-body">
            <div className="browser-states">
              <div className="d-flex flex-row">
                <img
                  src="https://nextlevelbot.com/images/icons/google-chrome.png"
                  className="rounded me-1"
                  height="30"
                  alt="Google Chrome"
                />
                <h6 className="align-self-center mb-0">
                  49.37.133.231 - INDIA<p></p>
                </h6>
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-bold text-body-heading me-1">2 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    
    </section>
  );
}

export default Dashboard;
