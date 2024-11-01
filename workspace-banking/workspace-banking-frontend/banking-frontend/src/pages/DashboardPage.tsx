import React from "react";
import Dashboard from "../components/Dashboard";

const DashboardPage: React.FC = () => {
  const userName = "John Doe";
  const accountBalance = 5000.75;
  const loanCount = 3;

  return (
    <div className="max-w-2xl p-8 mx-auto">
      <Dashboard
        userName={userName}
        accountBalance={accountBalance}
        loanCount={loanCount}
      />
    </div>
  );
};

export default DashboardPage;
