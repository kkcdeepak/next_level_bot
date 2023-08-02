import React from "react";

function Card({ imgSrc, title}) {
  return (
    <section className="card">
      <article>
        <img src={imgSrc} alt="..." />
        <h4 className="mt-2">{title}</h4>
        <small>by Manoj Kumar</small>
        <hr />
        <div className="d-flex  flex-column align-items-center justify-content-between gap-3">
          <button className="btn btn-danger">Request Indicator</button>
          <button className="btn btn-primary">TradingView Post</button>
        </div>
      </article>
    </section>
  );
}

export default Card;
