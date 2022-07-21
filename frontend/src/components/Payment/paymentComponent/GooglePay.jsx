import React from "react";

export const GooglePay = () => {
  return (
    <div>
      <div>
        <h3>GooglePay</h3>
      </div>
      <hr />
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Mobile Number/ Google Pay UPI ID"
            required
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    </div>
  );
};
