import React from "react";
import LoanForm from "../components/LoanForm";

const LoanFormPage: React.FC = () => {
  const handleLoanSubmit = (loanData: {
    amount: number;
    type: string;
    tenure: number;
  }) => {
    console.log("Loan Application Data:", loanData);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Apply for Loan</h1>
      <LoanForm onSubmit={handleLoanSubmit} />
    </div>
  );
};

export default LoanFormPage;
