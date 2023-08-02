import React from "react";

function Card({ icon, info, number, text, btnName }) {
  return (
    <article className="card">
      <div>{icon}</div>
      <p className="mt-3">{info}</p>
      <h3>{number}</h3>
      <button className={btnName}>{text}</button>
    </article>
  );
}

export default Card;
