import React from "react";
import { FiPocket } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setSideNavState } from "../../redux/sideNavSlice";
import "./NavProfile.css";

function NavProfile() {
  const dispatch = useDispatch();
  return (
    <header className="nav-profile">
      <div
        className="menu-icon btn"
        onClick={() => dispatch(setSideNavState())}
      >
        <HiMenuAlt3 size={"25px"} />
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <span className="m-2">
            <FiPocket />
          </span>
          <span className="m-2">
            <GoBell />
          </span>
        </div>
        <div className="m-3">
          <h5 className="fs-6 mb-0">Harsha</h5>
          <b className="small">ID:505446</b>
        </div>
        <div className="profile__img"></div>
      </div>
    </header>
  );
}

export default NavProfile;
