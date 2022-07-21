import React from "react";

export const Upi = () => {
  return (
    <div>
      <div>
        <h3>BHIM UPI</h3>
      </div>
      <hr />
      <div>
        <div>
          <input
            type="text"
            placeholder="VPA/UPI ID (eg. 9874658210@upi)"
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
