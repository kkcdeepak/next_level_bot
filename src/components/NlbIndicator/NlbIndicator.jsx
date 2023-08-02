import React from 'react'
import Card from './Card'
import "./NlbIndicator.css"
import trading_1 from "../../assets/trading_1.png"
import trading_2 from "../../assets/trading_2.png";
import trading_3 from "../../assets/trading_3.png";
import trading_4 from "../../assets/trading_4.png";
import trading_5 from "../../assets/trading_5.png";

function NlbIndicator() {
  return (
    <section className="NlbIndicator">
      <h3 className="mb-4">Indicator Access</h3>
      <div className="cards-wrapper d-flex flex-wrap gap-3 align-items-start ">
        <Card
          title={"Custom Candle BreakOut ORB with Alerts [MV]"}
          imgSrc={trading_1}
        />
        <Card title={"EMA BREAKOUT WITH TP OR SL [NLB]"} imgSrc={trading_2} />
        <Card
          title={"SuperTrend With SL or TP No Repaint"}
          imgSrc={trading_3}
        />
        <Card title={"Automated with ORB"} imgSrc={trading_4} />
        <Card
          title={"SuperTrend With SL or TP No Repaint V2"}
          imgSrc={trading_5}
        />
      </div>
    </section>
  );
}

export default NlbIndicator
