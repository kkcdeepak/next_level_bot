import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BrokerPlan from "./components/BrokerPlan/BrokerPlan";
import ChartinkAlgo from "./components/ChartinkAlgo/ChartinkAlgo";
import CopyTrade from "./components/CopyTrade/CopyTrade";
import Dashboard from "./components/Dashboard/Dashboard";
import FAQ from "./components/FAQ/Faq";
import FakeManagement from "./components/FakeManagement/FakeManagement";
import GlobalPosition from "./components/GlobalPosition/GlobalPosition";
import IndicatorInvoices from "./components/IndicatorInvoices/IndicatorInvoices";
import M2M from "./components/M2M(beta)/M2M";
import Mt4_Mt5Plan from "./components/MT4&MT5Plan/MT4&MT5Plan";
import MT4_MTWallet from "./components/MT4&MTWallet/MT4&MTWallet";
import MyIndicatorAccess from "./components/MyIndicatorAccess/MyIndicatorAccess";
import NavProfile from "./components/NavProfile/NavProfile";
import NlbIndicator from "./components/NlbIndicator/NlbIndicator";
import OrderTable from "./components/OrderTable/OrderTable";
import PaperTrading from "./components/PaperTrading/PaperTrading";
import SamcoRealData from "./components/SamcoRealData/SamcoRealData";
import SellYourIndicator from "./components/SellYourIndicator/SellYourIndicator";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import SyntaxGenerator from "./components/SyntaxGenerator/SyntaxGenerator";
import TradeLogs from "./components/TradeLogs/TradeLogs";
import BrokerSymbol from "./components/BrokerSymbols/BrokerSymbol";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideNavBar />
        <div>
          <NavProfile />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/paper-trading" element={<PaperTrading />} />
            <Route path="/memberships/brokers-plan" element={<BrokerPlan />} />
            <Route
              path="/memberships/mt4-and-mt5-plan"
              // eslint-disable-next-line react/jsx-pascal-case
              element={<Mt4_Mt5Plan />}
            />
            <Route path="/M2M(Beta)" element={<M2M />} />
            <Route path="/fake-management" element={<FakeManagement />} />
            <Route
              path="/features-and-logo/chartink-algo"
              element={<ChartinkAlgo />}
            />
            <Route
              path="/features-and-logo/order-table"
              element={<OrderTable />}
            />
            <Route
              path="/features-and-logo/copy-trade"
              element={<CopyTrade />}
            />
            <Route
              path="/features-and-logo/trade-logs"
              element={<TradeLogs />}
            />
            <Route
              path="/features-and-logo/samco-real-data"
              element={<SamcoRealData />}
            />
            <Route
              path="/features-and-logo/mt4-mt5-wallet"
              // eslint-disable-next-line react/jsx-pascal-case
              element={<MT4_MTWallet />}
            />
            <Route
              path="/features-and-logo/global-position"
              element={<GlobalPosition />}
            />
            <Route
              path="/indicator/sell-your-indicator"
              element={<SellYourIndicator />}
            />
            <Route
              path="/indicator/nlb-indicator"
              element={<SellYourIndicator />}
            />
            <Route
              path="/indicator/NLB-Indicators"
              element={<NlbIndicator />}
            />
            <Route
              path="/indicator/my-indicator-access"
              element={<MyIndicatorAccess />}
            />
            <Route
              path="/indicator/indicator-invoices"
              element={<IndicatorInvoices />}
            />
            <Route
              path="/tool-and-help/syntax-generator"
              element={<IndicatorInvoices />}
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/syntax-generator" element={<SyntaxGenerator />} />
            <Route path="/broker-symbol" element={<BrokerSymbol />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
