import { Box, TextField } from "@mui/material";
import React from "react";
import Style from "../payment.module.css";

export const GooglePay = () => {
  return (
    <div>
      <div>
        <h3 className={Style.gpayh}>GooglePay</h3>
      </div>
      <hr style={{ background: "#8c8d94" }} />
      <div>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: "0.5", width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Enter Mobile Number/ Google Pay UPI ID"
              variant="standard"
            />
          </Box>
        </div>
        <div>
          <button className={Style.cbutton}>SEND PAYMENT REQUEST</button>
        </div>
      </div>
    </div>
  );
};
