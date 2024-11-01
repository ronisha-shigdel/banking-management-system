import React, { useState } from "react";

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [tenure, setTenure] = useState<number>(1);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculatePayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = tenure * 12;
    const payment =
      (amount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(payment);
  };

  return (
    <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Loan Calculator</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Loan Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Interest Rate (%)
        </label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tenure (Years)
        </label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        onClick={calculatePayment}
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Calculate Payment
      </button>
      {monthlyPayment !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Estimated Monthly Payment:</h3>
          <p className="text-xl">${monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
