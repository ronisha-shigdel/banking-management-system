import React, { useState } from "react";

interface LoanFormProps {
  onSubmit: (loanData: LoanData) => void;
}

interface LoanData {
  amount: number;
  type: string;
  tenure: number;
}

const LoanForm: React.FC<LoanFormProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<string>("Personal");
  const [tenure, setTenure] = useState<number>(12);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const loanData = { amount, type, tenure };
    onSubmit(loanData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-lg space-y-4"
    >
      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Loan Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Loan Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="Personal">Personal</option>
          <option value="Home">Home</option>
          <option value="Auto">Auto</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="tenure"
          className="block text-sm font-medium text-gray-700"
        >
          Tenure (Months)
        </label>
        <input
          type="number"
          id="tenure"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Apply for Loan
      </button>
    </form>
  );
};

export default LoanForm;
