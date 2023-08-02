import React from "react";
import "./SellYourIndicator.css";
function SellYourIndicator() {
  return (
    <section className="SellYourIndicator">
      <h3>Indicator Panel</h3>
      <section className="bg-white p-3 rounded-3">
        <div className="my-2">
          <button className="btn btn-primary">Add</button>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <label>
              <div className="input-group w-100">
                <span className="input-group-text">
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
                  className="col-12 col-sm-8 form-control"
                  placeholder="Search..."
                />
              </div>
            </label>
          </div>
        </div>
        <table class="table mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">INDICATOR TITLE</th>
              <th scope="col">INDICATOR STATUS</th>
              <th scope="col">CREATED AT</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">no records found</th>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="bg-white mt-5 p-3 rounded-3">
        <div class="d-md-flex justify-content-between mb-3">
          <div class="d-md-flex">
            <div class="mb-3 mb-md-0 input-group">
              <input placeholder="Search" type="text" class="form-control" />
            </div>
          </div>

          <div class="d-md-flex">
            <div class="mb-3 mb-md-0 md-0 ms-md-2">
              <div class="dropdown d-block d-md-inline">
                <button
                  class="btn dropdown-toggle d-block w-100 d-md-inline waves-effect waves-float waves-light"
                  type="button"
                  id="columnSelect-table"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Columns{" "}
                </button>

                <div class="dropdown-menu dropdown-menu-end w-100">
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" />
                      <span class="ml-2">All Columns</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="id" />
                      <span class="ml-2">id</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="user-id" />
                      <span class="ml-2">User Id</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="user-email" />
                      <span class="ml-2">User Email</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="indicator-name" />
                      <span class="ml-2">Indicator Name</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="tradingview-id" />
                      <span class="ml-2">Tradingview Id</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="access-status" />
                      <span class="ml-2">Access Status</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="activated-date" />
                      <span class="ml-2">Activated Date</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-0">
                      <input type="checkbox" value="created-at" />
                      <span class="ml-2">Created At</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="ms-0 ms-md-2">
              <select id="perPage" class="form-control">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">USER ID</th>
              <th scope="col">USER EMAIL</th>
              <th scope="col">INDICATOR_NAME</th>
              <th scope="col">TRADING_VIEW_ID</th>
              <th scope="col">ACTIVATED_DATE</th>
              <th scope="col">CREATED_AT</th>
            </tr>
          </thead>
          <tbody>
            <th scope="row">No items found. Try to broaden your search.</th>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default SellYourIndicator;
