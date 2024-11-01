import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoanFormPage from "./pages/LoanFormPage";
import LoanStatusPage from "./pages/LoanStatusPage";
import DashboardPage from "./pages/DashboardPage";
import AdminPage from "./pages/AdminPage";
import UserProfilePage from "./pages/UserProfilePage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import LoanCalculatorPage from "./pages/LoanCalculatorPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <nav className="w-full p-4 text-white bg-blue-600">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/apply">Apply for Loan</Link>
            </li>
            <li>
              <Link to="/status">Loan Status</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
            <li>
              <Link to="/profile">User Profile</Link>
            </li>
            <li>
              <Link to="/transactions">Transaction History</Link>
            </li>
            <li>
              <Link to="/calculator">Loan Calculator</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center flex-grow p-8">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/apply" element={<LoanFormPage />} />
            <Route path="/status" element={<LoanStatusPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/transactions" element={<TransactionHistoryPage />} />
            <Route path="/calculator" element={<LoanCalculatorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
