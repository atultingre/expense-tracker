import React from "react";

const Output = () => {
  return (
    <div>
      <div className="output-container flex-space">
        <div>
          <p>Total Budget</p>
          <span id="amount">0</span>
        </div>
        <div>
          <p>Expenses</p>
          <span id="expenditure-value">0</span>
        </div>
        <div>
          <p>Balance</p>
          <span id="balance-amount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Output;
