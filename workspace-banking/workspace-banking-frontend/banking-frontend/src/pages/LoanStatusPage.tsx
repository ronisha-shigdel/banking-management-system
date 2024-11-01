import React from "react";
import LoanStatus from "../components/LoanStatus";

const LoanStatusPage: React.FC = () => {
  const sampleLoans = [
    {
      id: 1,
      type: "Home",
      amount: 50000,
      tenure: 60,
      status: "approved" as "approved",
    },
    {
      id: 2,
      type: "Auto",
      amount: 15000,
      tenure: 36,
      status: "pending" as "pending",
    },
    {
      id: 3,
      type: "Personal",
      amount: 10000,
      tenure: 12,
      status: "rejected" as "rejected",
    },
  ];

  return (
    <div className="max-w-lg p-8 mx-auto">
      <h1 className="mb-4 text-2xl font-semibold">Loan Status</h1>
      <LoanStatus loans={sampleLoans} />
    </div>
  );
};

export default LoanStatusPage;
