import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoanFormPage from "./pages/LoanFormPage";
import LoanStatusPage from "./pages/LoanStatusPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <nav className="w-full bg-blue-600 p-4 text-white">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="/apply">Apply for Loan</Link>
            </li>
            <li>
              <Link to="/status">Loan Status</Link>
            </li>
          </ul>
        </nav>

        <div className="flex-grow flex items-center justify-center p-8">
          <Routes>
            <Route path="/apply" element={<LoanFormPage />} />
            <Route path="/status" element={<LoanStatusPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
