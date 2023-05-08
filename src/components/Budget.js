import React from "react";

const Budget = () => {
  return (
    <div>
      <div className="total-amount-container">
        <h3>Budget</h3>
        <p className="hide error" id="budget-error">
          Value cannot be empty or negative
        </p>
        <input
          type="number"
          id="total-amount"
          placeholder="Enter Total Amount"
        />
        <button className="submit" id="total-amount-button">
          Set Budget
        </button>
      </div>
    </div>
  );
};

export default Budget;
