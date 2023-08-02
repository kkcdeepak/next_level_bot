import React from "react";
import NoResults from "../../assets/no-results.gif";
import "./FakeManagement.css"

function FakeManagement() {
  return (
    <div className="fakeManagement col-11 my-0 mx-auto mt-4">
      <h3>FakeManagement</h3>
      <img src={NoResults} alt="no results" width={"60%"} className="img-fluid my-0 mx-auto d-block"  />
    </div>
  );
}

export default FakeManagement;
