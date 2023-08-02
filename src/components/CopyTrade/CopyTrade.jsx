import React from "react";
import "./CopyTrade.css"
function CopyTrade() {
  return (
    <section className="CopyTrade">
        <h3 className="mb-3">Copy Trade</h3>
      <article className="col-4 p-3 bg-white rounded-3">
        <div className="d-flex justify-content-between align-items-center">
          <p>Friend List</p>
          <button className="btn btn-success">Add Friend</button>
        </div>
        <p className="mb-0 mt-3">You have No Friends Make Some</p>
      </article>
    </section>
  );
}

export default CopyTrade;
