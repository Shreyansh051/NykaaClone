import { Box, TextField } from "@mui/material";
import React from "react";
import Style from "../payment.module.css";
export const Upi = () => {
  return (
    <div>
      <div>
        <h3 className={Style.gpayh}>BHIM UPI</h3>
      </div>
      <hr style={{ background: "#8c8d94" }} />
      <div>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: "0.5", width: "95%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="VPA/UPI ID (eg. 9874658210@upi)"
              variant="standard"
            />
          </Box>
        </div>
        <div>
          <button>{`Pay Now`}</button>
        </div>
      </div>
    </div>
  );
};
