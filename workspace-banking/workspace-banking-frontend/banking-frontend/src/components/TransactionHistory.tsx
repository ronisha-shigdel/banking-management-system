import React from "react";

interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
}) => {
  return (
    <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Transaction History</h2>
      {transactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="p-4 border rounded-lg">
              <div>
                <span className="font-medium">Date:</span> {transaction.date}
              </div>
              <div>
                <span className="font-medium">Amount:</span> $
                {transaction.amount.toFixed(2)}
              </div>
              <div>
                <span className="font-medium">Description:</span>{" "}
                {transaction.description}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;
