import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Members from "./pages/dashboard/Members";
import SidePanel from "./pages/dashboard/SidePanel";
import MainStats from "./pages/dashboard/MainStats";
import DashboardNav from "./pages/dashboard/DashboardNav";
import MainDashboard from "./pages/dashboard/MainDashboard";
import VACDashboard from "./pages/adminPanel/VACDashboard";
import AdminDashboard from "./pages/adminPanel/AdminDashboard";
import ConfirmTransaction from "./pages/adminPanel/ConfirmTransaction";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        {/* Landing Page - Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/members" element={<Members />} />
        <Route path="/sidepanel" element={<SidePanel />} />
        <Route path="/mainstat" element={<MainStats />} />
        <Route path="/dashboardnav" element={<DashboardNav />} />
        <Route path="/maindashboard" element={<MainDashboard />} />
        <Route path="/vacdashboard" element={<VACDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/confirmtransaction" element={<ConfirmTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
