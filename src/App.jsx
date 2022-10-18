import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardNav from "./pages/dashboard/DashboardNav";

// members dashboard panels
import MemberSidePanel from "./pages/dashboard/members/MemberSidePanel";
import MemberStat from "./pages/dashboard/members/MemberStat";
import MemberDashboard from "./pages/dashboard/members/MemberDashboard";
// members dashboard contents
import MemberProfile from "./pages/dashboard/members/MemberProfile";
import MemberTransactions from "./pages/dashboard/members/MemberTransactions";
import MemberWallet from "./pages/dashboard/members/MemberWallet";

import CashIn from "./pages/dashboard/members/wallet/CashIn";
import CashOut from "./pages/dashboard/members/wallet/CashOut";
import Invest from "./pages/dashboard/members/wallet/Invest";

import VACDashboard from "./pages/dashboard/admin/VACDashboard";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import ConfirmTransaction from "./pages/dashboard/admin/ConfirmTransaction";
import AdminMembers from "./pages/dashboard/admin/AdminMembers";

import Edit from "./pages/dashboard/members/Edit";
import Update from "./pages/dashboard/members/Update";
import Delete from "./pages/dashboard/members/Delete";
import Admin from "./pages/dashboard/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        {/* Main Pages*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Members Dashboard Panels */}
        <Route path="/dashboardnav" element={<DashboardNav />} />
        <Route path="/sidepanel" element={<MemberSidePanel />} />
        <Route path="/memberdashboard" element={<MemberDashboard />} />
        <Route path="/memberwallet" element={<MemberWallet />} />

        {/* Member Dashboard Content */}
        <Route path="/memberstat" element={<MemberStat />} />
        <Route path="/memberprofile" element={<MemberProfile />} />
        <Route path="/membertransactions" element={<MemberTransactions />} />
        {/* Members Wallet Operations */}
        <Route path="/memberwallet/cashin" element={<CashIn />} />
        <Route path="/memberwallet/cashout" element={<CashOut />} />
        <Route path="/memberwallet/invest" element={<Invest />} />

        {/*Admin Members Action Pages */}
        <Route path="/edit" element={<Edit />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />

        <Route path="/vacdashboard" element={<VACDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/confirmtransaction" element={<ConfirmTransaction />} />
        <Route path="/adminmembers" element={<AdminMembers />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
