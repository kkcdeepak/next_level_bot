import React from "react";

function M2M() {
  return (
    <section className="col-11 my-0 mx-auto mt-3">
      <h4>Money Management {"(! Beta Testing)"}</h4>
      <div className="bg-white py-3 px-3">
        <div class="d-md-flex justify-content-between mb-3">
          <div class="d-md-flex">
            <div class="mb-3 mb-md-0 input-group">
              <input placeholder="Search" type="text" class="form-control" />
            </div>
          </div>

          <div class="d-md-flex">
            <button
              class="btn add-new btn-primary  w-100  mr-1  waves-effect waves-float waves-light"
              type="button"
            >
              Add
            </button>

            <div class="ms-0 ms-md-2">
              <select
                id="perPage"
                class="form-control"
                style={{ width: "45px" }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">BROKER</th>
                <th scope="col">API_ID</th>
                <th scope="col">SYNTAX</th>
                <th scope="col">IT</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">EXCHANGE</th>
                <th scope="col">PRODUCT</th>
                <th scope="col">PROFIT</th>
                <th scope="col">LOSS</th>
                <th scope="col">RUN_COUNT</th>
                <th scope="col">GAIN</th>
                <th scope="col">GAIN_AT</th>
                <th scope="col">LAST_TRIGGER</th>
                <th scope="col">ADDED_AT</th>
                <th scope="col">ERROR_COUNT</th>
                <th scope="col">UPDATED_AT</th>
              </tr>
            </thead>
            <tbody>No items found.</tbody>
          </table>
        </div>
      </div>
      <div className="bg-white py-3 px-3 mt-5">
        <div class="d-md-flex justify-content-between mb-3">
          <div class="d-md-flex">
            <div class="mb-3 mb-md-0 input-group">
              <input placeholder="Search" type="text" class="form-control" />
            </div>
          </div>

          <div class="d-md-flex">
            <button
              class="btn add-new btn-primary  w-100  mr-1  waves-effect waves-float waves-light"
              type="button"
            >
              Add
            </button>

            <div class="ms-0 ms-md-2">
              <select
                id="perPage"
                class="form-control"
                style={{ width: "45px" }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">BROKER</th>
                <th scope="col">API_ID</th>
                <th scope="col">SYNTAX</th>
                <th scope="col">IT</th>
                <th scope="col">SYMBOL</th>
                <th scope="col">EXCHANGE</th>
                <th scope="col">PRODUCT</th>
                <th scope="col">PROFIT</th>
                <th scope="col">LOSS</th>
                <th scope="col">RUN_COUNT</th>
                <th scope="col">GAIN</th>
                <th scope="col">GAIN_AT</th>
                <th scope="col">LAST_TRIGGER</th>
                <th scope="col">ADDED_AT</th>
                <th scope="col">ERROR_COUNT</th>
                <th scope="col">UPDATED_AT</th>
              </tr>
            </thead>
            <tbody>No items found.</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default M2M;
     