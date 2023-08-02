import React from "react";

function MT4_MTWallet() {
  return (
    <section className="ms-5 mt-5 me-5">
      <h3>Api Wallets</h3>
      <section className="bg-white p-3">
        <div class="dt--top-section">
          <div class="row">
            <div class="col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center">
              <div>
                <div class="btn-group me-3">
                  <button class="power-grid-button btn  btn-danger waves-effect waves-float waves-light">
                    Delete
                  </button>
                </div>
                <div class="me-1 btn-group">
                  <button class="power-grid-button btn  btn-primary waves-effect waves-float waves-light">
                    Get Balance
                  </button>
                </div>
              </div>

              <div class="me-1">
                <div class="dropdown">
                  <button
                    class="btn btn-light dropdown-toggle waves-effect waves-float waves-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </button>
                  <ul class="dropdown-menu">
                    <li class="d-flex">
                      <div class="dropdown-item">
                        <span>XLSX</span>
                        <a class="text-black-50" href=".">
                          All{" "}
                        </a>
                        /
                        <a class="text-black-50" href=".">
                          Selected{" "}
                        </a>
                      </div>
                    </li>
                    <li class="d-flex">
                      <div class="dropdown-item">
                        <span>Csv</span>
                        <a class="text-black-50" href=".">
                          All{" "}
                        </a>
                        /
                        <a class="text-black-50" href="#.">
                          Selected{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3">
              <div class="col-12">
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
          </div>
        </div>
        <table class="table table-responsive mt-4">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">AP ID NAME</th>
              <th scope="col">ACCOUNT_TYPE</th>
              <th scope="col">BALANCE</th>
              <th scope="col">CREDIT</th>
              <th scope="col">PROFIT</th>
              <th scope="col">EQUITY</th>
              <th scope="col">MARGIN</th>
              <th scope="col">FREE_MARGIN</th>
              <th scope="col">MARGIN_LEVEL</th>
              <th scope="col">LEVERAGE</th>
              <th scope="col">CURRENCY</th>
              <th scope="col">METHOD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default MT4_MTWallet;
