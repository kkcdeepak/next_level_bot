import React from "react";
import "./ChartinkAlgo.css";
function ChartinkAlgo() {
  return (
    <section className="chartinkAlgo">
      <h3>Chartink Dashboard</h3>
      <section className="d-flex mt-3 gap-5 align-items-start">
        <article className="col-3 bg-white p-3 rounded-3">
          <div className="d-flex justify-content-between align-items-center">
            <p>Stocks List</p>
            <button className="btn btn-success">Add Stocks</button>
          </div>
          <p className="mb-0 mt-3">No items to be display add some here</p>
        </article>
        <div className="col-8">
          <section className="col-12 bg-white rounded-3 py-4">
            <button className="btn btn-outline-dark ms-3">Add Syntax</button>
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">SRNO.</th>
                  <th scope="col">SYNTAX ID</th>
                  <th scope="col">CUSTOM SYNTAX</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>no items to be display add some here</tr>
              </tbody>
            </table>
          </section>
          <section className="col-12 bg-white rounded-3 py-4 mt-5">
            <div class="d-flex flex-column px-2 pt-2">
              <div></div>
              <div></div>
              <div class="d-md-flex justify-content-between mb-3">
                <div class="d-md-flex">
                  <div class="mb-3 mb-md-0 input-group">
                    <input
                      placeholder="Search"
                      type="text"
                      class="form-control"
                    />
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
            </div>
            <button className="btn btn-outline-dark ms-3">Add Syntax</button>
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">RESPONSE</th>
                  <th scope="col">CREATE DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>no items to be display add some here</tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </section>
  );
}

export default ChartinkAlgo;
