import React from "react";
import "./SamcoRealData.css"
import not_authorized from '../../assets/not-authorized.svg'

function SamcoRealData() {
  return (
    <section className="SamcoRealData">
      <h3>Samco Real Data</h3>
      <div class="misc-inner p-2 p-sm-3">
        <div class="w-100 text-center">
          <h2 class="mb-1">No Samco Api Activated! 🔐</h2>
          <p class="mb-2">
            You need to enable one samco api to view the real data.
          </p>
          <img
            class="img-fluid"
            src={not_authorized}
            alt="Not authorized page"
          />
        </div>
      </div>
    </section>
  );
}

export default SamcoRealData;
