import React from "react";

interface AdminPanelProps {
  loans: Loan[];
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
}

interface Loan {
  id: number;
  type: string;
  amount: number;
  tenure: number;
  status: "approved" | "pending" | "rejected";
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  loans,
  onApprove,
  onReject,
}) => {
  return (
    <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Admin Panel</h2>
      {loans.length === 0 ? (
        <p>No pending loan applications.</p>
      ) : (
        <ul className="space-y-2">
          {loans.map((loan) => (
            <li key={loan.id} className="p-4 border rounded-lg">
              <div>
                <span className="font-medium">Loan Type:</span> {loan.type}
              </div>
              <div>
                <span className="font-medium">Amount:</span> ${loan.amount}
              </div>
              <div>
                <span className="font-medium">Tenure:</span> {loan.tenure}{" "}
                months
              </div>
              <div>
                <span className="font-medium">Status:</span> {loan.status}
              </div>
              {loan.status === "pending" && (
                <div className="flex mt-2 space-x-2">
                  <button
                    onClick={() => onApprove(loan.id)}
                    className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => onReject(loan.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;
