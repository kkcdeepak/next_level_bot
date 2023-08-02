import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import "./PaperTrading.css";
function PaperTrading() {
  return (
    <>
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-11 my-0 mx-auto mt-4">
              <h2 class="content-header-title mb-0">Paper Trading</h2>
              <div class="breadcrumb-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-11 col-11 my-0 mx-auto">
          <div class="card card-statistics">
            <div class="card-body statistics-body">
              <div class="row">
                <div class="col-md-3 col-sm-6 col-6 mb-2 mb-md-0">
                  <div class="d-flex align-items-center gap-2">
                    <div class="avatar">
                      <div class="avatar-content rounded-circle p-2 bg-opacity-10 bg-primary text-primary">
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
                          class="feather feather-triangle font-medium-3"
                        >
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">0</h4>
                      <p class="card-text font-small-3 mb-0">
                        Profit &amp; Loss
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-6 mb-2 mb-md-0">
                  <div class="d-flex flex-row  align-items-center gap-2">
                    <div
                      class="avatar bg-light-info me-2"
                      //   style="height: fit-content;"
                    >
                      <div class="avatar-content  rounded-circle p-2 bg-opacity-10 bg-info text-info">
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
                          class="feather feather-target font-medium-3 "
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">0 %</h4>
                      <p class="card-text font-small-3 mb-0">
                        Profit &amp; Loss in %
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-6 mb-2 mb-sm-0">
                  <div class="d-flex flex-row  align-items-center gap-2">
                    <div
                      class="avatar bg-light-danger me-2"
                      //   style="height: fit-content;"
                    >
                      <div class="avatar-content  rounded-circle p-2 bg-opacity-10 bg-danger text-danger">
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
                          class="feather feather-octagon font-medium-3 "
                        >
                          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                        </svg>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">0</h4>
                      <p class="card-text font-small-3 mb-0">
                        Total Open Position
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-6">
                  <div class="d-flex flex-row  align-items-center gap-2">
                    <div
                      class="avatar bg-light-success me-2"
                      //   style="height: fit-content;"
                    >
                      <div class="avatar-content  rounded-circle p-2 bg-opacity-10 bg-success text-success">
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
                          class="feather feather-box font-medium-3 "
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">0</h4>
                      <p class="card-text font-small-3 mb-0">
                        Total Close Trade
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-11 my-0 mx-auto bg-white pt-3 mb-4">
        <h4 className="text-center mb-3">Open Positions</h4>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <button className="btn btn-danger me-3 ms-3">Delete</button>
            <button className="btn btn-light">
              <HiOutlineDocumentDownload />
            </button>
          </div>
          <div>
            <label class="col-12 col-sm-8">
              <div class="input-group w-100">
                <span class="input-group-text">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  class="col-12 col-sm-8 form-control"
                  placeholder="Search..."
                />
              </div>
            </label>
          </div>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" />
                </th>
                <th scope="col">API ID</th>
                <th scope="col">EXCHANGE</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">TRANSITION</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">PRICE</th>
                <th scope="col">CREATED AT</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <select class="form-select" aria-label="Default select example">
            <option selected>..</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div className="col-11 my-0 mx-auto bg-white pt-3 mb-4">
        <h4 className="text-center mb-3">Close Trade</h4>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <button className="btn btn-danger me-3 ms-3">Delete</button>
            <button className="btn btn-light">
              <HiOutlineDocumentDownload />
            </button>
          </div>
          <div>
            <label class="col-12 col-sm-8">
              <div class="input-group w-100">
                <span class="input-group-text">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  class="col-12 col-sm-8 form-control"
                  placeholder="Search..."
                />
              </div>
            </label>
          </div>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" />
                </th>
                <th scope="col">API ID</th>
                <th scope="col">EXCHANGE</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">TRANSITION</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">PRICE</th>
                <th scope="col">CREATED AT</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <select class="form-select" aria-label="Default select example">
            <option selected>..</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div className="col-11 my-0 mx-auto bg-white pt-3 mb-4">
        <h4 className="text-center mb-3">Order Table</h4>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <button className="btn btn-danger me-3 ms-3">Delete</button>
            <button className="btn btn-light">
              <HiOutlineDocumentDownload />
            </button>
          </div>
          <div>
            <label class="col-12 col-sm-8">
              <div class="input-group w-100">
                <span class="input-group-text">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  class="col-12 col-sm-8 form-control"
                  placeholder="Search..."
                />
              </div>
            </label>
          </div>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" />
                </th>
                <th scope="col">API ID</th>
                <th scope="col">EXCHANGE</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">TRANSITION</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">PRICE</th>
                <th scope="col">CREATED AT</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <select class="form-select" aria-label="Default select example">
            <option selected>..</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default PaperTrading;
