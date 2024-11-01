import React, { useState } from "react";
import AdminPanel from "../components/AdminPanel";

interface Loan {
  id: number;
  type: string;
  amount: number;
  tenure: number;
  status: "pending" | "approved" | "rejected";
}

const AdminPage: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([
    { id: 1, type: "Home", amount: 50000, tenure: 60, status: "pending" },
    { id: 2, type: "Auto", amount: 15000, tenure: 36, status: "pending" },
  ]);

  const updateLoanStatus = (
    loans: Loan[],
    id: number,
    newStatus: "approved" | "rejected"
  ): Loan[] => {
    return loans.map((loan) =>
      loan.id === id ? { ...loan, status: newStatus } : loan
    );
  };

  const handleApprove = (id: number) => {
    setLoans((prevLoans) => updateLoanStatus(prevLoans, id, "approved"));
  };

  const handleReject = (id: number) => {
    setLoans((prevLoans) => updateLoanStatus(prevLoans, id, "rejected"));
  };

  return (
    <div className="max-w-2xl p-8 mx-auto">
      <AdminPanel
        loans={loans}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default AdminPage;
