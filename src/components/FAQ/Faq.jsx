import React from "react";
import "./Faq.css";

function FAQ() {
  return (
    <section className="faq">
      <h3>FAQ</h3>
      <article className="faq-hero">
        <div>
          <h3>Let's answer some questions</h3>
          <small>or choose a category to quickly find the help you need</small>
          <form class="faq-search-input">
            <div class="input-group input-group-merge mt-4">
              <div class="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Search faq..."
              />
            </div>
          </form>
        </div>
      </article>
      <div class="accordion mt-5" id="accordionExample">
        <div class="accordion-item mb-4">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-1"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              how to get membership?
            </button>
          </h2>
          <div
            id="faq-1"
            class="accordion-collapse collapse show"
            aria-labelledby="faq-1"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                First create an account then go to your user dashboard then user
                dashboard in left side menu you can see Get membership page.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item mb-4">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-2"
              aria-expanded="false"
              aria-controls="faq-2"
            >
              Can we do copy trade from the broker terminal ?
            </button>
          </h2>
          <div
            id="faq-2"
            class="accordion-collapse collapse"
            aria-labelledby="faq-2"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                No but you can use our inbuilt 100% paper trading feature to
                test your any strategy. you can also call us on our support
                numbers for any help.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item mb-4">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-3"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How many APIs can we connect simultaneously ?
            </button>
          </h2>
          <div
            id="faq-3"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              There are no limits to connect API. You can add multiple account
              thru Api in one subscription, no any hidden charges. maybe in
              future we can bring some plan. you can call us for detail.
            </div>
          </div>
        </div>
        <div class="accordion-item mb-4">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-4"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Can we trade Semi or Fully Automation ?
            </button>
          </h2>
          <div
            id="faq-4"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Yes, you can do both semi algo and fully algo trading, it depends
              on your indicator or strategy also.
            </div>
          </div>
        </div>
        <div class="accordion-item mb-4">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-5"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do you automate trading from Tradingview?
            </button>
          </h2>
          <div
            id="faq-5"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              To buy and sell on your strategy or indicator on Tradingview, you
              need to create alerts and add Nextlevelbot syntax to those alerts
              for buying and selling. When your Tradingview strategy generates
              an alert, the buy and sell information associated with that alert
              is sent to your broker with the help of Nextlevelbot. To clarify
              or know in detail please call us on our support number.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
