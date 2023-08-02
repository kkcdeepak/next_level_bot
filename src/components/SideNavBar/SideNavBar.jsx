import {
  AiOutlineHome,
  AiOutlinePaperClip,
  AiOutlineQuestionCircle,
  AiOutlineShareAlt,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { BiCoinStack, BiDollar, BiUpload } from "react-icons/bi";
import { BsBox, BsCart, BsFileEarmark, BsGlobe } from "react-icons/bs";
import { FiGitPullRequest, FiLifeBuoy, FiSettings } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuDollarSign, LuPocket } from "react-icons/lu";
import {
  MdMoving,
  MdOutlineMailOutline,
  MdSignalCellularAlt,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSideNavState } from "../../redux/sideNavSlice";
import "./SideNavBar.css";

//this array is to store the previously selected h4 tag this will
//help us to remove the .active class from the previous one and give to new one
const ACTIVE_NAV_ITEM = [];

function SideNavBar() {
  const dispatch = useDispatch();
  //event delegation handler
  const handleClick = (e) => {
    if (e.target.tagName === "H4") {
      e.target.classList.add("active");
      ACTIVE_NAV_ITEM.push(e.target);

      if (ACTIVE_NAV_ITEM.length > 1) {
        ACTIVE_NAV_ITEM[0].classList.remove("active");
        ACTIVE_NAV_ITEM.shift();
      }
    }
  };

  const handleNavInvincibleLayer = (e) => {
    if (e.target.id === "nav-invincible-layer") dispatch(setSideNavState());
  };

  const isSideNavVisible = useSelector(
    (store) => store.SideNavSlice.isSideNavVisible
  );

  return (
    <section
      id="nav-invincible-layer"
      className={`${isSideNavVisible && "nav-responsive"}`}
      onClick={(e) => handleNavInvincibleLayer(e)}
    >
      <nav className="ps-3 p-1 bg-white side-navigation" onClick={handleClick}>
        <div className="mb-4 text-center fs-2">Algo Trading</div>
        <div className="side-na__list">
          <h4 className="fs-6 mb-2 fw-normal  d-flex align-items-center  gap-2">
            <AiOutlineHome /> Home
          </h4>
          <Link to={"/"}>
            <h4 className="fs-6 mb-5 fw-normal  d-flex align-items-center  gap-2">
              <FiSettings /> Dashboard
            </h4>
          </Link>

          <h6 className="small opacity-75 mb-4">FEATURES</h6>
          <Link to={"/paper-trading"}>
            <h4 className="fs-6 mb-2 fw-normal  d-flex align-items-center  gap-2">
              <AiOutlinePaperClip /> Paper Trading V2
            </h4>
          </Link>

          <div className="accordion" id="nav-accordion">
            <div className="accordion-item">
              <h2
                className="accordion-header mb-2 fw-normal  d-flex align-items-center  gap-2"
                id="headingOne"
              >
                <BiDollar size={"20px"} />
                <button
                  className="accordion-button text-black bg-white fs-6"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Memberships
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show "
                aria-labelledby="headingOne"
                data-bs-parent="#nav-accordion"
              >
                <div className="accordion-body ps-3">
                  <Link to={"/memberships/brokers-plan"}>
                    <h4 className="fs-6 mb-2 fw-normal  d-flex align-items-center  gap-2">
                      <LuDollarSign size={"15px"} /> Brokers Plan
                    </h4>
                  </Link>
                  <Link to={"/memberships/mt4-and-mt5-plan"}>
                    <h4 className="fs-6 mb-2 fw-normal d-flex align-items-center gap-2">
                      <LuDollarSign size={"15px"} /> MT4 and MT5 Plan
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/M2M(Beta)"}>
            <h4 className="fs-6 mb-2 fw-normal  d-flex align-items-center  gap-2">
              <FiGitPullRequest /> M2M (Beta)
            </h4>
          </Link>
          <Link to={"/fake-management"}>
            <h4 className="fs-6 mb-2 fw-normal  d-flex align-items-center  gap-2">
              <FiGitPullRequest /> Fake Management
            </h4>
          </Link>

          <div className="accordion" id="nav-accordion">
            <div className="accordion-item">
              <h2
                className="accordion-header mb-2 fw-normal  d-flex align-items-center  gap-2"
                id="headingTwo"
              >
                <ImStack size={"20px"} />
                <button
                  className="accordion-button text-black bg-white fs-6"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Feature And Logs
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show "
                aria-labelledby="headingTwo"
                data-bs-parent="#nav-accordion"
              >
                <div className="accordion-body ps-3">
                  <Link to={"/features-and-logo/chartink-algo"}>
                    <h4 className="fs-6 mb-2  fw-normal  d-flex align-items-center  gap-2">
                      <MdMoving size={"15px"} /> Chartink Algo
                    </h4>
                  </Link>
                  <Link to={"/features-and-logo/order-table"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <BsFileEarmark size={"15px"} /> Order Table
                    </h4>
                  </Link>
                  <Link to={"/features-and-logo/copy-trade"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <AiOutlineShareAlt size={"15px"} /> Copy Trade
                    </h4>
                  </Link>
                  <Link to={"/features-and-logo/trade-logs"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <BiCoinStack size={"15px"} /> Trade Logs
                    </h4>
                  </Link>
                  <Link to={"/features-and-logo/samco-real-data"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <FiLifeBuoy size={"15px"} /> Samco Real Data
                    </h4>
                  </Link>
                  <Link to={"/features-and-logo/mt4-mt5-wallet"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <LuPocket size={"15px"} /> MT4 and MT5 Wallet
                    </h4>
                  </Link>
                  <Link to={"/features-and-logo/global-position"}>
                    <h4 className="fs-6 mb-2   fw-normal d-flex align-items-center gap-2">
                      <BsGlobe size={"15px"} /> Global Position
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="nav-accordion">
            <div className="accordion-item">
              <h2
                className="accordion-header mb-2 fw-normal  d-flex align-items-center  gap-2"
                id="headingThree"
              >
                <AiOutlineThunderbolt size={"20px"} />
                <button
                  className="accordion-button text-black bg-white fs-6"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Indicator
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show "
                aria-labelledby="headingThree"
                data-bs-parent="#nav-accordion"
              >
                <div className="accordion-body ps-3 ">
                  <Link to={"/indicator/sell-your-indicator"}>
                    <h4 className="fs-6 mb-2  fw-normal  d-flex align-items-center  gap-2">
                      <MdSignalCellularAlt size={"15px"} /> Sell Your Indicator
                    </h4>
                  </Link>
                  <Link to={"/"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <BsCart size={"15px"} /> Indicator Store
                    </h4>
                  </Link>
                  <Link to={"/indicator/NLB-Indicators"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <MdSignalCellularAlt size={"15px"} /> NLB Indicator
                    </h4>
                  </Link>
                  <Link to={"/indicator/my-indicator-access"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <MdSignalCellularAlt size={"15px"} /> My Indicator Access
                    </h4>
                  </Link>
                  <Link to={"/indicator/indicator-invoices"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <LiaFileInvoiceSolid size={"15px"} /> Indicator Invoices
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="nav-accordion">
            <div className="accordion-item">
              <h2
                className="accordion-header mb-2 fw-normal  d-flex align-items-center  gap-2"
                id="headingFour"
              >
                <BsGlobe size={"20px"} />
                <button
                  className="accordion-button text-black bg-white fs-6"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  Tool And Help
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse show "
                aria-labelledby="headingFour"
                data-bs-parent="#nav-accordion"
              >
                <div className="accordion-body ps-3">
                  <Link to={"/syntax-generator"}>
                    <h4 className="fs-6 mb-2  fw-normal  d-flex align-items-center  gap-2">
                      <BsBox size={"15px"} /> Syntax Generator
                    </h4>
                  </Link>
                  <Link to={"/broker-symbol"}>
                    <h4 className="fs-6 mb-2  fw-normal d-flex align-items-center gap-2">
                      <BiUpload size={"15px"} /> Broker Symbols
                    </h4>
                  </Link>
             
                </div>
              </div>
            </div>
          </div>
          <h6 className="small opacity-75 mb-4 mt-5">SUPPORT</h6>
          <Link to={"/contact-us"}>
            <h4 className="fs-6 mb-2 fw-normal  d-flex align-items-center  gap-2">
              <MdOutlineMailOutline /> Contact Us
            </h4>
          </Link>

          <Link to={"/faq"}>
            <h4 className="fs-6 mb-2 fw-normal d-flex align-items-center  gap-2">
              <AiOutlineQuestionCircle /> FAQ
            </h4>
          </Link>
        
        </div>
      </nav>
    </section>
  );
}

export default SideNavBar;
