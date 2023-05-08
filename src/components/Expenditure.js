import React from "react";

const Expenditure = () => {
  return (
    <div>
      <div className="user-amount-container">
        <h3>Expenses</h3>
        <p className="hide error" id="product-title-error">
          Values cannot be empty
        </p>
        <input
          type="text"
          className="product-title"
          id="product-title"
          placeholder="Enter Title of Product"
        />
        <input
          type="number"
          id="user-amount"
          placeholder="Enter Cost of Product"
        />
        <button className="submit" id="check-amount">
          Check Amount
        </button>
      </div>
    </div>
  );
};

export default Expenditure;
