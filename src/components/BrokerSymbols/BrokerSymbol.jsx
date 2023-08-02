import React from "react";
import "./BrokerSymbol.css"
function BrokerSymbol() {
  return (
    <section className="BrokerSymbol">
      <div className="list d-flex justify-content-between flex-wrap mb-4">
        <p>5 paisa symbol</p>
        <p>Angel broking Symbol</p>
        <p>Finvasia Symbol</p>
        <p>Fyers Symbol</p>
        <p>lifl Symbol</p>
        <p>Samco Symbol</p>
        <p>Zebu Symbol</p>
        <p>Papertrading Symbol</p>
      </div>
      <div className="d-flex justify-content-around">
        <input type="text" placeholder="Search" />
        <div>
          Column:
          <select name="" id="">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <div class="table-responsive mt-5">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Exchange</th>
              <th scope="col">Name</th>
              <th scope="col">Trading Symbol</th>
              <th scope="col">Trading Symbol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>NSE</td>
              <td>SOMANYCERA</td>
              <td>SOMANYCERA-EQ</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>NSE</td>
              <td>UNIONBANK</td>
              <td>UNIONBANK-EQ</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default BrokerSymbol;
