import React from "react";
import "./MyIndicatorAccess.css";
function MyIndicatorAccess() {
  return (
    <section className="MyIndicatorAccess">
      <h3>My Indicator Access</h3>
      <section className="p-3 bg-white rounded-3">
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
              <th scope="col">INDICATOR NAME</th>
              <th scope="col">TRADING ID</th>
              <th scope="col">ACCESS STATUS</th>
              <th scope="col">CREATED AT</th>
              <th scope="col">EXPIRY DATE</th>
              <th scope="col">ACTION</th>
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

export default MyIndicatorAccess;
