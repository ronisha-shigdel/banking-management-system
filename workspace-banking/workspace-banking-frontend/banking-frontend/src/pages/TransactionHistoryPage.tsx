import React, { useState } from "react";
import TransactionHistory from "../components/TransactionHistory";

const TransactionHistoryPage: React.FC = () => {
  const [transactions] = useState([
    { id: 1, date: "2024-10-01", amount: 200.5, description: "Loan Payment" },
    { id: 2, date: "2024-10-15", amount: 150.0, description: "Loan Payment" },
    { id: 3, date: "2024-10-30", amount: 250.75, description: "Loan Payment" },
  ]);

  return (
    <div className="max-w-2xl p-8 mx-auto">
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default TransactionHistoryPage;
