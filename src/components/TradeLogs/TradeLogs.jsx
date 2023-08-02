import React from "react";
import "./TradeLogs.css";
function TradeLogs() {
  return (
    <section className="TradeLogs">
      <h3>Trade Log</h3>{" "}
      <div class="d-flex flex-column p-3 rounded-3 bg-white">
        <div></div>
        <div></div>
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
                  class="btn dropdown-toggle d-block w-100 d-md-inline"
                  type="button"
                  id="columnSelect-table"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Columns{" "}
                </button>

                <div
                  class="dropdown-menu dropdown-menu-end w-100"
                  aria-labelledby="columnSelect-table"
                >
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" />
                      <span class="ml-2">All Columns</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-1">
                      <input type="checkbox" value="response" />
                      <span class="ml-2">Response</span>
                    </label>
                  </div>
                  <div>
                    <label class="px-2 mb-0">
                      <input type="checkbox" value="create-date" />
                      <span class="ml-2">Create Date</span>
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">VIEW MORE</th>
              <th scope="col">REQUEST_ID</th>
              <th scope="col">REQUEST_DATA</th>
              <th scope="col">IN_TIME</th>
              <th scope="col">OUT_TIME</th>
              <th scope="col">TIME_TAKEN</th>
            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TradeLogs;
