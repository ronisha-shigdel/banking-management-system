import React from "react";

interface DashboardProps {
  userName: string;
  accountBalance: number;
  loanCount: number;
}

const Dashboard: React.FC<DashboardProps> = ({
  userName,
  accountBalance,
  loanCount,
}) => {
  return (
    <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Welcome, {userName}</h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
          <span className="font-medium">Account Balance:</span>
          <span className="text-lg font-semibold">
            ${accountBalance.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
          <span className="font-medium">Total Loan Applications:</span>
          <span className="text-lg font-semibold">{loanCount}</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Apply for a Loan
        </button>
        <button className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
          View Loan Status
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
