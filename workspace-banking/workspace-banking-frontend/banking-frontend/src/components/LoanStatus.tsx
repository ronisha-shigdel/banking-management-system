import React from "react";

interface LoanStatusProps {
  loans: Loan[];
}

interface Loan {
  id: number;
  type: string;
  amount: number;
  tenure: number;
  status: "approved" | "pending" | "rejected";
}

const LoanStatus: React.FC<LoanStatusProps> = ({ loans }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-lg font-semibold">Loan Status</h2>
      {loans.length === 0 ? (
        <p>No loan applications found.</p>
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
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`${
                    loan.status === "approved"
                      ? "text-green-500"
                      : loan.status === "pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LoanStatus;
