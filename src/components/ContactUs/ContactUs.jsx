import React from 'react'
import Card from './Card'
import { MdCallMissed } from "react-icons/md";
import { BsWhatsapp, BsFillPersonFill } from "react-icons/bs";
import "./ContactUs.css"
function ContactUs() {
  return (
    <section className="ContactUs">
      <h3>Contact Us</h3>
      <p>Get in touch with us for any queries or suggestions.</p>
      <div className="d-flex justify-content-around flex-wrap mt-5">
        <Card
          icon={<MdCallMissed size={"5rem"} />}
          info={"Give us Missed call to get the Details of Algo"}
          text={"Call Now"}
          number={"080-694-51134"}
          btnName={"btn btn-danger"}
        />
        <Card
          icon={<BsWhatsapp size={"3.8rem"} />}
          info={"Whatsapp Support"}
          text={"Chat Now"}
          number={"080-694-51134"}
          btnName={"btn btn-success"}
        />
        <Card
          icon={<BsFillPersonFill size={"5rem"} />}
          info={"Direct Call and Whatsapp Founder and CEO:"}
          text={"Call Now"}
          number={"080-694-51134"}
          btnName={"btn btn-primary"}
        />
      </div>
    </section>
  );
}

export default ContactUs